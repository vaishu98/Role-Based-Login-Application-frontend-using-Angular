import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar'
import {MatTableModule} from '@angular/material/table';

const material = [
  MatButtonModule,
  MatToolbarModule,
  MatTableModule
]

@NgModule({
  imports: [
    material
  ],
  exports: [
    material
  ]
})
export class MaterialModule { }
