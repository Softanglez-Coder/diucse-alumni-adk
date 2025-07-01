import { Injectable } from "@angular/core";

import { LoginRequest, RegisterRequest } from "@diucsealumni/models";

@Injectable()
export class AuthService {
    login(payload: LoginRequest) {}

    register(payload: RegisterRequest) {}
}