import { UsersInfo } from './../user';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Location, NgClass, NgIf } from '@angular/common';
import { ModalComponent } from '../modal/modal.component';
import { UserService } from '../user.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-login',
    imports: [RouterModule, ReactiveFormsModule, NgClass],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss'
})

export class LoginComponent {
  private modalService = inject(NgbModal);
  showPassword: boolean = false;
  pwForgot: boolean = false;
  form = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.email, Validators.required]
    }),
    password: new FormControl('', {
      validators: [Validators.required, Validators.minLength(8)]
    }),
    remember: new FormControl(true)
  })


  usersInfo: UsersInfo[] = [];



  isLoggedIn!: Observable<boolean>;


  constructor(
    private location: Location,
    public userService: UserService,
    private router: Router) {
    this.isLoggedIn = userService.isLoggedIn();
    this.getUsers();
  }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers() {
    this.userService.getUsers().then((users: UsersInfo[]) => {
      this.usersInfo = users;
    })
  }


  openLoginModal(persona: string) {
    const modalRef = this.modalService.open(ModalComponent, { centered: true, backdrop: 'static' });
    modalRef.componentInstance.username = persona;
    modalRef.componentInstance.modalType = 'login';
    this.form.reset();

    this.userService.changeToLoginStatus();
  }



  openLoginFailednModal() {
    const modalRef = this.modalService.open(ModalComponent, { centered: true, backdrop: 'static' });
    modalRef.componentInstance.modalType = 'loginFailed';
    this.form.controls.password.reset();
  }

  onClickLoginBtn() {
    const inputEmail: string = this.form.controls.email.value!;
    const inputPassword: string = this.form.controls.password.value!;
    const userLogin = this.usersInfo.find((res) => res.email === inputEmail && res.password === inputPassword);
    console.log(userLogin); // 有找到 物件 | 沒找到 undefined
    if (userLogin) {
      this.openLoginModal(userLogin.username);
      this.userService.userName = userLogin.username;
    } else {
      this.openLoginFailednModal();
    }
  }



  get emailisinvalid(): boolean {
    return (
      this.form.controls.email.touched &&
      this.form.controls.email.dirty &&
      this.form.controls.email.invalid);
  }

  get passwordisinvalid(): boolean {
    return (
      this.form.controls.password.touched &&
      this.form.controls.password.dirty &&
      this.form.controls.password.invalid);
  }



  onSubmit() {
    const enteredEmail = this.form.value.email;
    const enteredPassowrd = this.form.value.password;
    console.log(enteredEmail, enteredPassowrd);
  }


  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  onClickBackToHome() {
    this.router.navigate(['home']);
  }


}

