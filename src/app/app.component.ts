import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'suggest-me';
  showDropDown = false;
  timeValue = '';
  breakfast_items = [
    {
      category: 'Fruits',
      value: [ 'oranges: 1-2', 'apple: 1', 'pomegranate: 1/2', 'bananas: 1' ],
      isRequired: true,
      multipleValues: true,
      giveChoice: true
    },
    {
      category: 'Dry Fruits',
      value: [ 'Anjeer: 2-3', 'Almonds: 6-8', 'Akhrot: 1-2', 'Raisins: 10-12' ],
      isRequired: true,
      multipleValues: true,
      giveChoice: false
    },
    {
      category: 'Extra',
      value: [ 'Roasted Flex Seed: 1-2 spoon' ],
      isRequired: true,
      multipleValues: false,
      giveChoice: false
    },
    {
      category: 'Strength',
      value: [ 'Milk mixed with a spoon of Ghee' ],
      isRequired: true,
      multipleValues: false,
      giveChoice: false
    },
    {
      category: 'Sweet',
      value: [ 'Gehu ke aate ka halwa', 'Moong ke aate ka halwa' ],
      isRequired: false,
      multipleValues: true,
      giveChoice: true
    },
    {
      category: 'Soup',
      value: [ 'Tomato', 'Tomato + Beet + Carrot', 'Sweet Corn', 'Spinach', 'Broccoli Cheddar' ],
      isRequired: false,
      multipleValues: true,
      giveChoice: true
    },
    {
      category: 'Breakfast Items',
      value: [ 'Poha', 'Upma', 'Chila', 'Salad with Chickpeas', 'Sprout moong', 'Salad with Spinach' ],
      isRequired: false,
      multipleValues: true,
      giveChoice: true
    },
  ];
  lunch_items = [];
  snack_items = [];
  dinner_items = [];
  before_sleep_items = [];
}
