import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CalculationResultComponent} from "./components/calculation-result/calculation-result.component";


const routes: Routes = [
  {path: '', redirectTo: '/assignment/1', pathMatch: 'full'},
  {path: 'assignment/:id', component: CalculationResultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
