import { Produto } from "./Produto";

export class User{
  public id: number;
  public password: string;
  public email: string;
  public produto: Produto[];
  public tipo: string;
}