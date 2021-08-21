import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./pages/about/about.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { HomeComponent } from "./pages/home/home.component";
import { PortfolioComponent } from "./pages/portfolio/portfolio.component";
import { ResumeComponent } from "./pages/resume/resume.component";
import { ServicesComponent } from "./pages/services/services.component";

const app_routes: Routes = [    
    { path: 'home', component: HomeComponent},
    { path: 'about', component: AboutComponent},
    { path: 'resume', component: ResumeComponent},
    { path: 'services', component: ServicesComponent},
    { path: 'portfolio', component: PortfolioComponent},
    { path: 'contact', component: ContactComponent},    
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
]

@NgModule({
    imports: [
        RouterModule.forRoot( app_routes, {useHash: true, scrollPositionRestoration: 'disabled'} )
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule{

}