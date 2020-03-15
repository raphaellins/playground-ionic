import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { AngularFireAuth } from "angularfire2/auth";
import { WordpressService } from "src/service/wordpress.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.page.html",
  styleUrls: ["./dashboard.page.scss"]
})
export class DashboardPage implements OnInit {
  email: string;
  posts: Array<any> = new Array<any>();
  morePageAvailable: boolean = true;

  constructor(
    public navController: NavController,
    public angularFireAuth: AngularFireAuth,
    public wordpressService: WordpressService
  ) {
    this.email = angularFireAuth.auth.currentUser.email;
  }

  ngOnInit() {}

  async ionViewWillEnter() {
    this.morePageAvailable = true;
    if (!(this.posts.length > 0)) {
      const result = await this.wordpressService.getRecentPost();
      this.posts.push(result);
    }
  }

  logout() {
    this.angularFireAuth.auth.signOut();
    this.navController.navigateRoot("/home");
  }
}
