import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChildComponent } from './child/child.component';
import { NgModule } from '@angular/core';
import { ContentcheckedComponent } from './contentchecked/contentchecked.component';
import { ContentviewComponent } from './contentview/contentview.component';

export const routes: Routes = [
    {
        path : '',
        component:HomeComponent
    },
    {
        path : 'child',
        component : ChildComponent
    },
    {
        path : 'contentchecked',
        component : ContentcheckedComponent
    },
    {
        path : 'contenview',
        component : ContentviewComponent
    }
];
// @NgModule({
//     imports : [
//         RouterModule.forRoot(routes,{
//             useHash : false
//         })
//     ],
//     exports : [RouterModule]
// })
// export class AppRouteingModule{}
