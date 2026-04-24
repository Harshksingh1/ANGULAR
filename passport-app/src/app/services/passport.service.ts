import { Injectable } from '@angular/core';
import { Passport } from '../model/passport';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PassportService {
  passportData:Passport=new Passport();
  passportList:Passport[];
  readonly passportApiUrl='http://localhost:5000/api/Passports';
  constructor(private objHttp:HttpClient) { }
  getPassportsList(){
    this.objHttp.get(this.passportApiUrl).toPromise().then(res=>this.passportList=res as Passport[]);
  }
  postPassport(){
    return this.objHttp.post(this.passportApiUrl,this.passportData);
  }
  deletePassport(id){
    return this.objHttp.delete(this.passportApiUrl+'/'+id);
  }
  putpassport(){
    return this.objHttp.put(this.passportApiUrl+'/'+this.passportData.Id,this.passportData);
  }
}
