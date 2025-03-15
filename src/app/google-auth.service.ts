import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

// 定義全域 google 變數
declare global {
  interface Window {
    google: any;
  }
}

@Injectable({
  providedIn: 'root'
})
export class GoogleAuthService {
  private auth2: any;
  private clientId = '185274663684-49lr0i4s0ismfk5srp2d510ou5uk3u1n.apps.googleusercontent.com'; // 請替換為您的 Google Client ID

  // 用於發出登入狀態變更的事件
  private authStateSubject = new Subject<any>();
  public authState$ = this.authStateSubject.asObservable();

  constructor() {
    this.loadGoogleAuth();
  }

  // 載入 Google 認證 API
  loadGoogleAuth(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      // 檢查是否已存在 Google API 腳本
      if (document.getElementById('google-auth-script')) {
        if (window.google && window.google.accounts) {
          this.initializeGoogleAuth();
          resolve();
        }
        return;
      }

      // 建立並載入 Google API 腳本
      const script = document.createElement('script');
      script.id = 'google-auth-script';
      script.src = 'https://accounts.google.com/gsi/client';
      script.async = true;
      script.defer = true;

      script.onload = () => {
        this.initializeGoogleAuth();
        resolve();
      };

      script.onerror = (error) => {
        reject(error);
      };

      document.head.appendChild(script);
    });
  }

  // 初始化 Google 認證
  private initializeGoogleAuth(): void {
    if (window.google && window.google.accounts) {
      window.google.accounts.id.initialize({
        client_id: this.clientId,
        callback: this.handleCredentialResponse.bind(this),
        auto_select: false
      });
    }
  }

  // 處理認證回應
  private handleCredentialResponse(response: any): void {
    // 解析 JWT 令牌
    const token = response.credential;
    const payload = this.decodeJwtToken(token);

    const userData = {
      token: token,
      userId: payload.sub,
      email: payload.email,
      name: payload.name,
      pictureUrl: payload.picture,
      firstName: payload.given_name,
      lastName: payload.family_name
    };

    // 發出登入狀態變更事件
    this.authStateSubject.next(userData);

    // 儲存用戶資訊到 localStorage (可選)
    localStorage.setItem('googleUser', JSON.stringify(userData));
  }

  // 顯示登入按鈕
  renderLoginButton(elementId: string): void {
    if (window.google && window.google.accounts) {
      window.google.accounts.id.renderButton(
        document.getElementById(elementId),
        {
          type: 'standard',
          theme: 'outline',
          size: 'large',
          text: 'signin_with',
          shape: 'rectangular',
          logo_alignment: 'left',
          locale: 'zh_TW'
        }
      );
    }
  }

  // 主動提示登入
  promptLogin(): void {
    if (window.google && window.google.accounts) {
      window.google.accounts.id.prompt();
    }
  }

  // 登出
  signOut(): void {
    // 清除本地儲存的用戶資訊
    localStorage.removeItem('googleUser');
    // 重新整理頁面或清空狀態
    this.authStateSubject.next(null);
  }

  // 解析 JWT 令牌
  private decodeJwtToken(token: string): any {
    try {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
          .join('')
      );
      return JSON.parse(jsonPayload);
    } catch (error) {
      console.error('解析令牌失敗', error);
      return {};
    }
  }
}
