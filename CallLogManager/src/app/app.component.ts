import { Component } from '@angular/core';
import { RouterLinkActive } from '@angular/router';
import { CallLogService } from '../services/callLogService'

@Component({
  
  selector: 'cm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CallLogService]

})

export class AppComponent {
  title = 'app';

  constructor()
  {

  }


}
