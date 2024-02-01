document.addEventListener('DOMContentLoaded', function() {
  addCharacterCard("Character Name", "Character Description", "image-url.jpg");
});

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
