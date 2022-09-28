class NextRound extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `<section id="nextRound" class="w-full">
            <div class="container">
                <div class="w-full p-4 min-h-[20rem] bg-slate-100 lg:max-h-96 dark:bg-slate-800">
                    <h2 class="text-center text-2xl font-bold uppercase tracking-widest dark:text-white">Next Round</h2>
                    <div class="mt-4 lg:flex lg:justify-center lg:gap-4">
                        <div class="pt-3 pr-3 border-t-4 border-r-4 border-t-red-600 border-r-red-600 rounded-tr-xl lg:w-1/2 lg:max-h-full">
                            <img id="nextRoundImage" class="w-full grayscale rounded-tr-xl lg:object-cover lg:h-64 lg:object-bottom">
                        </div>
                        <div class="lg:w-1/2 lg:mx-auto dark:text-white">
                            <h3 id="nextRoundTitle" class="mt-2 font-secondary font-bold text-xl uppercase tracking-widest"></h3>
                            <p id="nextRoundDate"></p>
                            <div id="displayDate" class="mt-2 w-full md:flex md:gap-32 lg:gap-0"></div>
                            <button id="broadcastButton" class="watchButton">How I Can Watch Formula 1 ?</button>
                        </div>
                    </div>
                </div>
                <div id="displayBroadcast" class="hidden fixed top-14 lg:top-16 w-full p-4 bg-slate-100 max-h-[92vh] overflow-y-auto text-center z-10 dark:bg-slate-600">
                    <a href="javascript:void(0)" id="closeBroadcast" class="w-full text-3xl flex justify-end items-center hover:opacity-60 dark:text-white"><i class="fa-solid fa-xmark"></i></a>
                    <h2 class="text-3xl font-bold uppercase tracking-widest dark:text-white">F1 Broadcast Information</h2>
                    <p class="mt-4 font-secondary text-lg dark:text-white">This is the full list of countries and channels that broadcast Formula 1 around the world</p>
                    <table id="displayBroadcastList" class="mt-10 mx-auto w-3/4 table-auto font-secondary text-center dark:text-white">
                        <thead class="bg-slate-300 text-sm md:text-base lg:text-lg font-bold dark:bg-slate-800">
                            <tr class="h-10">
                                <td>Country</td>
                                <td>Channel</td>
                            </tr>
                        </thead>
                    </table>
                    <p class="mt-10 py-4 font-secondary text-center text-xs md:text-sm dark:text-white">*Data source from <a href="https://formula1.com" target="_blank" class="hover:text-red-600">Official Formula 1</a>*</p>
                </div>
            </div>
        </section>`;
    }
}

customElements.define('next-round', NextRound);