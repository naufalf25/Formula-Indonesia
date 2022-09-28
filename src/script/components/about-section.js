class AboutSection extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `<section id="about" class="w-full mt-10">
            <div class="container">
                <div class="p-4 bg-slate-800 text-white text-center">
                    <h2 class="font-secondary text-xl lg:text-2xl uppercase font-bold">About</h2>
                    <p class="mt-3 font-primary text-sm md:text-base lg:text-lg">This website is build with Formula 1 API from <a href="https://ergast.com/mrd/" class="uppercase border-b-[1px] border-b-transparent hover:border-b-red-500" target="_blank">Ergast API</a> And using framework <a href="https://tailwindcss.com" class="uppercase border-b-[1px] border-b-transparent hover:border-b-red-500" target="_blank">TailwindCSS</a></p>
                    <p class="font-primary text-xs md:text-sm lg:text-base">Made with <span class="text-red-600">❤</span> for All F1 Fans by <a href="https://www.instagram.com/mnaufalfarras_/" class="border-b-[1px] border-b-transparent hover:border-b-red-500" target="_blank">Muhammad Naufal Farras</a> &copy; 2022</p>
                </div>
            </div>
        </section>`;
    }
}

customElements.define('about-section', AboutSection);