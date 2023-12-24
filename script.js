// Początkowe dane serwera
let serverData = {
    serverName: "Nazwa Serwera",
    serverLink: "http://www.example.com",
    countdown: 180, // Czas w sekundach (3 godziny)
};

// Funkcja dodająca dane ręcznie
function manualAdd() {
    // Tutaj możesz dodać kod do zbierania danych z formularza i zaktualizować serverData
    // Na potrzeby przykładu użyję stałych danych
    serverData = {
        serverName: "Nowa Nazwa Serwera",
        serverLink: "http://www.newexample.com",
        countdown: 120, // Czas w sekundach (2 minuty)
    };

    updateServerInfo();
}

// Funkcja aktualizująca informacje o serwerze
function updateServerInfo() {
    const serverInfoDiv = document.getElementById('server-info');
    serverInfoDiv.innerHTML = `
        <h3>${serverData.serverName}</h3>
        <p><a href="${serverData.serverLink}" target="_blank">${serverData.serverLink}</a></p>
        <p>Odliczanie czasu: <span id="countdown">${formatTime(serverData.countdown)}</span></p>
    `;

    // Uruchamiamy odliczanie
    setInterval(updateCountdown, 1000);
}

// Funkcja aktualizująca odliczanie
function updateCountdown() {
    const countdownSpan = document.getElementById('countdown');
    serverData.countdown--;

    if (serverData.countdown < 0) {
        // Jeśli odliczanie dojdzie do zera, zaczynamy ponownie od 3 godzin
        serverData.countdown = 3 * 60 * 60;
    }

    countdownSpan.textContent = formatTime(serverData.countdown);
}

// Funkcja formatująca czas w formacie HH:MM:SS
function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    return `${pad(hours)}:${pad(minutes)}:${pad(remainingSeconds)}`;
}

// Funkcja dodająca zero przed liczbami jednocyfrowymi
function pad(number) {
    return (number < 10 ? '0' : '') + number;
}

// Inicjalizacja strony
updateServerInfo();
