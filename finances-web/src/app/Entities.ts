export class FinanceItem {
    id: number
    price: number;
    name: string;
    date: string;
    description: string | undefined;

    constructor(id: number, price: number, name: string, date: string, description: string | undefined = undefined) {
        this.id = id;
        this.price = price;
        this.name = name;
        this.date = date;
        this.description = description;
    }
}

export interface LoginRegistration {
    username: string,
    password: string
}

export interface User {
    id: number,
    username: string,
    registrationDate: Date
}

export interface UserPasswordChange {
    oldpassword: string,
    newpassword: string
}