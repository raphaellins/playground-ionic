import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.page.html",
  styleUrls: ["./profile.page.scss"]
})
export class ProfilePage implements OnInit {
  email: string;
  constructor(public angularFireAuth: AngularFireAuth) {
    this.email = angularFireAuth.auth.currentUser.email;
  }

  ngOnInit() {}
}
