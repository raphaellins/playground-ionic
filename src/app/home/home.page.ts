import { Component, ViewChild } from "@angular/core";
import { NavController, ToastController } from "@ionic/angular";
import { AngularFireAuth } from "angularfire2/auth";
import { User } from "./user";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  @ViewChild("user", null) email;
  @ViewChild("password", null) password;
  user: User = new User();

  constructor(
    public navController: NavController,
    public toastController: ToastController,
    public angularFireAuth: AngularFireAuth
  ) {}

  authObserver = this.angularFireAuth.authState.subscribe(user => {
    if (user) {
      this.navController.navigateRoot("/dashboard");
    }

    this.authObserver.unsubscribe();
  });

  async showToast(message: string) {
    let toast = await this.toastController.create({
      duration: 3000,
      position: "bottom",
      message
    });

    toast.present();
  }

  async login() {
    this.angularFireAuth.auth
      .signInWithEmailAndPassword(this.email.value, this.password.value)
      .then(() => {
        this.showToast("Logged In");

        this.user.email = this.email.value;
        this.user.password = this.password.value;

        this.navController.navigateRoot("/dashboard");
      })
      .catch(() => {
        this.showToast("Wrong Credentials");
      });
  }

  createAccount() {
    this.navController.navigateForward("/create-account");
  }
}
