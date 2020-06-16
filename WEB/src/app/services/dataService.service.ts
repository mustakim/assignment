import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    private selectedTableMenu = new BehaviorSubject('all');
    _selectedTableMenu = this.selectedTableMenu.asObservable();

    private dateParam = new BehaviorSubject<any>(null);
    _selectedDate = this.dateParam.asObservable();

    constructor() { }

    onChangeTableMenu(menu: string) {
        this.selectedTableMenu.next(menu);
    }

    onChangeTime(data: any) {
        console.log("jmmmm", data);
        this.dateParam.next(data);
    }

}