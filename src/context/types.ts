import { Dispatch } from 'react';

export interface GlobalStateInterface {
  isUserAuthenticated: boolean;
  loggedUser: string;
  persistenceType: string;
  favoriteMovies: MovieType[];
}

export type ActionType = {
  type: string;
  payload?: any;
};

export type ContextType = {
  globalState: GlobalStateInterface;
  dispatch: Dispatch<ActionType>;
};

export type MovieType = {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
};