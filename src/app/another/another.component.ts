import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-another',
  templateUrl: './another.component.html',
  styleUrls: ['./another.component.css']
})
export class AnotherComponent implements OnInit {

ngOnInit() {
  alert("i am oninit");
}

constructor()
{
  alert("i am constructor");
}
  another="mouma";
  salary=2200;
  jd='7/01/23'

  fruits=
  [
    {name: 'apple',
    price:22,
    stock: 10},

    {name: 'orange',
    price:26,
    stock: 10},
    
    {name: 'mango',
    price:228,
    stock: 10},
  ];
}


