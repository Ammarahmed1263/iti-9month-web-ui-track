// setCookie();
// setCookie("userName", "profile", "1/11/2026", "extra");
// setCookie(123, "val");
// setCookie("", "val");
// setCookie("userName;", "Ammar");
// setCookie("user", "val", "invalid-date");
// setCookie("complex Data", "test@email.com");

setCookie("userName", "Ammar", "1/11/2026");
setCookie("sessionUser", "SessionValue");
setCookie("age", "22", new Date("1/26/2026"));

// getCookie();
// getCookie(1);
// getCookie("nonExistent");

console.log("Retrieved:", getCookie("userName"));
// console.log("Retrieved:", getCookie("complex Data"));

// deleteCookie();
// deleteCookie(123);
// deleteCookie("nonExistent");

deleteCookie("userName");
try {
  getCookie("userName");
} catch (e) {
  console.log("Verification: Cookie deleted successfully", e.message);
}

showCookieList();
console.log(hasCookie("sessionUser"));
console.log(hasCookie("userName"));
