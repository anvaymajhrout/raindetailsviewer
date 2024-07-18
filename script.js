document.getElementById('search').addEventListener('click', getRainfall);

function getRainfall() {
    const city = document.getElementById('cityInput').value;
    const apiKey = 'plsenteryourapikeyhere'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const rainfallInfo = document.getElementById('rainfallInfo');
            if (data.rain && data.rain['1h']) {
                rainfallInfo.textContent = `Rainfall in the last hour: ${data.rain['1h']} mm`;
            } else if (data.rain && data.rain['3h']) {
                rainfallInfo.textContent = `Rainfall in the last 3 hours: ${data.rain['3h']} mm`;
            } else {
                rainfallInfo.textContent = 'No rainfall data available';
            }
        })
        .catch(error => {
            console.error('Error fetching the rainfall data:', error);
            const rainfallInfo = document.getElementById('rainfallInfo');
            rainfallInfo.textContent = 'Error fetching the data';
        });
}
