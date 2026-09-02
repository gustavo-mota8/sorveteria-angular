import { Routes } from '@angular/router';
import {Home} from "./pages/home/home";
import { Sabores } from './pages/sabores/sabores';
export const routes: Routes = [


    {path: "", redirectTo: "home", pathMatch: "full"},
    {path: "home", component: Home},
    {path: "sabores", component: Sabores}
    
];
