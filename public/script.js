function scrollToSection() {
  document.getElementById("projects").scrollIntoView({
    behavior: "smooth"
  });
}

document.querySelectorAll(".dropdown > a").forEach(item => {
  item.addEventListener("click", function(e) {
    e.preventDefault();
    let menu = this.nextElementSibling;

    menu.style.display =
      menu.style.display === "block" ? "none" : "block";
  });
});

document.getElementById("form").onsubmit = async (e) => {
  e.preventDefault();

  await fetch("/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: name.value,
      email: email.value,
      message: message.value
    })
  });

  alert("Message sent!");
};