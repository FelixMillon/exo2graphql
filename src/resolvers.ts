import { Resolvers } from "./types.js";

export const resolvers: Resolvers = {
  Query: {
    getFilm: (_, args, {dataSources}) => {
      const {id} = args
      return dataSources.FilmAPI.getFilmById(id)
    },
    getFilms: (_, __, {dataSources}) => {
      return dataSources.FilmAPI.getFilms()
    },
    getPeople: (_, args, {dataSources}) => {
      const {id} = args
      return dataSources.FilmAPI.getPeopleById(id)
    },
    getPeoples: (_, __, {dataSources}) => {
      return dataSources.FilmAPI.getPeoples()
    }
  },
  Film: {
    people: async (parent, _, {dataSources}) => {
      const peopleData = await dataSources.FilmAPI.getFilmPeoples(parent.people);
      return peopleData;
    }
  },
  People: {
    films: async (parent, _, {dataSources}) => {
      const filmsData = await dataSources.FilmAPI.getPeopleFilms(parent.films);
      return filmsData;
    }
  }
}