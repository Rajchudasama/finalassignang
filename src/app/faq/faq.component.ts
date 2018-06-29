import { Component, OnInit } from '@angular/core';
import {Faq} from '../faq';
import {FaqService} from '../faq.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  searchfaq:Faq = new Faq();
  faqs:Faq[];

  constructor(private faqservice:FaqService) { }

  faqbyid(faqsearch){
    if((faqsearch.id).trim()==""){
      this.faqservice.getFaqs().subscribe(data => this.faqs = data );
    }
    this.faqservice.getFaqs(faqsearch).subscribe(data => this.faqs = data );
  }

  ngOnInit() {
    this.faqservice.getFaqs().subscribe(data => this.faqs = data );
  }

}
