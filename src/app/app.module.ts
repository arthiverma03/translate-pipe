import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TranslationService } from './translation.service';
import { AppComponent } from './app.component';
import { LanguageTranslatePipe } from './translate.pipe';
import { SampleComponent } from './sample-translate/sample.translate.component';

@NgModule({
  declarations: [
    AppComponent,
    LanguageTranslatePipe,
    SampleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TranslationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
