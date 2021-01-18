import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepositionService } from './service/deposition.service';
import {SteakhouseService} from './service/steakhouse.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    DepositionService,
    SteakhouseService
  ]
})
export class DataModule { }
