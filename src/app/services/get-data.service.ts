import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private _http: HttpClient) { }
// card data
  getData() {
    return this._http.get(environment.url+"card");
1 }
//column chart size / logged
  getData0(){
  return this._http.get(environment.url+"/merge")
}
getData_Pie(){
  return this._http.get(environment.url+"/test")
}
getData5() {
  return this._http.get(environment.url+"/opened");

1 }
getData6() {
return this._http.get(environment.url+"/closed");

1 }
getData7() {
  return this._http.get(environment.url+"/table1");
}
}
