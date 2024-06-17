import { NgModule } from '@angular/core';
import { PrincipalComponent } from './principal.component';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';
import { PrincipalRoutingModule } from './principal-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
    ],
    imports: [
        CommonModule,
        FormsModule,
        PrincipalRoutingModule,
        SharedModule,
    ]
})

export class PrincipalModule {}