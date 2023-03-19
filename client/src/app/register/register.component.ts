import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
model : any = {}
@Output() cancelvalue = new EventEmitter();

constructor(private accoutService : AccountService, private toastr: ToastrService) {  }

  ngOnInit(): void {
  }

  register(){
    this.accoutService.register(this.model).subscribe({
      next : _ => {
        this.cancel();
      },
      error : error => {
        this.toastr.error(error.error),
        console.log(error)
      }
    })
  }
  cancel(){
    this.cancelvalue.emit(false);
  }

}
