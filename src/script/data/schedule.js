const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const schedule = [];
const raceDate = [];

const raceSchedule = () => {
    fetch('https://ergast.com/api/f1/current.json', {
        'method': 'GET',
        'redirect': 'follow',
    })
        .then(response => response.json())
        .then(result => getData(result))
        .catch(message => console.log(message))
};

const getData = result => {
    const set = result.MRData.RaceTable.Races;
    set.forEach(e => {
        getRace(e);
    });
    getSearch(result);
}

const getRace = race => {
    schedule.push(race);
    raceDate.push(new Date(`${race.date}T${race.time}`));
    nextRound();
    lastRound();
}

const getCountdown = date => {
    let countdownDate = date.getTime();
    let x = setInterval(() => {
        let now = new Date().getTime();
        let distance = countdownDate - now;

        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        const displayCountdown = document.querySelector('#countdown');
            
        displayCountdown.innerHTML = `${days}D ${hours}:${minutes}:${seconds}`;
            
        if (distance < 0) {
            clearInterval(x);
            displayCountdown.innerHTML = "NOW";
        }
    }, 1000);
}

const nextRound = () => {
    if (raceDate.length == 22) {
        const fixDate = raceDate;
        const today = new Date();
        const closest = fixDate.reduce((a, b) => {
            const adiff = a - today;
            return adiff > 0 && adiff < b - today ? a : b;
        });
        getCountdown(closest);
        displayNextRound(closest);
    }
}

const lastRound = () => {
    if (raceDate.length == 22) {
        const fixDate = raceDate;
        const today = new Date();
        const closest = fixDate.reduce((a, b) => {
            const adiff = b - today;
            return adiff > 0 && adiff > a - today ? a : b;
        });
        displayLastRound(closest);
    }
}

const displayNextRound = date => {
    const dateRace = date;
    for (let i = 0; i < schedule.length; i++) {
        const nextDate = schedule[i];
        if (dateRace.toDateString() === new Date(nextDate.date).toDateString()) {
            const firstPractice = new Date(nextDate.FirstPractice.date);
            const nextRoundTitle = document.querySelector('#nextRoundTitle');
            const nextRoundDate = document.querySelector('#nextRoundDate');
            const nextRoundImage = document.querySelector('#nextRoundImage');
            nextRoundTitle.innerText = nextDate.raceName;
            nextRoundDate.innerText = `${firstPractice.getDate()} ${monthNames[firstPractice.getMonth()]} ${firstPractice.getFullYear()} - ${dateRace.getDate()} ${monthNames[dateRace.getMonth()]} ${dateRace.getFullYear()}`;
            nextRoundImage.src = `./image/circuit/${nextDate.Circuit.circuitId}.jpg`;
            nextRoundImage.alt = `${nextDate.raceName}`
            nextRoundSchedule(nextDate);
        }
    }
}

