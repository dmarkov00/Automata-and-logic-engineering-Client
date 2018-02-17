import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {FormulaComponent} from './components/formula/formula.component';
import {AssignmentOneService} from "./services/assignment-one.service";


@NgModule({
  declarations: [
    AppComponent,
    FormulaComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule
  ],
  providers: [AssignmentOneService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
