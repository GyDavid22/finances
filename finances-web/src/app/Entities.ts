export interface FinanceItem {
    id: number,
    amount: number,
    name: string,
    date: string,
    description: string | null,
    type: "FOOD_DRINK" | "HOUSING_UTILITIES" | "CLOTHING_SHOES" | "TRAVEL_LEISURE" | "HEALTH_MEDICAL" | "EDUCATION_LEARNING" | "ENTERTAINMENT_HOBBY" | "SAVINGS_INVESTMENTS" | "OTHER"
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

export class FinanceItemConverters {
    static toReadable: { raw: string; readable: string }[] = [
        { raw: "CLOTHING_SHOES", readable: "Clothing and shoes" },
        { raw: "EDUCATION_LEARNING", readable: "Education and learning" },
        { raw: "ENTERTAINMENT_HOBBY", readable: "Entertainment and hobby" },
        { raw: "FOOD_DRINK", readable: "Food and drink" },
        { raw: "HEALTH_MEDICAL", readable: "Health and medical" },
        { raw: "HOUSING_UTILITIES", readable: "Housing and utilities" },
        { raw: "SAVINGS_INVESTMENTS", readable: "Savings and investments" },
        { raw: "TRAVEL_LEISURE", readable: "Travel and leisure" },
        { raw: "OTHER", readable: "Other" }
    ];
}