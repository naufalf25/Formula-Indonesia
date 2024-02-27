
const dataDriver = () => {    
    fetch('https://ergast.com/api/f1/current/driverStandings.json', {
        'method': 'GET',
        'redirect': 'follow',
    })
        .then(response => response.json())
        .then(result => driverData(result))
        .catch(message => console.log(message));
}

const driverData = result => {
    const data = result.MRData.StandingsTable.StandingsLists;
    data.forEach(standing => {
        const driver = standing.DriverStandings;
        driver.forEach(drivers => {
            const dataDriver = document.getElementById('dataDriver');
            drivers.Constructors.forEach(construc => {
                const constructors = construc;
                const displayDriver = makeList(drivers, constructors);
                dataDriver.append(displayDriver);
            });
        });
    });
}

const makeList = (drivers, constructors) => {
    const driverList = document.createElement('tr');
    driverList.classList.add('h-10', 'even:bg-slate-100', 'dark:even:bg-slate-600');
    driverList.innerHTML += `<td>${drivers.position}</td>
    <td>${drivers.Driver.givenName} ${drivers.Driver.familyName}</td>
    <td><img src="./image/national-flag/${drivers.Driver.nationality}.png" class="mx-auto"></td>
    <td><img src="./image/teams/${constructors.constructorId}.png" alt="${constructors.constructorId}" class="w-7 mx-auto"></td>
    <td>${drivers.points}</td>`;

    return driverList;
}

export default dataDriver;
