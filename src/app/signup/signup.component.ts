import { Component, inject, ViewEncapsulation } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbAlertModule, NgbDatepickerModule, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Router, RouterModule } from '@angular/router';
import { AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { JsonPipe, Location, NgClass } from '@angular/common';
import { ModalComponent } from '../modal/modal.component';
import { Users, UsersInfo } from '../mock-users';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';


function equalValues(controlName1: string, controlName2: string) {
  return (control: AbstractControl) => {
    const val1 = control.get(controlName1)?.value;
    const val2 = control.get(controlName2)?.value;

    if (val1 === val2) {
      return null;
    }
    return { valuesNotEqual: true }
  };
}



@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, NgbDatepickerModule, NgbAlertModule, FormsModule, NgClass],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  private modalService: NgbModal = inject(NgbModal);

  // public model: NgbDateStruct = {
  //   year: 0,
  //   month: 0,
  //   day: 0
  // };

  // usersInfo: UsersInfo[] = Users; // 給他 UsersInfo[] 的東西
  // usersInfo: UsersInfo[] = []; // 給他空陣列
  // userInfo!: UsersInfo; // 宣告型別為物件

  form = new FormGroup({
    username: new FormControl('', {
      validators: [Validators.required]
    }),
    birth: new FormControl({ year: 0, month: 0, day: 0 }, {
      validators: [Validators.required]
    }),
    email: new FormControl('', {
      validators: [Validators.email, Validators.required]
    }),
    phone: new FormControl('', {
      validators: [Validators.required]
    }),
    passwords: new FormGroup({
      password: new FormControl('', {
        validators: [Validators.required, Validators.minLength(8)]
      }),
      confirmPassword: new FormControl('', {
        validators: [Validators.required, Validators.minLength(8)]
      }),
    }, {
      validators: [equalValues('password', 'confirmPassword')]
    }),
    agree: new FormControl(false, {
      validators: [Validators.requiredTrue]
    })
  })

  usersInfo: UsersInfo[] = Users;

  isCreatedNewUser!: Observable<boolean>;

  minDate = { year: 1900, month: 1, day: 1 };
  maxDate = { year: 2050, month: 1, day: 1 };

  constructor(private location: Location, private router: Router, public userServecie: UserService) {
    this.isCreatedNewUser = userServecie.isCreatedNewUser();
  }

  get emailInvalid(): boolean {
    return (
      this.form.controls.email.touched &&
      this.form.controls.email.dirty &&
      this.form.controls.email.invalid);
  }

  get passwordsNoMatch(): boolean {
    return (
      this.form.controls.passwords.touched &&
      this.form.controls.passwords.dirty &&
      this.form.controls.passwords.invalid);
  }

  /**
   * ngModelChange事件觸發，檢查信箱是否重複
   * @memberof SignupComponent
   */
  onChangeEmailInput(): void {
    if (this.form.controls.email.valid) {
      const inputEmail: string = this.form.controls.email.value!;
      if (this.usersInfo.find((res) => res.email === inputEmail)) {
        this.form.controls.email.setErrors({ isEmailExist: true });
      }
    }
  }

  openSignUpModal(): void {
    const modalRef = this.modalService.open(ModalComponent, { centered: true });
    modalRef.componentInstance.modalType = 'signUp';
  }

  onClickSignUpBtn() {
    const ngbDateStructDate: NgbDateStruct = this.form.controls.birth.value!;
    const ngbDateStructToDate = new Date(ngbDateStructDate.year, ngbDateStructDate.month, ngbDateStructDate.day);
    const newUser: UsersInfo = {
      username: this.form.controls.username.value!,
      dateOfBirth: ngbDateStructToDate, // {year: 0, month: 0, day: 0}
      phone: this.form.controls.phone.value!,
      email: this.form.controls.email.value!,
      password: this.form.controls.passwords.controls.password.value!,
    }
    Users.push(newUser);
    console.log(Users);
    this.openSignUpModal()
    this.userServecie.createNewUser();
  }



  onSubmit() {
    console.log(this.form);
    if (this.form.invalid) {
      console.log('INVALID FORM');
      return;
    } else {
      console.log('VALID FORM');
      return true;
    }
  }


  onClickBackToHome() {
    this.router.navigate(['home']);
  }


}
