import "../../node_modules/flowbite/dist/flowbite.min.js";

class ImageCarousel extends HTMLElement
{
    static observedAttributes = ["width", "height", "styleClasses"]

    constructor()
    {
        super();

        if ([...this.children].filter(child => child instanceof HTMLImageElement).length === 0)
        {
            throw new Error("The 'image-carousel' element must contain at least one 'img' tag as a child.");
        }

        this.images = [...this.childNodes].filter(child => child instanceof HTMLImageElement);

        if (this.getAttribute("height") === null)
        {
            this.calculateAndSetHeight();
        }
    }

    calculateAndSetHeight()
    {
        const parentWidth = this.parentNode.clientWidth;
        const parentComputedStye = getComputedStyle(this.parentNode);
        const maxWidth = parentWidth - parseFloat(parentComputedStye.paddingLeft) - parseFloat(parentComputedStye.paddingRight);

        let maxHeight = 0;

        this.images.forEach(image =>
        {
            const aspectRatio = image.naturalWidth / image.naturalHeight;
            const height = maxWidth / aspectRatio;
            if (height > maxHeight)
            {
                maxHeight = height;
            }
        });

        this.setAttribute("height", `${maxHeight}px`);
        this.connectedCallback();
    }

    /**
     * Invoked when the element is attached to the DOM
     */
    connectedCallback()
    {
        this.innerHTML = `
<div class="relative w-full" data-carousel="static">
    <!-- Carousel wrapper -->
    <div class="relative overflow-hidden ${this.getAttribute("styleClasses")}" style="width: ${this.getAttribute("width")}; height: ${this.getAttribute("height")}">
    ${this.images.map(image => {
        return `
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <img src="${image.src}" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt=${image.alt}>
            </div>
        `;
    })}
    </div>
    <!-- Slider indicators -->
    <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
    ${this.images.map((_, index) => {
        return `
            <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide ${index}" data-carousel-slide-to="${index}"></button>
        `;
    })}
    </div>
    <!-- Slider controls -->
    <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-800/60 group-hover:bg-gray-600/80  group-focus:outline-none transition-all">
            <svg class="w-4 h-4 text-gray-400 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-800/60 group-hover:bg-gray-600/80  group-focus:outline-none transition-all">
            <svg class="w-4 h-4 text-gray-400 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span class="sr-only">Next</span>
        </span>
    </button>
</div>
        `;
    }
}

window.customElements.define("image-carousel", ImageCarousel);