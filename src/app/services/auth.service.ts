import { Injectable } from '@angular/core';
import { LoginUserSuccess } from '../Interfaces';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  role!: string | null 
  token!: string | null 
      constructor(private router:Router) { 
    
      }
    
      login(res:LoginUserSuccess){
        localStorage.setItem('token',res.token)
        localStorage.setItem('role', res.role)
        localStorage.setItem('username', res.username)
      }
  
     logout(){
      localStorage.clear()
      this.router.navigateByUrl('/login');
     }
  
     isloggedIn(){
      let role=localStorage.getItem('role')
      this.role= role? role:null
      let token=localStorage.getItem('token')
      this.token= token? token:null
      return  this.token? true :false
     }
    
     getuserName(){
        let username=localStorage.getItem('username')
        return username ? username : 'Welcome User';
       }
    }
