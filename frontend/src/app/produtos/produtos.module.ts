import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProdutosComponent } from './produtos.component';

@NgModule({
    declarations: [
        ProdutosComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    providers: []
})
export class ProdutosModule {}