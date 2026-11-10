/* ICT HUB frontend preview.
   Demo-only session handling. Replace with Firebase Authentication and Firestore
   before using this portal with real student accounts. */
const authView = document.getElementById("auth-view");
const dashboardView = document.getElementById("dashboard-view");
const contentView = document.getElementById("content-view");
const authForm = document.getElementById("auth-form");
const authMessage = document.getElementById("auth-message");
const switchButton = document.getElementById("switch-auth");
const nameField = document.getElementById("name-field");
const authHeading = document.getElementById("auth-heading");
const authSubheading = document.getElementById("auth-subheading");
const authSubmit = document.getElementById("auth-submit");
let registerMode = false;
let currentStudent = null;

function showView(view) {
  [authView, dashboardView, contentView].forEach(section => section.classList.add("hidden"));
  view.classList.remove("hidden");
}
function renderDashboard(student) {
  currentStudent = student;
  document.getElementById("welcome-name").textContent = student.name;
  document.getElementById("dashboard-name").textContent = student.name.split(" ")[0];
  document.getElementById("profile-name").textContent = student.name;
  document.getElementById("profile-email").textContent = student.email;
  showView(dashboardView);
}
switchButton.addEventListener("click", () => {
  registerMode = !registerMode;
  nameField.classList.toggle("hidden", !registerMode);
  document.getElementById("student-name").required = registerMode;
  authHeading.textContent = registerMode ? "Create Student Account" : "Student Login";
  authSubheading.textContent = registerMode ? "Enter your details to preview the student portal." : "Sign in to continue to your dashboard.";
  authSubmit.textContent = registerMode ? "Create account" : "Login";
  document.getElementById("switch-copy").textContent = registerMode ? "Already registered?" : "New student?";
  switchButton.textContent = registerMode ? "Login" : "Create an account";
  authMessage.textContent = "";
});
authForm.addEventListener("submit", event => {
  event.preventDefault();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  if (password.length < 6) {
    authMessage.textContent = "For this preview, enter at least 6 characters.";
    return;
  }
  const name = registerMode ? document.getElementById("student-name").value.trim() : (email.split("@")[0] || "Student");
  if (!name) {
    authMessage.textContent = "Please enter your full name.";
    return;
  }
  authMessage.textContent = "";
  renderDashboard({ name, email });
});
document.getElementById("logout-btn").addEventListener("click", () => {
  currentStudent = null;
  authForm.reset();
  showView(authView);
});
document.querySelectorAll("[data-page]").forEach(card => {
  card.addEventListener("click", () => {
    const page = card.dataset.page;
    const papers = page === "papers";
    document.getElementById("content-heading").textContent = papers ? "MCQ Papers" : "My Attendance";
    document.getElementById("content-description").textContent = papers ? "Online multiple-choice practice." : "Your classroom attendance information.";
    document.getElementById("empty-icon").textContent = papers ? "✎" : "▦";
    document.getElementById("empty-heading").textContent = papers ? "MCQ papers are coming soon" : "Attendance records are coming soon";
    document.getElementById("empty-description").textContent = papers
      ? "The online paper feature will be added here after the question and marking system is connected."
      : "Your teacher will record attendance by scanning your personal student QR code. Your attendance history will appear here.";
    showView(contentView);
  });
});
document.getElementById("back-dashboard").addEventListener("click", () => {
  if (currentStudent) showView(dashboardView);
});