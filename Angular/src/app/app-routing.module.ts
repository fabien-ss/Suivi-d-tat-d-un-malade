import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { TestComponent } from './test/test.component';
import { FichemaladeComponent } from './fichemalade/fichemalade.component';
import { ChartComponent } from './chart/chart.component';

const routes: Routes = [
  //{ path: '', redirectTo: '/accueil', pathMatch: 'full' },
  { path: '', component: AccueilComponent },
  { path: 'test', component: TestComponent },
  { path: 'fichemalade/:id', component: FichemaladeComponent },
  { path: 'chart', component: ChartComponent }
  // path: 'accueil/', component: Accueil}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
