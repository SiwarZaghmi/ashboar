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
getData2() {
  return this._http.get(environment.url)
} 
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
getData8() {
  return this._http.get(environment.url+"/Data1");
}
getData9() {
  return this._http.get(environment.url+"/card1");
}
getData10() {
  return this._http.get(environment.url+"/card2");
}
getData11() {
  return this._http.get(environment.url+"/tablepg2");
}
getData12() {
  return this._http.get(environment.url+"/epic");
}
getData13() {
  return this._http.get(environment.url+"/epicc");
}
}

