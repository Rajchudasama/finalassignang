import { Injectable } from '@angular/core';
import {Faq} from './faq';
import {Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FaqService {

  constructor(private http:HttpClient) { }

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

  getFaqs(faq?:Faq):Observable<Faq[]>{
    if(faq){
      return this.http.get<Faq[]>('http://faq-api.azurewebsites.net/api/Faqs?apiKey=raminderKey&id='+faq.id).pipe(catchError(this.handleError));
    }
    return this.http.get<Faq[]>('http://faq-api.azurewebsites.net/api/Faqs?apiKey=raminderKey').pipe(catchError(this.handleError));

  }
}

