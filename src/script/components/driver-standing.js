class DriverStanding extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `<section id="driver" class="w-full mt-10">
            <h2 class="font-primary text-xl xl:text-2xl font-bold text-center dark:text-white">World Driver's Championship</h2>
            <div class="container px-2">
                <table class="mt-2 w-full table-auto font-secondary dark:text-white">
                    <thead class="bg-slate-200 text-center text-sm lg:text-base dark:bg-slate-800">
                        <tr class="h-10 px-2">
                            <th>Ranking</th>
                            <th>Name</th>
                            <th>Nationality</th>
                            <th>Constructor</th>
                            <th>Points</th>
                        </tr>
                    </thead>
                    <tbody id="dataDriver" class="text-center text-sm lg:text-base"></tbody>
                </table>
            </div>
        </section>`;
    }
}

customElements.define('driver-standing', DriverStanding);