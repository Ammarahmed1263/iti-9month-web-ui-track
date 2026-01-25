(function () {
  if (!window.localStorage) {
    window.localStorage = {
      setItem: function (key, value) {
        const date = new Date();
        date.setFullYear(date.getFullYear() + 1);

        setCookie("LS_" + key, value, date);
      },

      getItem: function (key) {
        try {
          return getCookie("LS_" + key);
        } catch (e) {
          return null;
        }
      },

      removeItem: function (key) {
        if (hasCookie("LS_" + key)) {
          deleteCookie("LS_" + key);
        }
      },

      clear: function () {
        const allCookies = objectify();
        for (const cookieName in allCookies) {
          if (cookieName.indexOf("LS_") === 0) {
            deleteCookie(cookieName);
          }
        }
      },
    };
  }

  if (!window.sessionStorage) {
    window.sessionStorage = {
      setItem: function (key, value) {
        setCookie("SS_" + key, value);
      },

      getItem: function (key) {
        try {
          return getCookie("SS_" + key);
        } catch (e) {
          return null;
        }
      },

      removeItem: function (key) {
        if (hasCookie("SS_" + key)) {
          deleteCookie("SS_" + key);
        }
      },

      clear: function () {
        const allCookies = objectify();
        for (const cookieName in allCookies) {
          if (cookieName.indexOf("SS_") === 0) {
            deleteCookie(cookieName);
          }
        }
      },
    };
  }
})();
