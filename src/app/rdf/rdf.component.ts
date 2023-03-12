import { Component } from '@angular/core';
// import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-rdf',
  templateUrl: './rdf.component.html'
})
export class RdfComponent {
  constructor(private fb: FormBuilder){}
  // public forms = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  //   email: new FormControl(''),
  //   subscribe: new FormControl(false)
  // })

  public forms = this.fb.group({
    firstName: ['', Validators.required],
    lastName:[''],
    email:['', Validators.required],
    subscribe:[false]
  })

  showMessage = false

  handleClick(){
    console.log("run")
    this.showMessage = true
    setTimeout(()=>{
      this.showMessage = false
    },3000)
  }
}
