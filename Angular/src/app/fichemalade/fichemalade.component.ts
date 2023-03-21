import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-fichemalade',
  templateUrl: './fichemalade.component.html',
  styleUrls: ['./bootstrap.min.css']
})
export class FichemaladeComponent {
  cdata: any | undefined;
  idmalade: any | undefined;
  jour: Date | undefined;
  oxygene: GLfloat | undefined;
  temperature: GLfloat | undefined;

  onSubmit() {
    console.log('Date :', this.jour);
  }

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit() {
    console.log("efa nanandrana");
      console.log(this.route.snapshot.params['id']);
      this.alaivoLery(this.route.snapshot.params['id']).subscribe((data: any) => {
      this.cdata = data;
      console.log(this.cdata); 
    });
  }

  alaivoLery(id: string){
    return this.http.get('http://localhost:3000/api/alaivoNyAretiny/'+id);
  }
}
