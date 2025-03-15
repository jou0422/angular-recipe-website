import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  url='https://dog.ceo/api/breeds/image/random';
  constructor() {

  }

  async getDogImage():Promise<any>{
    const dogImage = await fetch(this.url);
    return (await dogImage.json()) ?? {};
  }

}
