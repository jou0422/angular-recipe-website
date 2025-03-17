import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

declare const gapi: any;  // 聲明 gapi 用於 TypeScript


@Injectable({
  providedIn: 'root'
})
export class GoogleAuthService {
  private clientId = '185274663684-48terj2ocb0n8b9pibogp69krpf5s5q0.apps.googleusercontent.com';  // 使用你在 Google Cloud Console 中生成的 Client ID
  private redirectUri = 'http://localhost:4200/auth/callback'; // 回調 URI


  constructor(private router:Router) { }

  // 載入 Google API 客戶端
  initGoogleAuth() {
    gapi.load('client:auth2', () => {
      gapi.auth2.init({
        client_id: this.clientId,
        redirect_uri: this.redirectUri,
      });
    });
  }

  // // 使用 Google 登入
  // signIn() {
  //   const auth2 = gapi.auth2.getAuthInstance();
  //   return auth2.signIn();
  // }

  // // 退出登入
  // signOut() {
  //   const auth2 = gapi.auth2.getAuthInstance();
  //   return auth2.signOut();
  // }

  // // 獲取使用者資料
  // getUserProfile() {
  //   const auth2 = gapi.auth2.getAuthInstance();
  //   const user = auth2.currentUser.get();
  //   return user.getBasicProfile();
  // }

  // 開始 OAuth 2.0 重定向流
  signIn() {
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signIn({
      prompt: 'select_account',
      redirect_uri: this.redirectUri
    }).then((googleUser: any) => {
      const authCode = googleUser.getAuthResponse().code;
      this.router.navigate(['/auth-callback'], { queryParams: { code: authCode } });
    });
  }

  // 處理回調
  handleAuthCallback() {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    if (code) {
      // 使用授權碼與後端交換 token
      this.exchangeAuthCodeForTokens(code);
    }
  }

  // 使用授權碼與後端交換 token
  exchangeAuthCodeForTokens(code: string) {
    // 通常你會在這裡發送 POST 請求到你的後端，讓後端使用這個 code 去 Google 交換訪問令牌
    // 範例：
    // this.http.post('YOUR_BACKEND_URL', { code }).subscribe(response => {
    //   console.log(response);
    // });
  }
}

