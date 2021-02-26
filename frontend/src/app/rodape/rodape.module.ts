import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RodapeComponent } from './rodape.component';

@NgModule({
    declarations: [
        RodapeComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    providers: [],
    exports: [RodapeComponent]
})
export class RodapeModule {}