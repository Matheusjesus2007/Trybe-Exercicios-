const { getPokemonDetails, handlePokemonSearch } = require('./pokemons')

describe('A função getPokemonDetails', () => {
  it('retorna um pokémon que existe no banco de dados', () => {
    expect(getPokemonDetails('Charmander')).toEqual('Olá, seu pokémon é o Charmander, o tipo dele é Fogo e a habilidade principal dele é Lança Chamas')
  });

  it('retorna erro quando procuramos um pokémon que não existe no banco de dados', () => {
    // Escreva aqui seu código
  });
});