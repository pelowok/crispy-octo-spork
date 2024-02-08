document.addEventListener('DOMContentLoaded', function() {

  $.getJSON( "/data.json", function( data ) {
    console.log(data);
    $("#text").html(data["myText"]);
  });

  var characters = [
      { name: "Aelar the Wise", description: "An ancient elf known for his wisdom and magical prowess." },
      { name: "Brogan Ironfist", description: "A dwarf warrior with unmatched strength and a heart of gold." },
      { name: "Lunara of the Moon", description: "A mysterious sorceress with powers linked to the phases of the moon." }
      // Add more characters as needed
  ];

  characters.forEach(function(character) {
      generateAndAddCharacterCard(character);
  });

});

function generateAndAddCharacterCard(character) {
  generateImage(character.description).then(imageUrl => {
      addCharacterCard(character.name, character.description, imageUrl);
  });
}

function generateImage(description) {
  // This is a mock function. Replace it with actual API call to generate images.
  return new Promise(resolve => {
      // Simulate an API call with a timeout
      setTimeout(() => {
          const mockImageUrl = "/img/test.jpg"; // Replace this with the actual image URL from the API response
          resolve(mockImageUrl);
      }, 1000); // Simulates async API call delay
  });
}

function addCharacterCard(name, description, imageUrl) {
  var container = document.getElementById('characterContainer');

  var card = document.createElement('div');
  card.className = 'character-card';

  var imgDiv = document.createElement('div');
  imgDiv.className = 'card-image';
  var img = document.createElement('img');
  img.src = imageUrl;
  img.alt = name;
  imgDiv.appendChild(img);

  var infoDiv = document.createElement('div');
  infoDiv.className = 'card-info';
  infoDiv.innerHTML = `<h3>${name}</h3><p>${description}</p>`;

  card.appendChild(imgDiv);
  card.appendChild(infoDiv);

  container.appendChild(card);
}

let myWagons = [];

fetch('data.json')
  .then(response => response.json())
  .then(data => {
    myWagons = data.Wagons;
    myWagons.forEach(wagon => {
      const card = document.createElement('div');
      let cargoDetails = wagon.Cargo.map(item => `${item.name}, Value: ${item.value}, Condition: ${item.condition}, Origin: ${item.placeOfOrigin}`).join('; ');
      let passengerDetails = wagon.Passengers.map(passenger => `${passenger.name}, ${passenger.race}, ${passenger.profession}, Destination: ${passenger.destination}`).join('; ');
      let securityDetails = `Bodyguard - ${wagon.Security.Bodyguard.name}, Captain - ${wagon.Security.Captain.name}, Guards: ${wagon.Security.Guards.quantity}, Defense: ${wagon.Security.WagonDefense.type}`;
      let crewDetails = `Teamster - ${wagon.Crew.Teamster.name}, Coachman - ${wagon.Crew.Coachman.name}, Footman - ${wagon.Crew.Footman.name}`;

      card.innerHTML = `
        <h2>${wagon.name} - ${wagon.type}</h2>
        <p>Origin: ${wagon.placeOfOrigin}</p>
        <p>Destination: ${wagon.destination}</p>
        <p>Owner: ${wagon.Owner.name}, ${wagon.Owner.race}, ${wagon.Owner.profession}</p>
        <p>WagonMaster: ${wagon.WagonMaster.name}, ${wagon.WagonMaster.race}, ${wagon.WagonMaster.class}</p>
        <p>Cargo: ${cargoDetails}</p>
        <p>Security: ${securityDetails}</p>
        <p>Crew: ${crewDetails}</p>
        <p>Passengers: ${passengerDetails}</p>
      `;
      document.body.appendChild(card);
    });
  })
  .catch(error => console.error(error));


// Now, wagonsArray contains all the necessary details for each wagon
// You can iterate over this array to create HTML cards

// Example of creating HTML cards
const container = document.getElementById('wagonsContainer'); // Assuming you have a div with this ID in your HTML

myWagons.forEach(wagon => {
  const wagonCard = document.createElement('div');
  wagonCard.className = 'wagon-card';
  wagonCard.innerHTML = `
    <h2>${wagon.name} - ${wagon.type}</h2>
    <p><strong>Origin:</strong> ${wagon.placeOfOrigin}</p>
    <p><strong>Destination:</strong> ${wagon.destination}</p>
    <p><strong>Owner:</strong> ${wagon.Owner}</p>
    <p><strong>WagonMaster:</strong> ${wagon.WagonMaster}</p>
    <p><strong>Cargo:</strong> ${wagon.Cargo}</p>
    <p><strong>Security:</strong> Bodyguard - ${wagon.Security.Bodyguard}, Captain - ${wagon.Security.Captain}, Guards: ${wagon.Security.GuardsQuantity}, Defense: ${wagon.Security.WagonDefense}</p>
    <p><strong>Crew:</strong> Teamster - ${wagon.Crew.Teamster}, Coachman - ${wagon.Crew.Coachman}, Footman - ${wagon.Crew.Footman}</p>
    <p><strong>Passengers:</strong> ${wagon.Passengers}</p>
  `;

  container.appendChild(wagonCard);
});
