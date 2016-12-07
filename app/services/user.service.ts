import { Inject, Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

import { User } from "../models/user";
import { BackendUri } from "../app.settings";

@Injectable()
export class UserService {

    constructor(
        @Inject(BackendUri) private _backendUri: string,
        private _http: Http) { }

    getUser(userId: number): Observable<User> {
        return this._http
                   .get(`${this._backendUri}/users/${userId}`)
                   .map((data: Response): User => User.fromJson(data.json()));
    }
}
