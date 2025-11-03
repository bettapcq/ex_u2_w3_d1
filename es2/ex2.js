class Pet {
  constructor(_name, _owner, _species, _breed) {
    this.name = _name;
    this.owner = _owner;
    this.species = _species;
    this.breed = _breed;
  }

  isTheSameOwner = function (otherPet) {
    if (this.owner === otherPet.owner) {
      return true;
    } else {
      return false;
    }  // come lo applico al form??
  };
}

const allPets = [];

const petNameInput = document.getElementById('petName');
const petOwnerInput = document.getElementById('petOwner');
const speciesInput = document.getElementById('petSpecies');
const breedInput = document.getElementById('petBreed');

const form = document.getElementById('pet-form');
const petsList = document.getElementById('petsList');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const petName = petNameInput.value;
  const petOwner = petOwnerInput.value;
  const species = speciesInput.value;
  const breed = breedInput.value;

  const newPet = new Pet(petName, petOwner, species, breed);

  allPets.push(newPet);

  const addPetToList = (pet) => {
    const newLi = document.createElement('li');
    newLi.innerHTML = `
    <h3>Name: ${pet.name}</h3>
    <ul>
    <li>Owner: ${pet.owner}</li>
    <li>Species: ${pet.species}</li>
    <li>Breed: ${pet.breed}</li>
    </ul>
    `;

    petsList.appendChild(newLi);
  };

  addPetToList(newPet);

  form.reset();
});

