import streamingData from "./data-streaming";

const dataStreaming = () => {
    const displayBroadcastList = document.querySelector('#displayBroadcastList');
    const item = document.createElement('tbody');
    item.classList.add('text-sm', 'md:text-base');

    streamingData.forEach(data => {
        const getData = data;
        const countryItem = document.createElement('tr');
        countryItem.classList.add('h-20', 'even:bg-slate-200', 'dark:even:bg-slate-700');
        countryItem.innerHTML = `<td class="uppercase">${getData.country}</td>`;
        const channelItem = document.createElement('td');
        
        getData.channel.forEach(channel => {
            const forChannelItem = `<a href="${channel.link}" target="_blank" class="hover:opacity-70">${channel.name}</a><br>`;
            channelItem.innerHTML += forChannelItem;
        });

        countryItem.append(channelItem);
        item.append(countryItem);
        displayBroadcastList.append(item);
    });
}

export default dataStreaming;