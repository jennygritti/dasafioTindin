import { Produto } from "./Produto";

export class UserLogin{
  public id: number;
  public password: string;
  public token: string;
  public email: string;
  public tipo: string;
  public produto: Produto[];
}
