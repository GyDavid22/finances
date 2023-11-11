export class FinanceItem {
    price: number;
    name: string;
    date: string;
    description: string | undefined;

    constructor(price: number, name: string, date: string, description: string | undefined = undefined) {
        this.price = price;
        this.name = name;
        this.date = date;
        this.description = description;
    }
}