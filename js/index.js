const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
    .then(data=>displaycountries(data))
}
const displaycountries = countries => {
    const allcountriesHTML = countries.map(country => showDataHtml(country));
    // console.log(allcountriesHTML[0]);
    const container = document.getElementById('contries');
    container.innerHTML = allcountriesHTML.join(' ');
}

const showDataHtml = country => {
    const {name,flags}=country
    return `
    <div class="card-body">
        <h3>${name.common.slice(0,10)}</h3>
        <div class="images">
            <img src="${flags.png}">
        </div>

    </div>
    `
}
loadCountries()