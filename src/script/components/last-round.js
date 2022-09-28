class LastRound extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `<section id="lastRound" class="w-full">
            <div class="container">
                <div class="w-full p-4 min-h-[20rem] bg-slate-100 rounded-b-xl lg:max-h-96 dark:bg-slate-800">
                    <h2 class="text-center text-2xl font-bold uppercase tracking-widest dark:text-white">Last Round</h2>
                    <div class="mt-4 lg:flex lg:justify-center lg:gap-4">
                        <div class="pt-3 pr-3 border-t-4 border-r-4 border-t-red-600 border-r-red-600 rounded-tr-xl lg:w-1/2 lg:max-h-full">
                            <img id="lastRoundImage" class="w-full grayscale rounded-tr-xl lg:object-cover lg:h-64 lg:object-bottom">
                        </div>
                        <div class="lg:w-1/2 lg:mx-auto">
                            <h3 id="lastRoundTitle" class="mt-2 font-secondary font-bold text-xl uppercase tracking-widest dark:text-white"></h3>
                            <p id="lastRoundDate" class="dark:text-white"></p>
                            <a id="resultsButton" href="javascript:void(0)" class="group dark:text-white">Results <i class="fa-solid fa-angle-right transition duration-300 group-hover:text-red-600 group-hover:translate-x-1"></i></a>
                            <div id="displayPodium" class="flex items-end gap-1"></div>
                        </div>
                    </div>
                </div>
                <div id="displayResults" class="hidden fixed top-14 lg:top-16 w-full p-4 bg-slate-100 rounded-xl max-h-[92vh] overflow-y-auto dark:bg-slate-600">
                    <a href="javascript:void(0)" id="closeResults" class="w-full text-3xl flex justify-end items-center hover:opacity-60 dark:text-white"><i class="fa-solid fa-xmark"></i></a>
                    <h2 class="text-center text-2xl font-bold uppercase tracking-widest dark:text-white">Last Round Results</h2>
                    <div id="lastRoundPodium" class="mt-8 flex items-end gap-1"></div>
                    <div class="mt-4">
                        <table id="displayFullResults" class="w-full table-auto font-secondary text-center dark:text-white">
                            <thead class="bg-slate-200 text-sm lg:text-base dark:bg-slate-800">
                                <tr class="h-10">
                                    <th>Position</th>
                                    <th>Driver</th>
                                    <th>Name</th>
                                    <th>Constructor</th>
                                    <th>Points</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
        </section>`;
    }
}

customElements.define('last-round', LastRound);