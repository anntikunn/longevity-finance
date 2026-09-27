const form = document.getElementById("contact-form");
if (form) {
  form.addEventListener("submit", event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const topic = document.getElementById("topic").value.trim();
    const page = document.getElementById("page-url").value.trim();
    const message = document.getElementById("message").value.trim();
    const subject = `Longevity Finance: ${topic}`;
    const body = [page ? `Page: ${page}` : "", message].filter(Boolean).join("\n\n");
    const link = `mailto:barukabusiness@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = link;
  });
}
