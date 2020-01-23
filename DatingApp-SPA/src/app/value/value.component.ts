import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {
  constructor(private httpvar: HttpClient) { }
  values: any;
  url: 'http://localhost:5000/api/values';
  // tslint:disable-next-line: member-ordering
  public headerDict = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
  // tslint:disable-next-line: max-line-length
  public requestOptions = {
    headers: new Headers(this.headerDict),
  };

  ngOnInit() {
    this.getvalues();
  }
getvalues() {
 // this.httpvar.head('http://localhost:5000/api/values', this.requestOptions);
  this.httpvar.get('http://localhost:5000/api/values')
  .subscribe(response => {
    this.values = response;
    console.log(this.values);
  }, error => {
    console.log(error);
  });
}


}
