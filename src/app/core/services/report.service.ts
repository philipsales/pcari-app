import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, ResponseContentType } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map'

import { Helper }         from '../helper';
import { Report }       from '../models';
import { environment }    from 'environments/environment';

@Injectable()
export class ReportService {

  private reportUrlVersion = 'v1';
  private reportUrl = environment.API_ENDPOINT + '/reports'; 
  
  constructor(private http: Http) {
  }//--constructor

  getReports(): Promise<Report[]> {
    const url = `${this.reportUrl}`;
    return this.http.get(url)
                    .toPromise()
                    .then((response:Response) => 
                    {
                      console.info("getReports: ", response.json());
                      return response.json().data as Report[];
                    })
                    .catch(this.handleError);
  }//--getReports

  getReport(id: number): Promise<Report> {
    const url = `${this.reportUrl}/${id}`;
    return this.http.get(url)
                    .toPromise()
                    .then((response:Response) => 
                    {
                      console.log(url);
                      console.info("getReports: ", response.json());
                      return response.json().data as Report;
                    })
                    .catch(this.handleError);
  }//--getReport

  downloadFileJSON() {
    const url = `${this.reportUrl}`;

    return this.http
               .get(url)
               .map((res) => {
                 console.info("BODY: ", res['_body']);
                 console.info("BODY: ", JSON.stringify(res['_body'].data));
                 return new Blob([JSON.stringify(res['_body'].data)], {type: 'application/json'});
               });
  }

  downloadFilePDF() {
    const url = `${this.reportUrl}`;

    return this.http
               .get(url)
               .map((res) => {
                 console.info("BODY: ", res['_body']);
                 console.info("BODY: ", JSON.stringify(res['_body'].data));
                 return new Blob([JSON.stringify(res['_body'].data)], {type: 'application/pdf;charset=utf-8'});
               });
  }




  private handleError(error: any): Promise<any> {
    console.log('An error occured');
    console.log(error);
    return Promise.reject(error.message || error);
  }

}
