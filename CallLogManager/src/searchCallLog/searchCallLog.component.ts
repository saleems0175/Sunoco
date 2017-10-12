import { Component, OnInit } from '@angular/core';
import { CallLogService} from '../services/callLogService';
import { ICallLog } from '../models/callLog';

@Component({

    templateUrl: './searchCallLog.component.html',
    styleUrls: ['./searchCallLog.component.css']
})

export class SearchCallLogComponent implements OnInit {

    callLogs: ICallLog[];
    filteredCallLogs: ICallLog[];
    
    _statusFilter: string;
    _agentFilter: string;
    _departmentFilter: string;
    _customerFilter: string;

    statusList: string[];
    departmentList: string[];

    sortByList: string[];
    sortByValue: string;
    sortDesc: boolean;

    panelTitle: string;

    get customerFilter() : string{

        return this._customerFilter;
    }

    set customerFilter(value:string){

        this._customerFilter = value;
        this.performFilter()
    }

    get agentFilter() : string{
        
        return this._agentFilter;
    }
        
    set agentFilter(value:string){

        this._agentFilter = value;
        this.performFilter()
    }

    get departmentFilter() : string{
        
        return this._departmentFilter;
    }
        
    set departmentFilter(value:string){

        this._departmentFilter = value;
        this.performFilter()
    }


    get statusFilter() : string{
        
        return this._statusFilter;
    }
        
    set statusFilter(value:string){

        this._statusFilter = value;
        this.performFilter()
    }

    constructor(private callLogService: CallLogService){
        
    }

    ngOnInit(): void{      
        this.callLogs = [];
        this.callLogs = this.callLogService.getCallLogs();
        this.filteredCallLogs = this.callLogs

        this.statusList = ['Open', 'Cancelled', 'Closed'];
        this.departmentList = ['Customer Support','Billing','Sales','Parts']

        this.sortDesc = false;
        this.sortByList = ['Customer','Agent','Date','Duration','Department','Status'];
        this.sortByValue ="";

        this.panelTitle = "Search Call Logs"
    } 

    performFilter() : void{

        this.filteredCallLogs = this.callLogs;

        if( this.customerFilter)
        {
            this.filteredCallLogs = this.filteredCallLogs.filter((callLog: ICallLog) => 
            callLog.CustomerName.toLocaleLowerCase().indexOf(this.customerFilter.toLocaleLowerCase()) !== -1);
        }

        if(this.agentFilter)
        {
            this.filteredCallLogs = this.filteredCallLogs.filter((callLog: ICallLog) => 
            callLog.AgentName.toLocaleLowerCase().indexOf(this.agentFilter.toLocaleLowerCase()) !== -1);
        }

        if(this.departmentFilter)
        {
            this.filteredCallLogs = this.filteredCallLogs.filter((callLog: ICallLog) => 
            callLog.Department.toLocaleLowerCase().indexOf(this.departmentFilter.toLocaleLowerCase()) !== -1);
        }

        if(this.statusFilter)
        {
            this.filteredCallLogs = this.filteredCallLogs.filter((callLog: ICallLog) => 
            callLog.Status.toLocaleLowerCase().indexOf(this.statusFilter.toLocaleLowerCase()) !== -1);
        }
    }

    sortCallLogs(): void{

        if(this.sortByValue == 'Customer'){

            this.filteredCallLogs.sort(this.sort_by('CustomerName', this.sortDesc, function(a){return a.toLocaleLowerCase()} ));
        }

        if(this.sortByValue == 'Agent'){
            
            this.filteredCallLogs.sort(this.sort_by('AgentName', this.sortDesc, function(a){return a.toLocaleLowerCase()} ));
        }  
        
        if(this.sortByValue == 'Date'){
            
            this.filteredCallLogs.sort(this.sort_by('Date', this.sortDesc,null));
        }  

        if(this.sortByValue == 'Duration'){
            
            this.filteredCallLogs.sort(this.sort_by('Duration', this.sortDesc, parseInt));
        } 

        if(this.sortByValue == 'Department'){
            
            this.filteredCallLogs.sort(this.sort_by('Department', this.sortDesc, function(a){return a.toLocaleLowerCase()} ));
        }  

        if(this.sortByValue == 'Status'){
            
            this.filteredCallLogs.sort(this.sort_by('Status', this.sortDesc, function(a){return a.toLocaleLowerCase()} ));
        }  
    }

    //I go this from http://jsfiddle.net/dFNva/1/

    sort_by = function(field, sortDesc, primer){
        var key = function (x) {return primer ? primer(x[field]) : x[field]};
     
        return function (a,b) {
           var A = key(a), B = key(b);
           return ( (A < B) ? -1 : ((A > B) ? 1 : 0) ) * (sortDesc ? -1 : 1);               
        }
     }  
}