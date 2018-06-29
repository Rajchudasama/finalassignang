import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import {Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Testimonial } from './testimonial';


@Injectable({
  providedIn: 'root'
})
export class TestimonialService {

  constructor(
    private http:HttpClient
  ) { }

  private handleError(error: HttpErrorResponse) {

    // client-side or network error
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred: ', error.error.message);
      // additional action to handle error goes here:
    } else { // backend error
      console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
      // additional action to handle error goes here:
    }

    return throwError ('Something bad happened!');
  }

  getTestimonial(testimonial?:Testimonial):Observable<Testimonial[]>
  {
    if(testimonial)
    {
      return this.http.get<Testimonial[]>('http://assign2api.azurewebsites.net/api/testimonialname?apikey=wdapi&name='+testimonial.name).pipe(catchError(this.handleError));
    }
    return this.http.get<Testimonial[]>('http://assign2api.azurewebsites.net/api/testimonials?apikey=wdapi').pipe(catchError(this.handleError));
  }
}
