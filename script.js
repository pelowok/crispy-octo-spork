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
