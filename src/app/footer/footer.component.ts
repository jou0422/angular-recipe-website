import { Component } from '@angular/core';
import { NavigationStart, Router, RouterModule } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-footer',
    imports: [RouterModule, NgIf,],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss'
})

export class FooterComponent {
  showFooter: boolean = false;

  constructor(private router: Router) {
    router.events.forEach((event: any) => {
      if (event instanceof NavigationStart){
        if(event['url'] == '/login' || event['url'] == '/signup' || event['url'] == '/forgotpassword' ){
          this.showFooter = false;
        }
        else{
          this.showFooter = true;
        }
      }
    })
  }

}
