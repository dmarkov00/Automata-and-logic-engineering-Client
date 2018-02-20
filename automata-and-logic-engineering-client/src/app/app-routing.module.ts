import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CalculationResultComponent} from "./components/calculation-result/calculation-result.component";


const routes: Routes = [
  {path: 'assignment1', component: CalculationResultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
