import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LanchesRoutingModule } from './lanches-routing.module';

@NgModule({
  declarations: [LanchesRoutingModule.components],
  imports: [CommonModule, LanchesRoutingModule, ReactiveFormsModule],
})
export class LanchesModule {}
