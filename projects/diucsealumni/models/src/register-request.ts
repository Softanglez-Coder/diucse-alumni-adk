export class RegisterRequest {
    name: string;
    email: string;
    password: string;

    constructor(name: string, email: string, password: string) {
        if (!name) {
            throw new Error('Name is required');
        }

        if (!email) {
            throw new Error('Email is required');
        }

        if (!password) {
            throw new Error('Password is required');
        }

        this.name = name;
        this.email = email;
        this.password = password;
    }
}