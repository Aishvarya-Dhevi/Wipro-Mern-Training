function login() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  if (user === "student" && pass === "1234") {
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid username or password");
  }
}

const activities = [
  { id: 1, activity: "Create tables from 12 to 19", subject: "Maths" },
  { id: 2, activity: "Solve algebra worksheets", subject: "Maths" },
  { id: 3, activity: "Learn plant life cycle", subject: "Science" },
  { id: 4, activity: "Write essay on school", subject: "English" }
];

function filterActivities(subject) {
  const list = document.getElementById("activityList");
  list.innerHTML = "";

  activities
    .filter(a => a.subject === subject)
    .forEach(a => {
      const li = document.createElement("li");
      li.innerText = a.activity;
      list.appendChild(li);
    });
}
