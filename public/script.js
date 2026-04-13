document.getElementById("form").onsubmit = async (e) => {
  e.preventDefault();

  await fetch("/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: name.value,
      email: email.value,
      message: message.value
    })
  });

  alert("Message sent!");
};