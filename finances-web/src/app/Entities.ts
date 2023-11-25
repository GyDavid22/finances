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