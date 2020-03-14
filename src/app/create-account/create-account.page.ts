import { Component, OnInit, ViewChild } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import { ToastController, NavController } from "@ionic/angular";

@Component({
  selector: "app-create-account",
  templateUrl: "./create-account.page.html",
  styleUrls: ["./create-account.page.scss"]
})
export class CreateAccountPage implements OnInit {
  @ViewChild("user", null) email;
  @ViewChild("password", null) password;

  constructor(
    public fire: AngularFireAuth,
    public toastController: ToastController,
    public navController: NavController
  ) {}

  ngOnInit() {}

  async showToast(message: string) {
    let toast = await this.toastController.create({
      duration: 3000,
      position: "bottom",
      message
    });

    toast.present();
  }

  async create() {
    this.fire.auth
      .createUserWithEmailAndPassword(this.email.value, this.password.value)
      .then(data => {
        this.showToast("Account Created with success");
        this.navController.navigateRoot("/dashboard");
      })
      .catch(() => {
        this.showToast("Something Wrong!");
      });
  }
}
