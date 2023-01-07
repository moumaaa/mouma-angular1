import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name="mouma";
  location="laketown";
  f1()
  {
    alert("hi how are you???");

  }

  uname=new FormControl('');
  update()
  {
    this.uname.setValue("mouma");  //data binding
  }
}
