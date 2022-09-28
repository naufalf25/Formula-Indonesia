
const dataConstructor = () => {
    fetch('http://ergast.com/api/f1/current/constructorStandings.json', {
        'method': 'GET',
        'redirect': 'follow',
    })
        .then(response => response.json())
        .then(result => constructorData(result))
        .catch(message => console.log(message))
};

const constructorData = result => {
    const data = result.MRData.StandingsTable.StandingsLists;
    data.forEach(standing => {
        const constructor = standing.ConstructorStandings;
        constructor.forEach(constructors => {
            const tableConstructor = document.getElementById('dataConstructor');
            const displayConstructor = makeList(constructors);
            tableConstructor.append(displayConstructor);
        })
    });
}

const makeList = constructors => {
    const constructorList = document.createElement('tr');
    constructorList.classList.add('h-10', 'even:bg-slate-100', 'dark:even:bg-slate-600');
    constructorList.innerHTML += `<td>${constructors.position}</td>
    <td>${constructors.Constructor.name}</td>
    <td><img src="./image/national-flag/${constructors.Constructor.nationality}.png" class="mx-auto"></td>
    <td>${constructors.wins}</td>
    <td>${constructors.points}</td>`;

    return constructorList;
}

export default dataConstructor;