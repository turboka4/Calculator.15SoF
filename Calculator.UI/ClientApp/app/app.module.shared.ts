import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { CalculatorComponent } from './components/calculator/calculator.component';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        CalculatorComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'calculator', pathMatch: 'full' },
            { path: 'calculator', component: CalculatorComponent },
            { path: '**', redirectTo: 'calculator' }
        ])
    ]
})
export class AppModuleShared {
}
