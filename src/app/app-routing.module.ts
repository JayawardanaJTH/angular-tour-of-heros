import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './components/heroes/heroes.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';

const routes: Routes = [
  {
  // To make the application navigate to the dashboard automatically, 
  // add the following route to the routes array.
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    //This tells the router to match that URL to path: 'heroes' and display
    // the HeroesComponent when the URL is something like localhost:4200/heroes.
    path: 'heroes',
    component: HeroesComponent
  },
  {
  // To navigate to the dashboard, the router needs an appropriate route.
    path: 'dashboard',
    component: DashboardComponent
  },
  {
  //The colon (:) in the path indicates that :id is a placeholder for a specific hero id.
    path: 'detail/:id',
    component: HeroDetailComponent
  }
];

/*The method is called forRoot() because you configure the router at the 
application's root level. The forRoot() 
method supplies the service providers and directives needed for routing, 
and performs the initial navigation based on the current browser URL.
*/
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
