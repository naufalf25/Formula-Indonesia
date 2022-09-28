
const main = () => {
    const body = document.querySelector('body');
    const loading = document.createElement('div');
    loading.setAttribute('id', 'loading');
    loading.classList.add('fixed', 'top-0', 'left-0', 'w-full', 'h-full', 'transition', 'duration-500', 'bg-slate-100', 'z-50', 'dark:bg-slate-700');
    loading.innerHTML = `<div class="translate-y-full"><svg class="w-40 mx-auto fill-black dark:fill-white" version="1.1" id="L9" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    viewBox="0 0 100 100" enable-background="new 0 0 0 0" xml:space="preserve">
        <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
            <animateTransform 
            attributeName="transform" 
            attributeType="XML" 
            type="rotate"
            dur="1s" 
            from="0 50 50"
            to="360 50 50" 
            repeatCount="indefinite" />
        </path>
    </svg>
    <p class="font-secondary font-bold text-center uppercase dark:text-white">Loading</p>
    </div>`;
    body.append(loading);
    window.addEventListener('load', () => {
        setTimeout(removeLoader, 4000)
    });

    const loader = document.querySelector('#loading');
    const removeLoader = () => {
        loader.classList.replace('opacity-100', 'opacity-0');
        loader.addEventListener('transitionend', loader.remove());
    }

    const hamburger = document.querySelector('#hamburger');
    const navMenu = document.querySelector('#navMenu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger-active');
        navMenu.classList.toggle('hidden');
    });

    window.addEventListener('click', (e) => {
        if (e.target != hamburger && e.target != navMenu) {
            hamburger.classList.remove('hamburger-active');
            navMenu.classList.add('hidden');
        }
    });

    const darkToggle = document.querySelector('#dark-toggle');
    const html = document.querySelector('html');

    darkToggle.addEventListener('click', () => {
        if (darkToggle.checked) {
            html.classList.add('dark');
            localStorage.theme = 'dark';
        } else {
            html.classList.remove('dark');
            localStorage.theme = 'light';
        }
    });

    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        darkToggle.checked = true;
        document.documentElement.classList.add('dark');
    } else {
        darkToggle.checked = false;
        document.documentElement.classList.remove('dark');
    };

    const displayResults = document.querySelector('#displayResults');
    const resultsButton = document.querySelector('#resultsButton');
    resultsButton.addEventListener('click', (e) => {
        e.preventDefault();
        displayResults.classList.remove('hidden');
        body.classList.add('overflow-y-hidden');
    });

    const closeResultsButton = document.querySelector('#closeResults');
    closeResultsButton.addEventListener('click', (e) => {
        e.preventDefault();
        displayResults.classList.add('hidden');
        body.classList.remove('overflow-y-hidden');
    });

    const displayBroadcast = document.querySelector('#displayBroadcast');
    const displayBroadcastButton = document.querySelector('#broadcastButton');
    displayBroadcastButton.addEventListener('click', (e) => {
        e.preventDefault();
        displayBroadcast.classList.remove('hidden');
        body.classList.add('overflow-y-hidden');
    });

    const closeBroadcastButton = document.querySelector('#closeBroadcast');
    closeBroadcastButton.addEventListener('click', (e) => {
        e.preventDefault();
        displayBroadcast.classList.add('hidden');
        body.classList.remove('overflow-y-hidden');
    });

    const displaySchedule = document.querySelector('#displaySchedule');
    const displayScheduleButton = document.querySelector('#displayScheduleButton');
    displayScheduleButton.addEventListener('click', (e) => {
        e.preventDefault();
        const displaySearchResult = document.querySelector('#displaySearchSchedule');
        if (displaySearchResult.childNodes.length > 0) {
            displaySearchResult.innerHTML = '';
        }
        displaySchedule.classList.remove('hidden');
        body.classList.add('overflow-y-hidden');
    });

    const closeScheduleButton = document.querySelector('#closeSchedule');
    closeScheduleButton.addEventListener('click', (e) => {
        e.preventDefault();
        displaySchedule.classList.add('hidden');
        body.classList.remove('overflow-y-hidden');
    });
}
export default main;