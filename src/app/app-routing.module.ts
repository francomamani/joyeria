import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './components/client/client.component';

const routes: Routes = [{
  path: 'clientes',
  component: ClientComponent
}, {
  path: '',
  redirectTo: 'clientes',
  pathMatch: 'full'
}, {
  path: '**',
  redirectTo: 'clientes',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