const nextRoundSchedule = date => {
    const displayNextRoundDate = document.querySelector('#displayDate');
    const practiceList = document.createElement('div');
    practiceList.classList.add('lg:w-1/2');
    if (!date.Sprint) {
        practiceList.innerHTML = `<table class="table"><tbody><tr class="h-10">
            <td>Practice 1</td>
            <td>${dayNames[new Date(date.FirstPractice.date).getDay()]}</td>
            <td>
                <p class="time">${new Date(date.FirstPractice.date + 'T' + date.FirstPractice.time).getHours()}:00 - ${new Date(date.FirstPractice.date + 'T' + date.FirstPractice.time).getHours()+1}:00</p>
            </td>
        </tr>
        <tr class="h-10">
            <td>Practice 2</td>
            <td>${dayNames[new Date(date.SecondPractice.date).getDay()]}</td>
            <td>
                <p class="time">${new Date(date.SecondPractice.date + 'T' + date.SecondPractice.time).getHours()}:00 - ${new Date(date.SecondPractice.date + 'T' + date.SecondPractice.time).getHours()+1}:00</p>
            </td>
        </tr>
        <tr class="h-10">
            <td>Practice 3</td>
            <td>${dayNames[new Date(date.ThirdPractice.date).getDay()]}</td>
            <td>
                <p class="time">${new Date(date.ThirdPractice.date + 'T' + date.ThirdPractice.time).getHours()}:00 - ${new Date(date.ThirdPractice.date + 'T' + date.ThirdPractice.time).getHours()+1}:00</p>
            </td>
        </tr></tbody></table>`;
        displayNextRoundDate.append(practiceList);
    } else {
        practiceList.innerHTML = `<table class="table"><tbody><tr class="h-10">
            <td>Practice 1</td>
            <td>${dayNames[new Date(date.FirstPractice.date).getDay()]}</td>
            <td>
                <p class="time">${new Date(date.FirstPractice.date + 'T' + date.FirstPractice.time).getHours()}:00 - ${new Date(date.FirstPractice.date + 'T' + date.FirstPractice.time).getHours()+1}:00</p>
            </td>
        </tr>
        <tr class="h-10">
            <td>Qualifying</td>
            <td>${dayNames[new Date(date.Qualifying.date).getDay()]}</td>
            <td>
                <p class="time">${new Date(date.Qualifying.date + 'T' + date.Qualifying.time).getHours()}:00 - ${new Date(date.Qualifying.date + 'T' + date.Qualifying.time).getHours()+1}:00</p>
            </td>
        </tr>
        <tr class="h-10">
            <td>Practice 2</td>
            <td>${dayNames[new Date(date.SecondPractice.date).getDay()]}</td>
            <td>
                <p class="time">${new Date(date.SecondPractice.date + 'T' + date.SecondPractice.time).getHours()}:00 - ${new Date(date.SecondPractice.date + 'T' + date.SecondPractice.time).getHours()+1}:00</p>
            </td>
        </tr></tbody></table>`;
        displayNextRoundDate.append(practiceList);
    };

    const qualiRaceList = document.createElement('div');
    qualiRaceList.classList.add('lg:w-1/2');
    if (!date.Sprint) {
        qualiRaceList.innerHTML = `<table class="table"><tbody><tr class="h-10">
            <td>Qualifying</td>
            <td>${dayNames[new Date(date.Qualifying.date).getDay()]}</td>
            <td>
                <p class="time">${new Date(date.Qualifying.date + 'T' + date.Qualifying.time).getHours()}:00 - ${new Date(date.Qualifying.date + 'T' + date.Qualifying.time).getHours()+1}:00</p>
            </td>
        </tr>
        <tr class="h-10">
            <td>Race</td>
            <td>${dayNames[new Date(date.date).getDay()]}</td>
            <td>
                <p class="time">${new Date(date.date + 'T' + date.time).getHours()}:00 - ${new Date(date.date + 'T' + date.time).getHours()+2}:00</p>
            </td>
        </tr>
        <tr class="h-10">
            <td>Race Start</td>
            <td>In</td>
            <td id="countdown" class="time"></td>
        </tr></tbody></table>`;
        displayNextRoundDate.append(qualiRaceList);
    } else {
        qualiRaceList.innerHTML = `<table class="table"><tbody><tr class="h-10">
            <td>Sprint</td>
            <td>${dayNames[new Date(date.Sprint.date).getDay()]}</td>
            <td>
                <p class="time">${new Date(date.Sprint.date + 'T' + date.Sprint.time).getHours()}:00 - ${new Date(date.Sprint.date + 'T' + date.Sprint.time).getHours()+1}:00</p>
            </td>
        </tr>
        <tr class="h-10">
            <td>Race</td>
            <td>${dayNames[new Date(date.date).getDay()]}</td>
            <td>
                <p class="time">${new Date(date.date + 'T' + date.time).getHours()}:00 - ${new Date(date.date + 'T' + date.time).getHours()+2}:00</p>
            </td>
        </tr>
        <tr class="h-10">
            <td>Race Start</td>
            <td>In</td>
            <td id="countdown" class="time"></td>
        </tr></tbody></table>`;
        displayNextRoundDate.append(qualiRaceList);
    }
}

