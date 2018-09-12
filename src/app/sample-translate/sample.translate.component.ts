import { TranslationService } from './../translation.service';
import { Component } from '@angular/core';

@Component({
  selector: 'sample-language',
  templateUrl: './sample.translate.component.html'
})
export class SampleComponent {

  constructor(private translationService: TranslationService) { }
  birthday = new Date(1988, 3, 15); // April 15, 1988
  monthlyCost: number= 10;

}