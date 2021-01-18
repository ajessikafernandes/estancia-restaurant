import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepositionService } from './service/deposition.service';
import {SteakhouseService} from './service/steakhouse.service';
import { PizzeriaService } from './service/pizzeria.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    DepositionService,
    SteakhouseService,
    PizzeriaService,
  ]
})
export class DataModule { }
