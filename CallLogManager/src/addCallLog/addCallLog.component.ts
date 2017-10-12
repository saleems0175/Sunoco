import {Component} from '@angular/core';
import {ICallLog} from '../models/callLog';
import { CallLogService } from '../services/callLogService';

import { NgDatepickerModule } from 'ng2-datepicker';
import {IMyDpOptions} from 'mydatepicker';


@Component({   
    templateUrl: './addCallLog.component.html',
    styleUrls: ["/addCallLog.component.css"],
})



export class AddCallLogComponent {

    callLog : ICallLog;
    departmentList: string[];
    statusList: string[];
    showSuccessAlert: boolean;
    successMessage :string;

    public myDatePickerOptions: IMyDpOptions = {
        // other options...
        dateFormat: 'mm-dd-yyyy',
    };

    // Initialized to specific date (09.10.2018).
    public dateModel: any;
    
    constructor(private callLogService: CallLogService)
    {
        // initialize the callLog object to emppt fields
        this.clearCallLog();
        
        this.statusList = ['Open', 'Cancelled', 'Closed'];
        this.departmentList = ['Customer Support','Billing','Sales','Parts']
        
        this.showSuccessAlert = false;
        this.successMessage = "Call Entry Added";

    }

    addCallLogEntry() : void{

        this.showSuccessAlert = true;
        this.callLog.Date = this.dateModel.formatted;
        this.callLogService.addCallLogEntry(this.callLog);
        this.clearCallLog();

    }

    clearCallLog() : void{
        this.callLog = {
            CustomerName: '',
            AgentName: '',
            Date: '',
            Duration: '',
            Department: '',
            Status: ''
        }

        this.dateModel = null;

    }
}