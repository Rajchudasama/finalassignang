import { Component, OnInit } from '@angular/core';
import { Testimonial } from '../testimonial';
import { TestimonialService } from '../testimonial.service'; 

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {

  testimonialsearch:Testimonial = new Testimonial();
  testimonial:Testimonial[];

  constructor(private testimonialservice:TestimonialService) { }


  findTestimonial(nameSearch)
  {
    this.testimonialservice.getTestimonial(nameSearch).subscribe(data=>this.testimonial=data);
  }
  ngOnInit() {
    this.testimonialservice.getTestimonial().subscribe(data=>this.testimonial=data);
  }


}
