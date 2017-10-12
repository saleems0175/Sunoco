import {Injectable} from '@angular/core';
import {ICallLog} from '../models/callLog';


@Injectable()

export class CallLogService {

     callLogs: ICallLog[]; 

    constructor(){
        this.callLogs = [

            { 
                CustomerName: 'Bob Topples',
                AgentName: 'James Bond',
                Date: '09-12-2015',
                Duration : "12",
                Department: 'Billing',
                Status: 'Cancelled'
            },
            { 
                CustomerName: 'Jim Adler',
                AgentName: 'Michael Bourne',
                Date: '06-12-2017',
                Duration : "5",
                Department: 'Sales',
                Status: 'Open'
            },
            { 
                CustomerName: 'Grant Hughes',
                AgentName: 'Fox Mulder',
                Date: '04-15-2014',
                Duration : "40",
                Department: 'Parts',
                Status: 'Closed'
            },
            { 
                CustomerName: 'Claire Stone',
                AgentName: 'Max Paine',
                Date: '06-12-2017',
                Duration : "34",
                Department: 'Customer Support',
                Status: 'Open'
            },
        ]
} 

    addCallLogEntry(callLogEntry: ICallLog) : void{

        this.callLogs.push(Object.assign({}, callLogEntry));
    }

    getCallLogs() : ICallLog[]{

        return this.callLogs;
    }

}