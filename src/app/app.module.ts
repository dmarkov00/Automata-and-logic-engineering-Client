import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {FormulaComponent} from './components/formula/formula.component';
import {AssignmentResultService} from './services/assignment-result.service';
import {TabBarComponent} from './components/tab-bar/tab-bar.component';
import {AppRoutingModule} from './/app-routing.module';
import {CalculationResultComponent} from './components/calculation-result/calculation-result.component';
import {DataService} from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    FormulaComponent,
    TabBarComponent,
    CalculationResultComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AssignmentResultService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
