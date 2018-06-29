import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {FaqComponent} from './faq/faq.component';
import {TestimonialComponent } from './testimonial/testimonial.component';

const routes: Routes = [

  {path: '', component: FaqComponent},
  {path: 'faq', component: FaqComponent},
  {path: 'testimonial', component:TestimonialComponent}


];
@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
 /* imports: [
    CommonModule
  ],
  declarations: []*/
})
export class AppRoutingModule { }
