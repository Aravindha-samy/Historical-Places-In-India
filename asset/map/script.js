const historicalPlaces = [
    // Andhra Pradesh
    { name: "Charminar, Hyderabad", lat: 17.3616, lon: 78.4747 },
    { name: "Borra Caves, Visakhapatnam", lat: 17.9299, lon: 83.4286 },

    // Arunachal Pradesh
    { name: "Tawang Monastery, Tawang", lat: 27.5723, lon: 91.8704 },
    { name: "Namdapha National Park, Changlang", lat: 27.0806, lon: 96.6014 },

    // Assam
    { name: "Kaziranga National Park", lat: 26.5445, lon: 93.1710 },
    { name: "Sivasagar (Sibsagar) - Ahom Kingdom's historical sites", lat: 26.9840, lon: 94.6319 },

    // Bihar
    { name: "Mahabodhi Temple, Bodh Gaya", lat: 24.6961, lon: 84.9909 },
    { name: "Nalanda University Ruins, Nalanda", lat: 25.1365, lon: 85.4453 },

    // Chhattisgarh
    { name: "Bastar Palace, Jagdalpur", lat: 19.0760, lon: 82.0151 },
    { name: "Sirpur - Archaeological site", lat: 19.4565, lon: 81.3452 },

    // Goa
    { name: "Basilica of Bom Jesus, Old Goa", lat: 15.4989, lon: 73.8287 },
    { name: "Fort Aguada, North Goa", lat: 15.4986, lon: 73.7522 },

    // Gujarat
    { name: "Rani ki Vav, Patan", lat: 23.8536, lon: 72.1266 },
    { name: "Dwarkadhish Temple, Dwarka", lat: 22.2442, lon: 68.9686 },

    // Haryana
    { name: "Kurukshetra (historical and religious significance)", lat: 29.9696, lon: 76.8787 },
    { name: "Panipat (site of three historical battles)", lat: 29.3909, lon: 76.9635 },

    // Himachal Pradesh
    { name: "The Ridge, Shimla", lat: 31.1048, lon: 77.1734 },
    { name: "Hidimba Devi Temple, Manali", lat: 32.2396, lon: 77.1887 },

    // Jharkhand
    { name: "Betla National Park, Palamu", lat: 23.7930, lon: 84.2120 },
    { name: "Deoghar (Baidyanath Jyotirlinga Temple)", lat: 24.4833, lon: 86.7000 },

    // Karnataka
    { name: "Hampi", lat: 15.3350, lon: 76.4600 },
    { name: "Gol Gumbaz, Bijapur", lat: 16.8302, lon: 75.7091 },

    // Kerala
    { name: "Mattancherry Palace, Kochi", lat: 9.9587, lon: 76.2602 },
    { name: "Bekal Fort, Kasaragod", lat: 12.4366, lon: 75.0422 },

    // Madhya Pradesh
    { name: "Khajuraho Group of Monuments", lat: 24.8318, lon: 79.9199 },
    { name: "Gwalior Fort, Gwalior", lat: 26.2183, lon: 78.1828 },

    // Maharashtra
    { name: "Ajanta Caves", lat: 20.5514, lon: 75.7037 },
    { name: "Chhatrapati Shivaji Terminus, Mumbai", lat: 18.9401, lon: 72.8347 },

    // Manipur
    { name: "Kangla Fort, Imphal", lat: 24.8170, lon: 93.9368 },
    { name: "Loktak Lake, Moirang", lat: 24.5126, lon: 93.9227 },

    // Meghalaya
    { name: "Living Root Bridges, Cherrapunji", lat: 25.2986, lon: 91.5822 },
    { name: "Shillong Peak, Shillong", lat: 25.5788, lon: 91.8735 },

    // Mizoram
    { name: "Aizawl (State Museum and historic sites)", lat: 23.7271, lon: 92.7176 },
    { name: "Tamdil Lake, Aizawl", lat: 23.7338, lon: 92.6981 },

    // Nagaland
    { name: "Kohima War Cemetery", lat: 25.6550, lon: 94.1104 },
    { name: "Dzukou Valley", lat: 25.7962, lon: 94.0956 },

    // Odisha
    { name: "Konark Sun Temple", lat: 19.8876, lon: 86.0984 },
    { name: "Lingaraja Temple, Bhubaneswar", lat: 20.2353, lon: 85.8340 },

    // Punjab
    { name: "Golden Temple, Amritsar", lat: 31.6204, lon: 74.8765 },
    { name: "Jallianwala Bagh, Amritsar", lat: 31.6216, lon: 74.8802 },

    // Rajasthan
    { name: "Jaipur City (including Hawa Mahal, City Palace, and Amber Fort)", lat: 26.9124, lon: 75.7873 },
    { name: "Mehrangarh Fort, Jodhpur", lat: 26.2968, lon: 73.0183 },

    // Sikkim
    { name: "Nathula Pass", lat: 27.4010, lon: 88.8860 },
    { name: "Rumtek Monastery, Gangtok", lat: 27.3256, lon: 88.6122 },

    // Tamil Nadu
    { name: "Mahabalipuram", lat: 12.6260, lon: 80.1928 },
    { name: "Brihadeshwara Temple, Thanjavur", lat: 10.7749, lon: 79.1378 },

    // Telangana
    { name: "Charminar, Hyderabad", lat: 17.3616, lon: 78.4747 },
    { name: "Golkonda Fort, Hyderabad", lat: 17.3833, lon: 78.4011 },

    // Tripura
    { name: "Neermahal, Agartala", lat: 23.7842, lon: 91.2826 },
    { name: "Ujjayanta Palace, Agartala", lat: 23.8315, lon: 91.2770 },

    // Uttar Pradesh
    { name: "Taj Mahal, Agra", lat: 27.1751, lon: 78.0421 },
    { name: "Varanasi", lat: 25.3176, lon: 82.9739 },

    // Uttarakhand
    { name: "Badrinath Temple", lat: 30.7437, lon: 79.4816 },
    { name: "Valley of Flowers National Park", lat: 31.5617, lon: 76.5064 },

    // West Bengal
    { name: "Victoria Memorial, Kolkata", lat: 22.5448, lon: 88.3426 },
    { name: "Sundarbans (known for its historical significance and biodiversity)", lat: 21.9456, lon: 88.2636 }
];
// Initialize the map centered on India
const map = L.map('map').setView([20.5937, 78.9629], 5);

// Add a tile layer (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add markers for historical places with customized popups
historicalPlaces.forEach(place => {
    const marker = L.marker([place.lat, place.lon]).addTo(map);

    // Customize popup content with additional information
    const popupContent = `
        <b>${place.name}</b><br>
        <em>${getRandomDescription()}</em><br>
        <a href="${getRandomWikiLink()}">Learn more</a>
    `;

    marker.bindPopup(popupContent);
});

// Example function to generate random descriptions
function getRandomDescription() {
    const descriptions = [
        "A fascinating historical site.",
        "Rich in cultural heritage.",
        "A must-visit destination.",
        "Explore the history and architecture.",
        "Discover the beauty of the past."
    ];

    return descriptions[Math.floor(Math.random() * descriptions.length)];
}

// Example function to generate random Wikipedia links
function getRandomWikiLink() {
    const wikiLinks = [
        "https://en.wikipedia.org/wiki/History_of_India",
        "https://en.wikipedia.org/wiki/Ancient_Indian_history",
        "https://en.wikipedia.org/wiki/Indian_culture",
        "https://en.wikipedia.org/wiki/Architecture_of_India"
    ];

    return wikiLinks[Math.floor(Math.random() * wikiLinks.length)];
}
