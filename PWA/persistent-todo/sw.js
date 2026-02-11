importScripts("idb.js");
importScripts("db.js");

self.addEventListener("notificationclick", (event) => {
  console.log("On notification click: ", event.notification.tag, event);
  event.notification.close();

  event.waitUntil(
    clients
      .matchAll({
        type: "window",
      })
      .then((clientList) => {
        for (const client of clientList) {
          console.log("client url", client.url);
          if (
            (client.url.includes("/") || client.url.includes("/index.html")) &&
            "focus" in client
          )
            return client.focus();
        }
        if (clients.openWindow) return clients.openWindow("/");
      }),
  );
});
