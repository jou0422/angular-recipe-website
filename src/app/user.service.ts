import { UsersInfo } from './user';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, throwError } from "rxjs";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isLoginSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false); //() 裡給初始值
  isCreateSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  userName$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  url = 'https://recipe-api-h6fg.onrender.com/api/users';

  constructor(
    private http:HttpClient) {
    // 檢查 username 有沒有資料，有的話改變初始值
    const username = localStorage.getItem('isLoginStatus')
    if (username) {
      this.userName$ = new BehaviorSubject<string>(username);
    }
  }

  //如果有取得token，表示使用者有登入系統
  // private hasTocken(): boolean {
  //   return Boolean(localStorage.getItem('loggedInUser')); // ?? >> 當前面的值是 null 返回 false
  // }

  //登入使用者，並通知所有訂閱者
  changeToLoginStatus(): void {
    this.userName$.subscribe((value =>
      localStorage.setItem('isLoginStatus', value)))
    this.isLoginSubject.next(true);
  }

  //登出使用者，並通知所有訂閱者
  changeToLogoutStatus(): void {
    localStorage.removeItem('isLoginStatus');
    this.isLoginSubject.next(false);
  }

  // @returns {Observable<T>} 讓其他人可以訂閱
  isLoggedIn(): Observable<boolean> {
    return this.isLoginSubject.asObservable();
  }


  createNewUser(): void {
    localStorage.setItem('isCreateSubject', 'new');
    this.isCreateSubject.next(true);
  }

  isCreatedNewUser(): Observable<boolean> {
    return this.isCreateSubject.asObservable();
  }


  // async loginSuccess(inputEmail: string, inputPassword: string): Promise<{ username: string }> {
  //   try {
  //     const response = await fetch(this.url, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify({ email: inputEmail, password: inputPassword })
  //     })
  //     if (!response.ok) {
  //       throw new Error(response.statusText || 'Failed to fetch data');
  //     }
  //     const usersInfo = await response.json();
  //     return usersInfo;
  //   } catch (error) {
  //     console.error('Error fetching users', error);
  //     throw error; // 重新拋出錯誤
  //   }
  // }

  // HttpClient 寫法
  loginSuccess(inputemail:string, password:string):Observable<string>{
    return this.http.post<{username:string}>(this.url, {email:inputemail, password:password})
    .pipe(
      map(res => {
        if(res.username){
          return res.username;
        }
        else {
          throw new Error ('Not valid username.')
        }
      }),
      catchError(err => {
        let errorMessage = 'Something went wrong, try again later.'
        if (err.status === 400){
          errorMessage = 'Invalid email or passowrd.';
        }
        return throwError(() => new Error(errorMessage));
      }
      )
    )
  }
// post 回傳的是一個物件 {username:string}，但 Observable 要接收的是字串
// map 是要轉換資料用的，可以用 map 轉成字串，或是不處理資料格式，回傳物件
// 可以用 filter 篩選 error code

}

