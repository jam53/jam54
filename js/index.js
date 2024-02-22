/**
 * When the user is on mobile, a hamburger icon appears.
 * This function will unfold/fold the menu options when the user clicks on the hamburger.
 */
document.getElementById("hamburger").addEventListener("click", function (event)
{
    const mobileMenu = document.getElementById("mobile-menu-4");

    mobileMenu.classList.contains("hidden") ? mobileMenu.classList.remove("hidden") : mobileMenu.classList.add("hidden");
});

/**
 * This handles the fade in animation of elements
 */
const animatedElements = document.querySelectorAll('.animated-element');

const observer = new IntersectionObserver((entries) => {
    let delay = 0;
    entries.forEach((entry) => {
        if (entry.isIntersecting)
        {
            if (entry.intersectionRatio === 1)
            {//Check if the element is fully visible, i.e. when the element is immediately visible on page load
                entry.target.classList.add('quick');
            }

            setTimeout(() => {
                entry.target.classList.add('in-view');
            }, delay);
            delay += 75; //Increment delay for subsequent elements to introduce a slight delay when multiple elements are revealed simultaneously, e.g. during initial page load

            observer.unobserve(entry.target); //Unobserve the element after it's in view to prevent further animations
        }
    });
}, { threshold: 0.3 }); //How much percent of the element has to be visible, before the fade in animation is played

animatedElements.forEach(element => {
    observer.observe(element);
});