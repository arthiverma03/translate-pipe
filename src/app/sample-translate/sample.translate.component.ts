import { TranslationService } from './../translation.service';
import { Component } from '@angular/core';

@Component({
  selector: 'sample-language',
  templateUrl: './sample.translate.component.html'
})
export class SampleComponent {

  constructor(private translationService: TranslationService) { }

}