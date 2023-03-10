import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { RdfComponent } from './rdf/rdf.component';
import { GalleryComponent } from './gallery/gallery.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"auth", component: AuthComponent},
  {path:"gallery", component:GalleryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
