import { Rank } from "./Rank";
import { UserLogin } from "./UserLogin";

export class Produto{
  public _id: number;
  public title: string;
  public description: string;
  public photo: string;
  public videos: string;
  public mediumPrice: number;
  public studio: null;
  public company: null;
  public releaseYear: number;
  public genres: string;
  public platforms: string;
  public user: UserLogin;
  public rank: Rank
}