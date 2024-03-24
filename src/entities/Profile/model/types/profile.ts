import { Country, Currency } from 'shared/const/common';

export interface Profile {
    'first_name': string,
    'last_name': string,
    'age': number,
    'currency': Currency,
    'country': Country,
    'city': string,
    'user_name': string,
    'avatar': string,
}

export interface ProfileSchema {
    data?: Profile,
    isLoading: boolean,
    error?: string,
    readonly: boolean
}
