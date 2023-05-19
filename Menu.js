class Pokemon {
    constructor(name, type) {
      this.name = name;
      this.type = type;
    } 
  
    describe() {
      return `${this.name} is a ${this.type} type Pokemon.`;
    }
  } 
  
  class Pokedex {
    constructor() {
      this.pokemons = [];
      this.selectedPokemon = null;
    }
  
    start() {
        alert('--- Pokemon Creator ---');
      let selection = this.showMainMenuOptions();
      while (selection !== '0') {
        switch (selection) {
          case '1':
            this.createPokemon();
            break;
          case '2':
            this.viewPokemon();
            break;
          case '3':
            this.deletePokemon();
            break;
          case '4':
            this.displayPokemon();
            break;
          default:
            selection = '0';
        }
        selection = this.showMainMenuOptions();
      }
      alert('Thanks for adding to the Pokedex!');
    }
  
    showMainMenuOptions() {
      return prompt(`
      0) Exit
      1) Create a Pokemon
      2) View a Pokemon
      3) Delete a Pokemon
      4) Display all of your Pokedex
      `);
    }
  
    showPokemonMenuOptions(pokemonInfo) {
      return prompt(`
      0) Back
      1) Update type
      -----------------
      ${pokemonInfo}
      `);
    }
  
    displayPokemon() {
      let pokemonString = '';
      for (let i = 0; i < this.pokemons.length; i++) {
        pokemonString += i + ') ' + this.pokemons[i].name + '\n';
      }
      alert(pokemonString);
    }
  
    createPokemon() {
      let name = prompt('Enter the name for your new Pokemon: ');
      let type = prompt('Enter the type for your new Pokemon: ');
      this.pokemons.push(new Pokemon(name, type));
    }
  
    viewPokemon() {
      let index = prompt('Enter the index of the Pokemon that you want to view:');
      if (index > -1 && index < this.pokemons.length) {
        this.selectedPokemon = this.pokemons[index];
        let description = 'Pokemon Name: ' + this.selectedPokemon.name + '\n';
        description += ' ' + this.selectedPokemon.describe() + '\n';
        let selection1 = this.showPokemonMenuOptions(description);
        switch (selection1) {
          case '1':
            this.updateType();
            break;
        }
      }
    }
  
    deletePokemon() {
      let index = prompt('Enter the index of the Pokemon that you are embarrassed you ever created: ');
      if (index > -1 && index < this.pokemons.length) {
        this.pokemons.splice(index, 1);
      }
    }
  
    updateType() {
      let newType = prompt('Enter the new type for the Pokemon: ');
      this.selectedPokemon.type = newType;
    }
  }
  
  let pokedex = new Pokedex();
  pokedex.start();