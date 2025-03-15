import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {
  url='https://dog.ceo/api/breeds/image/random';

  constructor(){}

  onClickToFetch(){
    console.log('fetching data...');
  }


}
