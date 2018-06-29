import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {FaqComponent} from './faq/faq.component'

const routes: Routes = [
  {path: '',component: FaqComponent},
  {path: 'faq',component: FaqComponent}
];
@NgModule({
  exports: [RouterModule]
 /* imports: [
    CommonModule
  ],
  declarations: []*/
})
export class AppRoutingModule { }
