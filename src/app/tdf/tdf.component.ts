import { Component } from '@angular/core';
import { TemplateModel } from './template-model';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html'
})
export class TdfComponent {
  formModel = new TemplateModel("","","",false)
}
