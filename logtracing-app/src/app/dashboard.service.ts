import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Http, Response} from '@angular/http';

import 'rxjs/Rx';



@Injectable()
export class DashboardService {



//HttpClient
  results: string[];

  data: any;
  //error: any;

  constructor(private http: Http) { }


  urlsData(usecase,mdn,starttime,endtime,indexdata) {

    return this.http.get('/api/seq?usecase=' + usecase
      + '&mdn=' + mdn
      + '&start=' + starttime
      + '&end=' + endtime
      + '&index=' + indexdata).map((res:Response) =>{
        const data = res.json();
        return data;
        //console.log("res",res.json());
    })
    /*.catch (
      (error: Response) => {
        console.log("error",error);
      }
    )*/

    /*.subscribe(
       /!* data => {
          return data;
        }*!/
        //data => return data
      (data) => this.data = data,
      (err) => this.error = err
    );*/

  }

}

export class DataService{
  dataFromService: any;
  getDetails() {
    return this.dataFromService;
  }
}
