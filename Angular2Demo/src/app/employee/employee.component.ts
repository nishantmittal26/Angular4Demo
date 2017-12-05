import { Component } from '@angular/core';

@Component({

    selector: 'my-employee',
    templateUrl: 'app/employee/employe.component.html'
})

export class EmployeeComponent {
    firstName: string = 'Tom';
    lastName: string = 'John';
    gender: string = 'Male';
    age : number = 10 ;
} 