import {Injectable} from '@angular/core';
import {Observable, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ApiService} from "./base/api.service";
import {LoginUserData} from "../interfaces/login-user-data.interface";
import {RegisterUserDataInterface} from "../interfaces/register-user-data.interface";


@Injectable({
  providedIn: 'root'
})
export class AuthService extends ApiService {

  private readonly tokenTitleLC = 'auth-token';
  private readonly idTitleLC = 'user-id';

  private _token: string;
  private _id: string;

  constructor(private httpClient: HttpClient) {
    super('shared-api');

    this._token = '';
    this._id = '';
  }

  get token(): string {
    if (!this._token) {
      this._token = localStorage.getItem(this.tokenTitleLC) ?? '';
    }

    return this._token;
  }

  set token(value) {
    this._token = value;
    localStorage.setItem(this.tokenTitleLC, value);
  }

  get id(): string {
    if (!this._id) {
      this._id = localStorage.getItem(this.idTitleLC) ?? '';
    }

    return this._id;
  }

  set id(value) {
    this._id = value;
    localStorage.setItem(this.idTitleLC, value);
  }


  /**
   * Sends POST request trying to log the user in with the passed credentials.
   *
   * @param data User credentials.
   *
   * @return Token of an authenticated user.
   *
   * @remarks The retrieved token will be saved in the private property {@link _token}
   * and in `localStorage` by key {@link tokenTitleLC}.
   */
  login(data: LoginUserData): Observable<string> {
    return this.httpClient.post<string>(
      this.url('Login'),
      data
    )
      .pipe(
        tap((token) => {
          this.token = token;
        })
      );
  }

  /**
   * Sends POST request trying to register the user with the passed credentials.
   *
   * @param data User credentials.
   *
   * @return ID of a created user.
   *
   * @remarks The retrieved token will be saved in the private property {@link _id}
   * and in `localStorage` by key {@link idTitleLC}.
   */
  register(data: RegisterUserDataInterface): Observable<string> {
    return this.httpClient.post<string>(
      this.url('Register'),
      data
    )
      .pipe(
        tap((userId) => {
          this.id = userId;
        })
      );
  }

  isLoggedIn(): boolean {
    return !!this.token;
  }

}
