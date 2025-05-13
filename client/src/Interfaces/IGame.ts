import { IUser } from "./IUser";

export interface IGameProps {
  player1: IUser;
  player2: IUser;
  addHomePoint: any;
  addVisitorPoint: any;
}

export interface PropsPlusPoints {
  homeScore: number;
  visitorScore: number;
  setHomeScore: React.Dispatch<React.SetStateAction<number>>;
  setVisitorScore: React.Dispatch<React.SetStateAction<number>>;
}
