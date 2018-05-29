import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
import { appConfig } from '../app.config';
import { CreditDebit } from '../_models/index';
 
@Injectable()
export class CreditDebitService {
    constructor(private http: HttpClient) { }
 
    getAll() {
        return this.http.get<CreditDebit[]>(appConfig.apiUrl + '/createdebit');
    }
 
    create(creditdebit: CreditDebit) {
        return this.http.post(appConfig.apiUrl + '/createdebit/create', creditdebit);
    }
 
    update(creditdebit: CreditDebit) {
        return this.http.put(appConfig.apiUrl + '/createdebit/update/' + creditdebit.id, creditdebit);
    }
}