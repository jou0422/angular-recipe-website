import { Component, CUSTOM_ELEMENTS_SCHEMA, HostListener, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';



@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AboutComponent {

  slidesPerView: number = 4;
  spaceBetween = 33;
  screenWidth!: number;

  ngAfterViewInit(): void {
    this.getScreenWidth();
  }

  private modalService = inject(NgbModal); // 使用 inject 靜態 API 來注入服務


  @HostListener('window:resize') // 一個裝飾器，用來監聽並處理 DOM 或元素上的事件
  getScreenWidth() {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth > 768) {
      this.slidesPerView = 4;
      this.spaceBetween = 33;
    }
    else if (this.screenWidth >= 394 && this.screenWidth <= 768) {
      this.slidesPerView = 2;
      this.spaceBetween = 20;
    }
    else if (this.screenWidth < 394) {
      this.slidesPerView = 1;
      this.spaceBetween = 20;
    }
  }




  onClickOpenFormModal() {
    const modalRef = this.modalService.open(ModalComponent, { centered: true });
    modalRef.componentInstance.modalType = 'about'
  }



  form = new FormGroup({
    fullname: new FormControl('', {
      validators: [Validators.required]
    }),

    phone: new FormControl('', {
      validators: [Validators.required]
    }),


    email: new FormControl('', {
      validators: [Validators.email, Validators.required]
    }),

    message: new FormControl('', {
      validators: [Validators.required]
    }),
  })


  /**
   * 用 get() 來得到 FormControl、FormGroup 的值和狀態
   */
  get emailinvalid(): boolean {
    return (
      this.form.controls.email.touched &&
      this.form.controls.email.dirty &&
      this.form.controls.email.invalid
    );
  }


  onSubmit() {
    console.warn(this.form.value);
    this.form.reset();
  }


}