const displayLastRound = date => {
    const dateRace = date;
    for (let i = 0; i < schedule.length; i++) {
        const lastDate = schedule[i];
        if (dateRace.toDateString() === new Date(lastDate.date).toDateString()) {
            const firstPractice = new Date(lastDate.FirstPractice.date);
            const lastRoundTitle = document.querySelector('#lastRoundTitle');
            const lastRoundDate = document.querySelector('#lastRoundDate');
            const lastRoundImage = document.querySelector('#lastRoundImage');
            lastRoundTitle.innerText = lastDate.raceName;
            lastRoundDate.innerText = `${firstPractice.getDate()} ${monthNames[firstPractice.getMonth()]} ${firstPractice.getFullYear()} - ${dateRace.getDate()} ${monthNames[dateRace.getMonth()]} ${dateRace.getFullYear()}`;
            lastRoundImage.src = `./image/circuit/${lastDate.Circuit.circuitId}.jpg`;
            lastRoundImage.alt = `${lastDate.raceName}`
            getLastRoundResult(lastDate);
        }
    }
}

const getLastRoundResult = date => {
    fetch(`http://ergast.com/api/f1/${date.season}/${date.round}/results.json`, {
        'method': 'GET',
        'redirect': 'follow',
    })
        .then(response => response.json())
        .then(result => lastRoundResult(result))
        .catch(message => console.log(message))
}

const lastRoundResult = result => {
    const results = result.MRData.RaceTable.Races[0].Results;
    results.forEach(position => {
        if (position.position < 4) {
            displayPodiumResult(position);
            const displayPodium = document.querySelector('#displayPodium');
            const item = document.createElement('div');
            item.classList.add('w-1/3');
            item.innerHTML = `<img class="mx-auto lg:w-32" src="./image/driver/${position.Driver.driverId}.png" alt="${position.Driver.driverId}">
            <div class="podium pos${position.position}">
                <h2 class="text-base dark:text-white">${position.Driver.givenName} ${position.Driver.familyName}</h2>
                <h2 class="text-3xl dark:text-white">${position.position}</h2>
            </div>`
            displayPodium.append(item)
        };

        const displayFullResults = document.querySelector('#displayFullResults');
        const item = document.createElement('tbody');
        item.innerHTML = `<tr class="h-12">
            <td>${position.position}</td>
            <td><img src="./image/driver/${position.Driver.driverId}.png" alt="${position.Driver.driverId}" class="w-7 lg:w-10 mx-auto"></td>
            <td>${position.Driver.givenName} ${position.Driver.familyName}</td>
            <td><img src="./image/teams/${position.Constructor.constructorId}.png" alt="${position.Constructor.constructorId}" class="w-7 lg:w-10 mx-auto"></td>
            <td>+${position.points}</td>
        </tr>`;
        displayFullResults.append(item);
    });
}

const displayPodiumResult = position => {
    const displayPodiumResult = document.querySelector('#lastRoundPodium');
    const items = document.createElement('div');
    items.classList.add('w-1/3');
    items.innerHTML = `<img class="mx-auto lg:w-40" src="./image/driver/${position.Driver.driverId}.png" alt="${position.Driver.driverId}">
    <div class="podium pos${position.position}">
        <h2 class="text-base dark:text-white">${position.Driver.givenName} ${position.Driver.familyName}</h2>
        <h2 class="text-3xl dark:text-white">${position.position}</h2>
    </div>`
    displayPodiumResult.append(items);
}

