import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { FilterPipePipe } from './filter-pipe.pipe';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'Task 2 ';
  curPage : number;
  recordsPerPage : number;


 dataurl: string = "http://www.mocky.io/v2/5a31fd0a2e0000603fe3b63c";  // URL to web API
jsonData: any;
  constructor (private http: Http) {
this.curPage = 1;
    this.recordsPerPage = 5;

  }



  private readData () {
  	 console.log("check 1");
    this.http.get(this.dataurl)
    .subscribe(
      data => this.extractData(data),
       err => this.handleError(err)
    );
  }

  private extractData(res: Response) {


 this.jsonData= res.json();
let num = this.jsonData.length;
let dat =this.jsonData;
this.dat=dat;
this.num=num;
let tnum=this.num;
this.tnum=tnum;
console.log(dat);
console.log(num);


//console.log(this.jsonData);
//sort by name


private sortByName(){
  console.log("Sort By Name");
let dat =this.jsonData;

let x=dat.sort(function(a, b) {
  let nameA = a.name.toUpperCase(); 
  let nameB = b.name.toUpperCase(); 
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
});
console.log(x);


}

private sortlastname(){
  console.log("Sort By lastname");
let dat =this.jsonData;

let x=dat.sort(function(a, b) {
  let lastnameA = a.lastname.toUpperCase(); 
  let lastnameB = b.lastname.toUpperCase(); 
  if (lastnameA < lastnameB) {
    return -1;
  }
  if (lastnameA > lastnameB) {
    return 1;
  }

  // names must be equal
  return 0;
});
console.log(x);


}

private sortByDate(){
  console.log("sort By date of Birth");
let dat =this.jsonData;

let x=dat.sort(function(a, b) {
  let dobA = new Date(a.dob);
  let dobB = new Date(b.dob);
  if (dobA < dobB) {
    return -1;
  }
  if (dobA > dobB) {
    return 1;
  }

  // names must be equal
  return 0;
});
console.log(x);


}

private sortByContact(){
  console.log("sort By Contact");
let dat =this.jsonData;

let x=dat.sort(function(a, b) {
  let contactA = a.phone;
  let contactB = b.phone;
  if (contactA < contactB) {
    return -1;
  }
  if (contactA > contactB) {
    return 1;
  }

  // names must be equal
  return 0;
});
console.log(x);


}
private sortByAddress(){
  console.log("Sort By Address");
let dat =this.jsonData;

let x=dat.sort(function(a, b) {
  let addressA = a.address.toUpperCase(); 
  let addressB = b.address.toUpperCase(); 
  if (addressA < addressB) {
    return -1;
  }
  if (addressA > addressB) {
    return 1;
  }

  // names must be equal
  return 0;
});
console.log(x);


}
/* filter*/

private filterByAddress(){
  let temp=this.dat;
  console.log("fil");
console.log(temp);
let temp2 = temp.filter(function (el) {
    return (el.address ==="mapusa");
});

this.jsonData=temp2;
console.log(this.jsonData);
let number= this.jsonData.length;

this.num=number;
}

private filterByAddressPorvorim(){
  let temp=this.dat;
  console.log("fil");
console.log(temp);
let temp2 = temp.filter(function (el) {
    return (el.address ==="porvorim");
});

this.jsonData=temp2;
console.log(this.jsonData);
let number= this.jsonData.length;

this.num=number;
}



private nofil(){


  let temp=this.dat;

let temp2 = temp.filter(function (el) {
    return (el.address !=" ");
});

this.jsonData=temp2;
console.log(this.jsonData);
let number= this.jsonData.length;

this.num=number;

}







 private handleError (error: any) {
 	console.log("error !")
  
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.log(errMsg); 
    return errMsg;
  }
}

}