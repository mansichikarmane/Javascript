import { Component} from '@angular/core';
// , OnInit 
@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent {
  

  submit(login){
    console.log("Form submitted",login)
  }
  

  

}
