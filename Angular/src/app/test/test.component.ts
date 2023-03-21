import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-test',
  // template: '<p>{{message}}</p>'
  templateUrl: './test.component.html',
  styleUrls: ['./bootstrap.min.css']
})
export class TestComponent implements OnInit {
  
  data: any | undefined;

  constructor(private http: HttpClient, private route: ActivatedRoute,) {}
  ngOnInit() {
    console.log("efa nanandrana");
    this.alaivoNyMarary().subscribe((data: any) => {
      this.data = data;
      // console.log(this.data[0].idMalade); // Affiche "Hello from Node.js!"
    });
  }
  getData() {
    return this.http.get('http://localhost:3000/api/data').pipe(
      tap((data: any) => console.log('Data:', data))
    );
  }
  alaivoNyMarary(){
    return this.http.get('http://localhost:3000/api/alaivoNyMarary').pipe(
      tap((data: any) => console.log('Data:', data))
    );
  }
}
