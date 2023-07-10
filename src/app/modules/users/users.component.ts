import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

nombreControl = new FormControl('',[Validators.required, Validators.minLength(2)]);
apellidoControl = new FormControl('',[Validators.required, Validators.minLength(2)]);
emailControl = new FormControl('',[Validators.email]);
contraseniaControl = new FormControl('');

userModel: FormGroup = new FormGroup({
  nombre : this.nombreControl,
  apellido : this.apellidoControl,
  email : this.emailControl,
  contrasenia : this.contraseniaControl,
}); 

constructor()
{
  console.log(this.userModel);
  
}
}
