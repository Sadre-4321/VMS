const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#primary-nav");

menuButton.addEventListener("click", () => {
  const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isExpanded));
  menuButton.setAttribute("aria-label", isExpanded ? "Open navigation" : "Close navigation");
  navigation.classList.toggle("is-open", !isExpanded);
});

navigation.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation");
    navigation.classList.remove("is-open");
  }
});

document.querySelector("#year").textContent = new Date().getFullYear();

document.querySelector("#enquiry-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;

  const fields = new FormData(form);
  const subject = `Website enquiry: ${fields.get("service")}`;
  const body = [
    `Name: ${fields.get("name")}`,
    `Phone: ${fields.get("phone")}`,
    `Service: ${fields.get("service")}`,
    "",
    "Requirement:",
    fields.get("message"),
  ].join("\n");
  const mailto = `mailto:vms.facility88@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  document.querySelector("#form-note").textContent = "Your email app will open with your enquiry ready to send.";
  document.querySelector("#form-note").classList.add("is-success");
  window.location.href = mailto;
});
