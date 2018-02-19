import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {FormulaComponent} from './components/formula/formula.component';
import {AssignmentResultService} from "./services/assignment-result.service";
import { TabBarComponent } from './components/tab-bar/tab-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    FormulaComponent,
    TabBarComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule
  ],
  providers: [AssignmentResultService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
