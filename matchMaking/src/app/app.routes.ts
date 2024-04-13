import { Routes } from '@angular/router';
import { InputComponent } from './component/input/input.component';
import { RadioComponent } from './component/radio/radio.component';

export const routes: Routes = [
    {path:'input',component:InputComponent},
    {path:'radio',component:RadioComponent},
];
