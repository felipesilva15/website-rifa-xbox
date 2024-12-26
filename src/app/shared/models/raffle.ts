export interface Raffle {
    id: number;
    name: string;
    maximum_numbers: number;
    start_date: Date;
    end_date: Date;
    ticket_value: number;
}
