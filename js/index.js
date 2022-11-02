const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
    .then(data=>displaycountries(data))
}
const displaycountries = countries => {
    const allcountriesHTML = countries.map(country => showDataHtml(country));
    // console.log(allcountriesHTML[0]);
    const container = document.getElementById('contries');
    container.innerHTML = allcountriesHTML;
}

const showDataHtml = country => {
    console.log(country)
    return `
    <div>
        <h3>${country.name.common}</h3>
        <img src="${country.flags.png}">
        
    </div>
    `
}
loadCountries()