import { UsersInfo } from './../user';
import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Location, NgClass, NgIf } from '@angular/common';
import { ModalComponent } from '../modal/modal.component';
import { UserService } from '../user.service';
import { Observable } from 'rxjs';
import { gapi } from 'gapi-script';


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
  }


  ngOnInit() {
  }


  /**
   * 驗證登入者身分
   */
  onClickLoginBtn() {
    const inputEmail: string = this.form.controls.email.value!;
    const inputPassword: string = this.form.controls.password.value!;
    // const userLogin = this.usersInfo.find((res) => res.email === inputEmail && res.password === inputPassword);
    // console.log(userLogin); // 有找到 物件 | 沒找到 undefined

    // this.userService.loginSuccess(inputEmail, inputPassword)
    //   .then((usersInfo: { username: string }) => {
    //     if (usersInfo.username !== '') {
    //       this.userService.userName$.next(usersInfo.username);
    //       this.openLoginModal(usersInfo.username);
    //     }
    //     else {
    //       this.openLoginFailednModal();
    //     }
    //   }
    //   )

    // HttpClient 寫法
      this.userService.loginSuccess(inputEmail, inputPassword)
      .subscribe({
        next:res =>{
          this.userService.userName$.next(res);
          this.openLoginModal(res);
        },
        error:err =>{
          this.openLoginFailednModal();
        }
      })
  }

  /**
 * 跳出登入成功提示
 */
  openLoginModal(persona: string) {
    const modalRef = this.modalService.open(ModalComponent, { centered: true, backdrop: 'static' });
    modalRef.componentInstance.username = persona;
    modalRef.componentInstance.modalType = 'login';
    this.form.reset();
    this.userService.changeToLoginStatus();
  }


  /**
   * 跳出登入失敗提示
   */
  openLoginFailednModal() {
    const modalRef = this.modalService.open(ModalComponent, { centered: true, backdrop: 'static' });
    modalRef.componentInstance.modalType = 'loginFailed';
    this.form.controls.password.reset();
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


  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  onClickBackToHome() {
    this.router.navigate(['home']);
  }

}

