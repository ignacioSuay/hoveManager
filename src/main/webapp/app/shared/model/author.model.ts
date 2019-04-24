import { Moment } from 'moment';

export interface IAuthor {
    id?: number;
    name?: string;
    lastname?: string;
    dob?: Moment;
}

export class Author implements IAuthor {
    constructor(public id?: number, public name?: string, public lastname?: string, public dob?: Moment) {}
}
