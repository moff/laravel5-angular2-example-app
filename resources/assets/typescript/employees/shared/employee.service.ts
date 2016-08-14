import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { IEmployee } from './employee.interface';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class EmployeeService {
    
    private _employeesUrl: string = 'employees';
    
    constructor(private _http: Http) {}
    
    getEmployees(): Observable<IEmployee[]> {
        return this._http.get(this._employeesUrl)
            .map((response: Response) => <IEmployee[]>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }
    
    getEmployee(id: number): Observable<IEmployee> {
        return this._http.get(this._employeesUrl + '/' + id)
            .map((response: Response) => <IEmployee>response.json())
            .do(data => console.log('Employee: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }
    
    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
