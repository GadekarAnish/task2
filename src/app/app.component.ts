import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Task 2 ';


 dataurl: string = "http://www.mocky.io/v2/5a3103d12e00007c16e3b299";  // URL to web API
jsonData: any[] = [];

  constructor (private http: Http) {}



  private readData () {
  	 console.log("check 1");
    this.http.get(this.dataurl)
    .subscribe(
      data => this.extractData(data),
       err => this.handleError(err)
    );
  }

  private extractData(res: Response) {

let jsonData= res['_body'] ;
//console.log(jsonData.length);
console.log(jsonData);
let str = JSON.stringify(jsonData); 
console.log(str);
let contact = JSON.parse(str);
//let cont = contact.split('{');




this.jsonData=contact;
console.log(jsonData);

//let test =str.split('{ }');
//let head = jsonData.split('{ }');

//console.log(test.length);

//this.jsonData=head;
//console.log("check2");



/*
var str = JSON.stringify(jsonData);  
//console.log(str);

var contact = JSON.parse(str);

console.log(contact.lastname);*/
/*
let totalLines=jsonData[].split(/\r\n|\n/);

let headers= jsonData[].split(':');

let headers1=headers[0].split(',');
console.log(headers1);

//console.log(headers1);


console.log("check2");

*/






 private handleError (error: any) {
 	console.log("error !")
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.log(errMsg); // log to console instead
    return errMsg;
  }
}

}