class RaceSchedule extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `<section id="displaySchedule" class="hidden w-full fixed top-16 z-10">
            <div class="container">
                <div class="w-full p-4 bg-slate-100 h-[85vh] lg:h-[92vh] overflow-y-auto z-10 dark:bg-slate-600">
                    <a href="javascript:void(0)" id="closeSchedule" class="w-full text-3xl flex justify-end items-center  hover:opacity-60 dark:text-white"><i class="fa-solid fa-xmark"></i></a>
                    <h2 class="text-3xl text-center font-bold uppercase tracking-widest dark:text-white">Race Schedule</h2>
                    <p class="mt-4 font-secondary text-lg text-center dark:text-white">Search the race schedule for the race you want to know</p>
                    <form class="mx-auto mt-4 w-full md:w-1/2 h-10 flex">
                        <input type="text" name="search" id="raceSearch" class="p-4 w-3/4 font-primary rounded-l-xl bg-slate-200 dark:bg-slate-200">
                        <button id="searchButton" type="submit" class="w-1/4 lg:w-1/5 bg-red-600 font-secondary text-white rounded-r-xl border-[1px] border-red-600 transition duration-300 hover:bg-white hover:text-red-600">Search</button>
                    </form>
                    <div id="displaySearchSchedule" class="mt-10"></div>
                </div>
            </div>
        </section>`;
    }
}

customElements.define('race-schedule', RaceSchedule);