import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { IEmployee } from './employee.interface';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class EmployeeService {
    
    private _employeesUrl: string = 'api/employees';
    private headers: Headers;
    
    constructor(private _http: Http) {
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
    }
    
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
    
    updateEmployee(employee: IEmployee): Observable<IEmployee> {
        return this._http
            .put(this._employeesUrl + '/' + employee.id, JSON.stringify(employee), { headers: this.headers } )
            .map((response: Response) => <IEmployee>response.json())
            .do(data => console.log('Employee: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }
    
    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
