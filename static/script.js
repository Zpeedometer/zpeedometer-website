// Sections
const navListItems = document.querySelectorAll("nav li:not(:last-of-type)");

navListItems.forEach(item => item.onclick = () => {
  const sectionId = item.id.replace("Link", "");
  if (!(window.location.pathname === "/")) window.location.href = "/";
  if (["features", "faq"].includes(sectionId) && document.getElementById(sectionId)) window.scrollTo({ top: sectionId === "home" ? 0 : document.getElementById(sectionId).offsetTop - 100, behavior: "smooth" });
});

// Icons
lucide.createIcons();