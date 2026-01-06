function getCookie(cookieName) {
  if (arguments.length != 1) {
    throw new Error("Expected 1 argument, but got " + arguments.length);
  }

  if (typeof arguments[0] !== "string") {
    throw TypeError("cookie Name must be string");
  }

  const cookieValue = objectify()[cookieName];
  if (cookieValue == undefined) {
    throw new ReferenceError(
      "Cookie with name '" + cookieName + "' does not exist"
    );
  }

  return cookieValue;
}

function setCookie(cookieName, cookieValue, expiryDate) {
  if (arguments.length < 2 || arguments.length > 3) {
    throw new Error("Expected 2 or 3 argument, but got " + arguments.length);
  }

  if (typeof cookieName !== "string") {
    throw new TypeError("Cookie Name must be string");
  }
  if (cookieName == "") {
    throw new Error("Cookie name can't be an empty string");
  }
  if (/[=;\s]/.test(cookieName)) {
    throw new SyntaxError("Cookie name can't contain whitespace, '=', or ';'");
  }

  let cookie =
    encodeURIComponent(cookieName) +
    "=" +
    encodeURIComponent(cookieValue) +
    "; ";

  if (expiryDate) {
    let date;

    if (typeof expiryDate == "string") {
      date = new Date(expiryDate);
    } else if (expiryDate instanceof Date) {
      date = expiryDate;
    }

    if (!date || isNaN(date.getTime())) {
      throw new RangeError("Invalid expiry date provided");
    }

    cookie += "expires=" + date.toUTCString();
  }

  document.cookie = cookie;
}

function deleteCookie(cookieName) {
  if (arguments.length != 1) {
    throw new Error("Expected 1 argument, but got " + arguments.length);
  }

  if (typeof cookieName !== "string") {
    throw TypeError("cookie Name must be string");
  }

  if (!hasCookie(cookieName)) {
    throw new ReferenceError("Cannot delete cookie: Cookie not found");
  }

  setCookie(cookieName, "", new Date(0));
}

function showCookieList() {
  const entries = objectify();

  console.table(entries);
}

function hasCookie(cookieName) {
  if (arguments.length != 1) {
    throw new Error("Expected 1 argument, but got " + arguments.length);
  }

  if (typeof cookieName !== "string") {
    throw TypeError("cookie Name must be string");
  }

  return objectify()[cookieName] !== undefined;
}

function objectify() {
  if (!document.cookie) {
    return {};
  }

  const entries = document.cookie.split(";");

  const obj = {};
  for (let i = 0; i < entries.length; i++) {
    const entry = entries[i].trim();

    const separatorIndex = entry.indexOf("=");

    if (separatorIndex === -1) continue;

    try {
      const key = decodeURIComponent(entry.substring(0, separatorIndex));
      const value = decodeURIComponent(entry.substring(separatorIndex + 1));
      obj[key] = value;
    } catch (e) {
      if (e instanceof URIError) {
        throw new URIError("Cookie contained malformed URL-encoded characters");
      }
    }
  }

  return obj;
}
