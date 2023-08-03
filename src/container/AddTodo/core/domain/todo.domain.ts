import {DateTime} from 'luxon';

export interface Todo {
    title: string;
    details: string;
    date: DateTime;
}
