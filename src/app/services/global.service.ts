import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  constructor(private router:Router) { }

  
logedIn(){
  return localStorage.getItem('role');
}

logOutUser(){
  localStorage.removeItem('role');
  localStorage.clear();
  this.router.navigate(['/']);

}

}
