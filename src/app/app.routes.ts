import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PeliculasComponent } from './pages/peliculas/peliculas.component';
import { GenerosComponent } from './pages/generos/generos.component';
import { FavoritosComponent } from './pages/favoritos/favoritos.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { LoginComponent } from './pages/login/login.component';
import { sessionGuard } from './componentes/guards/session.guard';
import { AuthService } from './componentes/auth.service';

export const routes: Routes = [


  {
    path:'Peliculas',
    component:PeliculasComponent
  },
  {
    path:'Generos',
    component: GenerosComponent
  },
  {
    path:'Favoritos',
    component:FavoritosComponent
  },
  {
    path:'Contacto',
    component:ContactoComponent
  },

  {
    path:'',
    component:HomeComponent,

  },
  {
    path:'**',
    redirectTo:'',
    pathMatch:'full'
  },
];
