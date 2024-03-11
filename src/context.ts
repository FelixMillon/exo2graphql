import { FilmAPI } from "./datasources/FilmApi"

export type DataSourceContext = {
  dataSources: {
    FilmAPI: FilmAPI
  }
}