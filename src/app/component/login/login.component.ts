/* import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

}
 */


import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string = '';
  password: string = '';
  
  constructor(private router: Router) { }


  onLogin() {
    // Simulación de autenticación
    console.log('Usuario autenticado correctamente');
    
    // Redirigir a /navbar
    this.router.navigate(['/navbar']);
  }

}
