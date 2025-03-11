import { Users, UsersInfo } from './../mock-users';
import { Component, inject } from '@angular/core';
import { EmailValidator, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-forgotpassword',
    imports: [ReactiveFormsModule, RouterModule],
    templateUrl: './forgotpassword.component.html',
    styleUrl: './forgotpassword.component.scss'
})
export class ForgotpasswordComponent {

  form = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.required, Validators.email]
    })
  })

  usersInfo = Users;

  private modalService = inject(NgbModal);

  constructor(private location: Location) { }

  openEmailSendModal() {
    const modalRef = this.modalService.open(ModalComponent, { centered: true });
    modalRef.componentInstance.modalType = 'forgotPwEmailSend';
    this.form.reset();
  }

  openNotRegisterModal() {
    const modalRef = this.modalService.open(ModalComponent, { centered: true });
    modalRef.componentInstance.modalType = 'forgotNotRegister';
    this.form.reset();
  }

  onClickCheckRegister() {
    const emailInput: string = this.form.controls.email.value!;

    if (this.usersInfo.find((res) => res.email.includes(emailInput))) {
      this.openEmailSendModal()
    } else {
      this.openNotRegisterModal()
    }
  }


  get emailisinvalid(): boolean {
    return (
      this.form.controls.email.touched &&
      this.form.controls.email.dirty &&
      this.form.controls.email.invalid);
  }

  onSubmit() {

  }

  goBack() {
    this.location.back();
  }

}
