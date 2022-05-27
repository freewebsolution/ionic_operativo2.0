import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SumPipe } from '../pipe/sum.pipe';


const items = [
  SumPipe
];
@NgModule({
  declarations: [...items],
  imports: [
    CommonModule
  ],
  exports: [
    ...items
  ]
})
export class SharedModule { }
