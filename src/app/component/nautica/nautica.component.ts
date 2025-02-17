/* import { Component } from '@angular/core';

@Component({
  selector: 'app-nautica',
  templateUrl: './nautica.component.html',
  styleUrls: ['./nautica.component.css']
})
export class NauticaComponent {

}
 */

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-nautica',
  templateUrl: './nautica.component.html',
  styleUrls: ['./nautica.component.css']
})
export class NauticaComponent implements OnInit  {
  apodData: any = {};  // Almacenará los datos de la API

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getApod().subscribe(
      (data) => {
        this.apodData = data;
      },
      (error) => {
        console.error('Error al obtener datos de la API:', error);
      }
    );
  }

}