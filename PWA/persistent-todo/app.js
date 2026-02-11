if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("../sw.js")
      .then((reg) => console.log("service worker registered", reg))
      .catch((err) => console.log("worker registration failed", err));
  });
}

async function askNotificationPermission() {
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
    return "unsupported";
  }

  let permission = Notification.permission;
  if (permission !== "granted" && permission !== "denied") {
    permission = await Notification.requestPermission();
  }

  if (permission === "granted") {
    try {
      const registration = await navigator.serviceWorker.ready;
      registration.showNotification("Welcome to Task Trek!", {
        body: "You will now receive task reminders.",
        icon: "notification-icon.png",
      });
      addLog("Notification permission granted.");
      return "granted";
    } catch (err) {
      console.error("Error showing notification: ", err);
      return "error";
    }
  }

  addLog(`Notification status: ${permission}`);
  return permission;
}

const notificationBtn = document.getElementById("notification");
const addTaskBtn = document.getElementById("addTaskBtn");

notificationBtn.addEventListener("click", async () => {
  const permissionGranted = await askNotificationPermission();

  if (permissionGranted === "granted") {
    notificationBtn.style.backgroundColor = "#00c893";
    notificationBtn.style.borderColor = "#00c893";
    notificationBtn.style.color = "#fff";
  } else {
    notificationBtn.style.backgroundColor = "#e53e3e";
    notificationBtn.style.borderColor = "#e53e3e";
    notificationBtn.style.color = "#fff";
  }
});

const dateInput = document.getElementById("start");
if (dateInput) {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const dd = String(today.getDate()).padStart(2, "0");
  dateInput.value = `${yyyy}-${mm}-${dd}`;
  dateInput.setAttribute("min", `${yyyy}-${mm}-${dd}`);
}

function clampNumber(value, min, max) {
  const numeric = Number.parseInt(value, 10);

  if (Number.isNaN(numeric)) return null;

  return Math.min(max, Math.max(min, numeric));
}

function getTimeInputs() {
  const hoursInput = document.getElementById("task-hours");
  const minsInput = document.getElementById("task-mins");

  return { hoursInput, minsInput };
}

function normalizeTimeInputs() {
  const { hoursInput, minsInput } = getTimeInputs();

  const hours = clampNumber(hoursInput.value, 0, 23);
  const mins = clampNumber(minsInput.value, 0, 59);

  if (hours !== null) hoursInput.value = String(hours).padStart(2, "0");
  if (mins !== null) minsInput.value = String(mins).padStart(2, "0");
}

function addLog(message) {
  const logDiv = document.getElementById("logs");
  const p = document.createElement("p");
  p.className = "log-entry";
  p.textContent = `> ${new Date().toLocaleTimeString()}: ${message}`;
  logDiv.prepend(p);
}

async function renderTasks() {
  const taskList = document.getElementById("task-list");
  const tasks = await getAllTasks();
  taskList.innerHTML = "";

  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.className = `task-item ${task.notified ? "notified" : ""}`;

    li.innerHTML = `
      <div class="task-info">
        <strong class="${task.notified ? "crossed" : ""}">${task.details}</strong>
        <span>Due: ${task.deadline} at ${task.hours}:${task.mins}</span>
      </div>
      <button onclick="handleDelete(${task.id})"><i class="fa-solid fa-trash"></i></button>
    `;
    taskList.appendChild(li);
  });
}

async function checkDeadlines() {
  const now = new Date();
  const tasks = await getAllTasks();

  tasks.forEach(async (task) => {
    const taskTime = new Date(`${task.deadline}T${task.hours}:${task.mins}:00`);

    if (now >= taskTime && !task.notified) {
      triggerNotification(task);
      task.notified = true;
      await updateTask(task);
      addLog(`Received Notification of Task "${task.details}"`);
      renderTasks();
    }
  });
}

function triggerNotification(task) {
  navigator.serviceWorker.ready.then((registration) => {
    registration.showNotification("Task Reminder", {
      body: `Don't forget to complete: ${task.details}`,
      tag: `task-reminder-${task.id}`,
      icon: "notification-icon.png",
    });
  });
}

addTaskBtn.addEventListener("click", async () => {
  const details = document.getElementById("task-details").value;
  const deadline = document.getElementById("start").value;
  const { hoursInput, minsInput } = getTimeInputs();
  const rawHours = hoursInput.value || "00";
  const rawMins = minsInput.value || "00";
  const hours = clampNumber(rawHours, 0, 23);
  const mins = clampNumber(rawMins, 0, 59);

  if (!details || !deadline) return addLog("Error: Missing details or date.");
  if (hours === null || mins === null) {
    return addLog("Error: Enter valid time values for hours and minutes.");
  }

  hoursInput.value = String(hours).padStart(2, "0");
  minsInput.value = String(mins).padStart(2, "0");

  const newTask = {
    details,
    deadline,
    hours: String(hours).padStart(2, "0"),
    mins: String(mins).padStart(2, "0"),
    notified: false,
  };

  await addTask(newTask);
  addLog(`Task "${details}" scheduled for ${deadline} ${hours}:${mins}`);
  renderTasks();
});

const { hoursInput, minsInput } = getTimeInputs();
if (hoursInput && minsInput) {
  hoursInput.addEventListener("blur", normalizeTimeInputs);
  minsInput.addEventListener("blur", normalizeTimeInputs);
}

async function handleDelete(id) {
  await deleteTask(id);
  addLog(`Task ID ${id} deleted (Schedule Canceled)`);
  renderTasks();
}

setInterval(checkDeadlines, 15000);

window.addEventListener("load", () => {
  (async () => {
    const permission = await askNotificationPermission();

    if (permission === "granted") {
      notificationBtn.style.backgroundColor = "#00c893";
      notificationBtn.style.borderColor = "#00c893";
      notificationBtn.style.color = "#fff";
    } else {
      notificationBtn.style.backgroundColor = "#e53e3e";
      notificationBtn.style.borderColor = "#e53e3e";
      notificationBtn.style.color = "#fff";
    }
  })();
  renderTasks();
  addLog("Task Trek System Initialized.");
});
