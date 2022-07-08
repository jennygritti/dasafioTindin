import { Rank } from "./Rank";
import { Photo } from "./Photo";
import { UserLogin } from "./UserLogin";

export class Produto{
  public _id: string;
  public title: string;
  public description: string;
  public photos: Photo[];
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