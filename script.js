document.addEventListener('DOMContentLoaded', function () {
    const parkingList = document.getElementById('parkingList');
    const reservationsList = document.getElementById('reservationsList');

    // Lista miejsc parkingowych
    const parkingSpots = [
        { id: 1, status: 'wolny' },
        { id: 2, status: 'wolny' },
        { id: 3, status: 'wolny' },
        { id: 4, status: 'wolny' }
    ];

    // Dodawanie miejsc parkingowych do strony
    parkingSpots.forEach(spot => {
        const li = document.createElement('li');
        li.innerHTML = `Miejsce ${spot.id} - Status: <span class="${spot.status}">${spot.status.charAt(0).toUpperCase() + spot.status.slice(1)}</span>`;
        
        if (spot.status === 'wolny') {
            const reserveLink = document.createElement('a');
            reserveLink.href = '#';
            reserveLink.textContent = 'Zarezerwuj';
            reserveLink.addEventListener('click', function () {
                reserveSpot(spot.id);
            });
            li.appendChild(reserveLink);
        }

        parkingList.appendChild(li);
    });

    // Rezerwacja miejsca parkingowego
    function reserveSpot(spotId) {
        const spot = parkingSpots.find(s => s.id === spotId);
        if (spot && spot.status === 'wolny') {
            spot.status = 'zarezerwowane';
            updateParkingList();
        }
    }

    // Aktualizacja listy miejsc parkingowych
    function updateParkingList() {
        parkingList.innerHTML = ''; // Wyczyszczenie listy
        parkingSpots.forEach(spot => {
            const li = document.createElement('li');
            li.innerHTML = `Miejsce ${spot.id} - Status: <span class="${spot.status}">${spot.status.charAt(0).toUpperCase() + spot.status.slice(1)}</span>`;
            
            if (spot.status === 'wolny') {
                const reserveLink = document.createElement('a');
                reserveLink.href = '#';
                reserveLink.textContent = 'Zarezerwuj';
                reserveLink.addEventListener('click', function () {
                    reserveSpot(spot.id);
                });
                li.appendChild(reserveLink);
            }

            parkingList.appendChild(li);
        });
    }
});
