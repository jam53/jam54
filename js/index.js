/**
 * When the user is on mobile, a hamburger icon appears.
 * This function will unfold/fold the menu options when the user clicks on the hamburger.
 */
document.getElementById("hamburger").addEventListener("click", function (event)
{
    const mobileMenu = document.getElementById("mobile-menu-4");

    mobileMenu.classList.contains("hidden") ? mobileMenu.classList.remove("hidden") : mobileMenu.classList.add("hidden");
});
