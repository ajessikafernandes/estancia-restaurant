import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { FoodComponent } from './components/food/food.component';
import { DepositionsComponent } from './components/depositions/depositions.component';
import { AboutComponent } from './components/about/about.component';
import { AskingComponent } from './components/asking/asking.component';
import { FooterComponent } from './components/footer/footer.component';

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatStepperModule } from '@angular/material/stepper';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [
    MenuComponent,
    HomeComponent,
    FoodComponent,
    DepositionsComponent,
    AboutComponent,
    AskingComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule,
    MatGridListModule,
    FontAwesomeModule,
    MatTabsModule,
    MatStepperModule,
    MatRadioModule,
    MatCardModule,
    MatExpansionModule,
    FlexLayoutModule,
    MatSidenavModule,
  ],
  exports: [
    MenuComponent,
    HomeComponent,
    FoodComponent,
    DepositionsComponent,
    AboutComponent,
    AskingComponent,
    FooterComponent,
  ]

})
export class CoreModule { }
