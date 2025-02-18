

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';


@Component({
  selector: 'app-nautica',
  templateUrl: './nautica.component.html',
  styleUrls: ['./nautica.component.css']
})
export class NauticaComponent implements OnInit  {
  apodData: any = {};  
  currentPage: number = 0;  
  pageSize: number = 5;
 
  constructor(private apiService: ApiService) {}

 /*  ngOnInit(): void {
    this.apiService.getApod().subscribe(
      (data) => {
        this.apodData = data;
      },
      (error) => { 
        console.error('Error al obtener datos de la API:', error);
      }
    );
  } */

    ngOnInit(): void {
      this.loadData();
    }
  
    loadData(): void {
      const startDate = this.getStartDate(this.currentPage, this.pageSize);
      const endDate = this.getEndDate(this.currentPage, this.pageSize);
  
      this.apiService.getApod(startDate, endDate).subscribe(
        (data) => {
          this.apodData = data;
        },
        (error) => {
          console.error('Error al obtener datos de la API:', error);
        }
      );

} 

nextPage(): void {
  this.currentPage++;
  this.loadData();
}

prevPage(): void {
  if (this.currentPage > 0) {
    this.currentPage--;
    this.loadData();
  }
}

getStartDate(page: number, size: number): string {
  const date = new Date();
  date.setDate(date.getDate() - (page * size));
  return date.toISOString().split('T')[0];
}

getEndDate(page: number, size: number): string {
  const date = new Date();
  date.setDate(date.getDate() - (page * size) + size);
  return date.toISOString().split('T')[0];
}
}


  


