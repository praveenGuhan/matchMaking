import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import {MatRadioModule} from '@angular/material/radio';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-radio',
  standalone: true,
  imports: [
    MatRadioModule,
    CommonModule
  ],
  templateUrl: './radio.component.html',
  styleUrl: './radio.component.scss',
  schemas: [NO_ERRORS_SCHEMA] 
})
export class RadioComponent {
  favoriteSeason: string='';
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
  selectedValue!: string;

  radioSelect(event:string) {
    console.log('event',event);
    this.selectedValue = event;
  }

}
