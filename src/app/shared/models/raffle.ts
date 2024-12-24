export interface Raffle {
    id: number;
    name: string;
    maximum_numbers: number;
    start_date: string | Date;
    end_date: string | Date;
    ticket_value: number;
}
