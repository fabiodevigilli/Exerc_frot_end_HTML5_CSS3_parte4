import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContatoComponent } from './contato.component';

@NgModule({
    declarations: [
        ContatoComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    providers: []
})
export class ContatoModule {}