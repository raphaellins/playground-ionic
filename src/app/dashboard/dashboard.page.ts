import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { AngularFireAuth } from "angularfire2/auth";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.page.html",
  styleUrls: ["./dashboard.page.scss"]
})
export class DashboardPage implements OnInit {
  email: string;
  constructor(
    public navController: NavController,
    public angularFireAuth: AngularFireAuth
  ) {
    this.email = angularFireAuth.auth.currentUser.email;
  }

  ngOnInit() {}

  logout() {
    this.angularFireAuth.auth.signOut();
    this.navController.navigateRoot("/home");
  }
}
