require('dotenv').config();

document.addEventListener('DOMContentLoaded', function() {
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
  return new Promise((resolve, reject) => {

    // console.log('api key: ' + process.env.YOUR_API_KEY);
    console.log('api keys: ' + process.env.keys());

      const apiKey = 'API_KEY'; // Replace with your actual API key
      const url = 'https://api.openai.com/v1/images/generate'; // Replace with the actual DALL-E 3 endpoint

      fetch(url, {
          method: 'POST',
          headers: {
              'Authorization': `Bearer ${apiKey}`,
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              prompt: description, // Your image description
              // Add other necessary parameters according to the API documentation
          })
      })
      .then(response => response.json())
      .then(data => {
          const imageUrl = data.result; // Modify according to the actual response structure
          resolve(imageUrl);
      })
      .catch(error => {
          console.error('Error generating image:', error);
          reject(error);
      });
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
