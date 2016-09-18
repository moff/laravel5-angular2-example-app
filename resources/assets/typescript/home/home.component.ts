import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
    template: require('./home.component.html')
})
export class HomeComponent implements OnInit {
    constructor(private _flashMessagesService: FlashMessagesService) {}
    
    ngOnInit() {
        // 1st parameter is a flash message text
        // 2nd parameter is an object with additional parameters
        this._flashMessagesService.show('We are in about component!', { cssClass: 'alert-success', timeout: 2000 });
    }
}
