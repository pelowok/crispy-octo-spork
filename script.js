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

var myWagons =[];

// Assuming myWagons is your JSON object
const wagonsArray = myWagons.Wagons.map(wagon => {
  return {
    name: wagon.name,
    type: wagon.type,
    placeOfOrigin: wagon.placeOfOrigin,
    destination: wagon.destination,
    Owner: `${wagon.Owner.name}, ${wagon.Owner.race}, ${wagon.Owner.profession}, Age: ${wagon.Owner.age}, ${wagon.Owner.motivation}`,
    WagonMaster: `${wagon.WagonMaster.name}, ${wagon.WagonMaster.race}, ${wagon.WagonMaster.class}, Age: ${wagon.WagonMaster.age}, ${wagon.WagonMaster.motivation}`,
    Cargo: wagon.Cargo.map(cargo => `${cargo.name}, Value: ${cargo.value}, Condition: ${cargo.condition}, Origin: ${cargo.placeOfOrigin}`).join('; '),
    Security: {
      Bodyguard: `${wagon.Security.Bodyguard.name}, ${wagon.Security.Bodyguard.weapon}, Armor Class: ${wagon.Security.Bodyguard.armorClass}`,
      Captain: `${wagon.Security.Captain.name}, ${wagon.Security.Captain.weapon}, Armor Class: ${wagon.Security.Captain.armorClass}`,
      GuardsQuantity: wagon.Security.Guards.quantity,
      WagonDefense: wagon.Security.WagonDefense.type
    },
    Crew: {
      Teamster: `${wagon.Crew.Teamster.name}, Race: ${wagon.Crew.Teamster.race}, Age: ${wagon.Crew.Teamster.age}`,
      Coachman: `${wagon.Crew.Coachman.name}, Race: ${wagon.Crew.Coachman.race}, Age: ${wagon.Crew.Coachman.age}`,
      Footman: `${wagon.Crew.Footman.name}, Race: ${wagon.Crew.Footman.race}, Age: ${wagon.Crew.Footman.age}`
    },
    Passengers: wagon.Passengers.map(passenger => `${passenger.name}, ${passenger.race}, ${passenger.profession}, Destination: ${passenger.destination}`).join('; ')
  };
});

// Now, wagonsArray contains all the necessary details for each wagon
// You can iterate over this array to create HTML cards

// Example of creating HTML cards
const container = document.getElementById('wagonsContainer'); // Assuming you have a div with this ID in your HTML

wagonsArray.forEach(wagon => {
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
