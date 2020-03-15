import { Injectable } from "@angular/core";
import * as config from "../config";
import { HTTP } from "@ionic-native/http/ngx";
import { Observable } from "rxjs";

@Injectable()
export class WordpressService {
  constructor(public http: HTTP) {}

  public getRecentPost(page: number = 1): Promise<any> {
    return this.http.get(config.WORDPRESS_REST_API_URL, {}, {});
  }
}
