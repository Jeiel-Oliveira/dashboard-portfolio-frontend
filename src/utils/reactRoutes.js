import React from 'react';

import ListPokemon from 'view/Pokemon/ListPokemon';
import ListButtons from 'view/ListButtons';
import Pokemon from 'view/Pokemon/Pokemon';

import Home from 'view/Home';

const homeinfo = {
  key: 1,
  name:"Home",
  path:"/home",
  component: () => <Home />
}

const listPokemon = {
  key: 2,
  name: "Pokemons",
  path: "/pokemons",
  component: () =>  <ListPokemon />
}

const pokemon = {
  key: 3,
  name: "Pokemon",
  path: "/pokemon/:name",
  hide: true,
  component: () => <Pokemon />
}

const listButtons = {
  key: 4,
  name: "Botões",
  path: "/buttons",
  component: () => <ListButtons />
}

const routes = [ homeinfo, listPokemon, pokemon, listButtons ]

export default routes