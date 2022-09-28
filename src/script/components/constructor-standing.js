class ConstructorStanding extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `<section id="constructor" class="w-full mt-10">
            <h2 class="font-primary text-xl xl:text-2xl font-bold text-center dark:text-white">World Constructor's Championship</h2>
            <div class="container px-2">
                <table class="mt-2 w-full table-auto font-secondary dark:text-white">
                    <thead class="bg-slate-200 text-center text-sm lg:text-base dark:bg-slate-800">
                        <tr class="h-10 px-2">
                            <th>Ranking</th>
                            <th>Name</th>
                            <th>Nationality</th>
                            <th>Wins</th>
                            <th>Points</th>
                        </tr>
                    </thead>
                    <tbody id="dataConstructor" class="text-center text-sm lg:text-base"></tbody>
                </table>
            </div>
        </section>`;
    }
}

customElements.define('constructor-standing', ConstructorStanding);