import gql from "graphql-tag";

export const typeDefs = gql`
type Film {
  id: ID!
  title: String!
  people: [People]!
}

type People {
  id: ID!
  name: String!
  eyeColor: String
  films: [Film]!
}

type Query {
  getFilm(id: ID!): Film!
  getPeople(id: ID!): People!
  getFilms: [Film!]!
  getPeoples: [People!]!
}
`