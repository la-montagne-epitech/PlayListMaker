import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    {
        path: 'generator',
        loadChildren: () => import('./generator/generator.module').then(m => m.GeneratorModule),
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
})
export class PublicModule { }