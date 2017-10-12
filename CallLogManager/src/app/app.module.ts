import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { RouterModule, RouterLinkActive} from '@angular/router';


import { MyDatePickerModule } from 'mydatepicker';

import { AppComponent } from './app.component';
import { AddCallLogComponent} from '../addCallLog/addCallLog.component';
import { SearchCallLogComponent} from '../searchCallLog/searchCallLog.component';


const routes = [
  { path: 'addCallLog', component: AddCallLogComponent },
  { path: 'searchCallLog', component: SearchCallLogComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    AddCallLogComponent,
    SearchCallLogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MyDatePickerModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