const getSearch = data => {
    const searchInput = document.querySelector('#raceSearch');
    const searchButton = document.querySelector('#searchButton');
    const race = data.MRData.RaceTable.Races;

    searchButton.addEventListener('click', (e) => {
        e.preventDefault();
        const filteredRace = race.filter(dataRace => dataRace.raceName.toLowerCase().includes(searchInput.value.toLowerCase()));

        const displaySearchResult = document.querySelector('#displaySearchSchedule');
        if (displaySearchResult.childNodes.length > 0) {
            displaySearchResult.innerHTML = '';
        }

        if (filteredRace.length == 0) {
            console.log(searchInput.value);
            displaySearchResult.innerHTML += `<h3 class="font-secondary font-bold text-center md:text-xl lg:text-3xl tracking-wider capitalize dark:text-white">I'm sorry, your keyword "${searchInput.value}" is not found!</h3>`;
        } else {
            for (let i = 0; i < filteredRace.length; i++) {
                const result = filteredRace[i];

                if (!result.Sprint) {
                    displaySearchResult.innerHTML += `<div class="mt-10 lg:flex lg:justify-center lg:gap-4">
                        <div class="pt-3 pr-3 border-t-4 border-r-4 border-t-red-600 border-r-red-600 rounded-tr-xl lg:w-1/2 lg:max-h-full">
                            <img src="./image/circuit/${result.Circuit.circuitId}.jpg" alt="${result.Circuit.circuitId}" class="w-full rounded-tr-xl lg:object-cover lg:h-64 lg:object-bottom">
                        </div>
                        <div class="lg:w-1/2 lg:mx-auto dark:text-white">
                            <h3 class="mt-2 font-secondary font-bold text-xl uppercase tracking-widest">${result.raceName}</h3>
                            <p>${new Date(result.FirstPractice.date).getDate()} ${monthNames[new Date(result.FirstPractice.date).getMonth()]} ${new Date(result.FirstPractice.date).getFullYear()} - ${new Date(result.date).getDate()} ${monthNames[new Date(result.date).getMonth()]} ${new Date(result.date).getFullYear()}</p>
                            <div class="mt-4 w-full md:flex md:gap-32 lg:gap-0">
                                <div id="practice1-3" class="lg:w-1/2">
                                    <table class="table">
                                    <tbody>
                                        <tr class="h-10">
                                            <td>Practice 1</td>
                                            <td>${dayNames[new Date(result.FirstPractice.date).getDay()]}</td>
                                            <td>
                                                <p class="time">${new Date(result.FirstPractice.date + 'T' + result.FirstPractice.time).getHours()}:00 - ${new Date(result.FirstPractice.date + 'T' + result.FirstPractice.time).getHours()+1}:00</p>
                                            </td>
                                        </tr>
                                        <tr class="h-10">
                                            <td>Practice 2</td>
                                            <td>${dayNames[new Date(result.SecondPractice.date).getDay()]}</td>
                                            <td>
                                                <p class="time">${new Date(result.SecondPractice.date + 'T' + result.SecondPractice.time).getHours()}:00 - ${new Date(result.SecondPractice.date + 'T' + result.SecondPractice.time).getHours()+1}:00</p>
                                            </td>
                                        </tr>
                                        <tr class="h-10">
                                            <td>Practice 3</td>
                                            <td>${dayNames[new Date(result.ThirdPractice.date).getDay()]}</td>
                                            <td>
                                                <p class="time">${new Date(result.ThirdPractice.date + 'T' + result.ThirdPractice.time).getHours()}:00 - ${new Date(result.ThirdPractice.date + 'T' + result.ThirdPractice.time).getHours()+1}:00</p>
                                            </td>
                                        </tr>
                                    </tbody>
                                    </table>
                                </div>
                                <div id="qualiRace" class="lg:w-1/2">
                                    <table class="table">
                                        <tbody>
                                            <tr class="h-10">
                                                <td>Qualifying</td>
                                                <td>${dayNames[new Date(result.Qualifying.date).getDay()]}</td>
                                                <td>
                                                    <p class="time">${new Date(result.Qualifying.date + 'T' + result.Qualifying.time).getHours()}:00 - ${new Date(result.Qualifying.date + 'T' + result.Qualifying.time).getHours()+1}:00</p>
                                                </td>
                                            </tr>
                                            <tr class="h-10">
                                                <td>Race</td>
                                                <td>${dayNames[new Date(result.date).getDay()]}</td>
                                                <td>
                                                    <p class="time">${new Date(result.date + 'T' + result.time).getHours()}:00 - ${new Date(result.date + 'T' + result.time).getHours()+2}:00</p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>`;
                } else {
                    displaySearchResult.innerHTML += `<div class="mt-10 lg:flex lg:justify-center lg:gap-4">
                        <div class="pt-3 pr-3 border-t-4 border-r-4 border-t-red-600 border-r-red-600 rounded-tr-xl lg:w-1/2 lg:max-h-full">
                            <img src="./image/circuit/${result.Circuit.circuitId}.jpg" alt="${result.Circuit.circuitId}" class="w-full rounded-tr-xl lg:object-cover lg:h-64 lg:object-bottom">
                        </div>
                        <div class="lg:w-1/2 lg:mx-auto dark:text-white">
                            <h3 class="mt-2 font-secondary font-bold text-xl uppercase tracking-widest">${result.raceName}</h3>
                            <p>${new Date(result.FirstPractice.date).getDate()} ${monthNames[new Date(result.FirstPractice.date).getMonth()]} ${new Date(result.FirstPractice.date).getFullYear()} - ${new Date(result.date).getDate()} ${monthNames[new Date(result.date).getMonth()]} ${new Date(result.date).getFullYear()}</p>
                            <div class="mt-4 w-full md:flex md:gap-32 lg:gap-0">
                                <div id="practice1-3" class="lg:w-1/2">
                                    <table class="table">
                                    <tbody>
                                        <tr class="h-10">
                                            <td>Practice 1</td>
                                            <td>${dayNames[new Date(result.FirstPractice.date).getDay()]}</td>
                                            <td>
                                                <p class="time">${new Date(result.FirstPractice.date + 'T' + result.FirstPractice.time).getHours()}:00 - ${new Date(result.FirstPractice.date + 'T' + result.FirstPractice.time).getHours()+1}:00</p>
                                            </td>
                                        </tr>
                                        <tr class="h-10">
                                                <td>Qualifying</td>
                                                <td>${dayNames[new Date(result.Qualifying.date).getDay()]}</td>
                                                <td>
                                                    <p class="time">${new Date(result.Qualifying.date + 'T' + result.Qualifying.time).getHours()}:00 - ${new Date(result.Qualifying.date + 'T' + result.Qualifying.time).getHours()+1}:00</p>
                                                </td>
                                            </tr>
                                        <tr class="h-10">
                                            <td>Practice 2</td>
                                            <td>${dayNames[new Date(result.SecondPractice.date).getDay()]}</td>
                                            <td>
                                                <p class="time">${new Date(result.SecondPractice.date + 'T' + result.SecondPractice.time).getHours()}:00 - ${new Date(result.SecondPractice.date + 'T' + result.SecondPractice.time).getHours()+1}:00</p>
                                            </td>
                                        </tr>
                                    </tbody>
                                    </table>
                                </div>
                                <div id="qualiRace" class="lg:w-1/2">
                                    <table class="table">
                                        <tbody>
                                            <tr class="h-10">
                                                <td>Sprint</td>
                                                <td>${dayNames[new Date(result.Sprint.date).getDay()]}</td>
                                                <td>
                                                    <p class="time">${new Date(result.Sprint.date + 'T' + result.Sprint.time).getHours()}:00 - ${new Date(result.Sprint.date + 'T' + result.Sprint.time).getHours()+1}:00</p>
                                                </td>
                                            </tr>
                                            <tr class="h-10">
                                                <td>Race</td>
                                                <td>${dayNames[new Date(result.date).getDay()]}</td>
                                                <td>
                                                    <p class="time">${new Date(result.date + 'T' + result.time).getHours()}:00 - ${new Date(result.date + 'T' + result.time).getHours()+2}:00</p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>`;
                };
            }
        }
        searchInput.value = null;
    });
}

export default raceSchedule;
