class NavBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `<div class="w-full p-4 flex justify-between items-center bg-head font-primary lg:px-5">
            <a href="#">
                <h1 class="text-lg tracking-wider text-slate-100 font-bold font-secondary uppercase md:text-xl lg:text-2xl">Formula Indonesia</h1>
            </a>
            <button id="hamburger" name="hamburger" class="block -translate-y-1 lg:hidden">
                <span class="hamburger-line origin-top-left"></span>
                <span class="hamburger-line"></span>
                <span class="hamburger-line origin-bottom-left"></span>
            </button>
            <nav id="navMenu" class="hidden w-full absolute p-4 mx-auto left-0 top-[3.7rem] bg-red-500 z-10 lg:relative lg:top-0 lg:w-auto lg:mx-0 lg:p-0 lg:bg-transparent lg:block">
                <ul class="flex flex-wrap gap-5 items-center text-white md:text-lg lg:gap-8">
                    <li><a id="displayScheduleButton" class="nav-border" href="javascript:void(0)">Schedule</a></li>
                    <li><a class="nav-border" href="#driver">F1 Driver</a></li>
                    <li><a class="nav-border" href="#constructor">F1 Constructor</a></li>
                    <li><a class="nav-border" href="#about">About</a></li>
                    <li class="flex items-center pl-2">
                        <div class="flex">
                            <span class="mr-2 text-sm text-white">Light</span>
                            <input type="checkbox" class="hidden" id="dark-toggle">
                            <label for="dark-toggle">
                                <div class="flex h-5 w-9 cursor-pointer items-center rounded-full bg-slate-100 p-1 dark:bg-slate-500">
                                    <div class="toggle-circle h-4 w-4 rounded-full bg-slate-500 transition duration-300 ease-in-out dark:bg-slate-100"></div>
                                </div>
                            </label>
                            <span class="ml-2 text-sm text-white">Dark</span>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>`
    }
}

customElements.define('nav-bar', NavBar);