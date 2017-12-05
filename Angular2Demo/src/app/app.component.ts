import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: '<h1>{{name}}</h1><my-employee></my-employee>',
})
export class AppComponent { name = 'Employee Details'; }
