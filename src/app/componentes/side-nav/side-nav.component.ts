import { NgClass, NgFor } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [NgFor, NgClass, RouterLink],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})






export class SideNavComponent implements OnInit{

  @Input() SideNavStatus: boolean = false;



  list = [
    {
      number:'1',
      name: 'Peliculas',
      icon:'fa-solid fa-circle-play',
    },
    {
      number:'1',
      name: 'Generos',
      icon:'fa-solid fa-person-half-dress',
    },
    {
      number:'1',
      name: 'Favoritos',
      icon:'fa-brands fa-gratipay',
    },
    {
      number:'1',
      name: 'configuracion',
      icon:'fa-solid fa-gear',
    },
    {
      number:'1',
      name: 'Contacto',
      icon:'fa-solid fa-address-book',
    },
  ];



  constructor(){




  }

  ngOnInit(): void{
    console.log(this.SideNavStatus)
  }


}
