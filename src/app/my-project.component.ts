import { Component } from '@angular/core';
import { PolymerElement } from '@vaadin/angular2-polymer';

@Component({
  moduleId: module.id,
  selector: 'my-project-app',
  templateUrl: 'my-project.component.html',
  styleUrls: ['my-project.component.css'],
  directives: [
    PolymerElement('vaadin-combo-box'),
    PolymerElement('paper-input'),
  ]
})
export class MyProjectAppComponent {
  title = 'my-project works!';
  myLabel='Select a number'
  myValue = '4';
  myItems = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
}
