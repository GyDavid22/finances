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