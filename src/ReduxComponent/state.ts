
type transactions = {
    date: Date,
    montant: number,
    id: string,
    validated: boolean,
}

export interface State {
    banque: {
        argent: number;
        transactions: transactions[];
    },
    error: string;
}