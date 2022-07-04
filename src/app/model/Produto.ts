import { Rank } from "./Rank";
import { User } from "./User";

export class Produto{
  public id: number;
  public title: string;
  public description: string;
  public photo: []
  public videos: [];
  public mediumPrice: number;
  public studio: null;
  public company: null;
  public releaseYear: number;
  public genres: string;
  public platforms: string;
  public user: User;
  public rank: Rank
}