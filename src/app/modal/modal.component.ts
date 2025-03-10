import { NgSwitch, NgSwitchCase, NgSwitchDefault, Location } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { RouterModule, NavigationExtras, ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [NgSwitch, NgSwitchCase, RouterModule,],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  @Input() username: string = '';
  @Input() modalType: string = '';

  activeModal = inject(NgbActiveModal);
  isLoggedIn!: Observable<boolean>;

  ngOnInit(): void {
  }

  constructor(private router: Router, public userService : UserService){

  }

  onClickBackToHome():void{
    this.activeModal.close('Close click');
    this.router.navigate(['home']);
  }

  onClickLogin(){
    this.activeModal.close('Close click');
    this.router.navigate(['login']);
  }

}
