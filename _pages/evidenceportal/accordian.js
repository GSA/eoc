function toggleFAQ(faqId) {
  const faqContent = document.getElementById(faqId);
  const icon = document.getElementById("icon-" + faqId);

  if (faqContent.style.display === "none" || faqContent.style.display === "") {
    faqContent.style.display = "block";
    icon.setAttribute(
      "d",
      "M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
    ); // Set to minus icon
  } else {
    faqContent.style.display = "none";
    icon.setAttribute(
      "d",
      "M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
    ); // Set to plus icon
  }
}
