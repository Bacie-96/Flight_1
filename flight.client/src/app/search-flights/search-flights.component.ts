import { Component, OnInit } from '@angular/core';
import 'node_modules/@fontawesome/fontawesome-free/css/all.css';
@Component({
  selector: 'app-search-flights',
  templateUrl: './search-flights.component.html',
  styleUrl: './search-flights.component.css'
})
export class SearchFlightsComponent implements OnInit {
  searchResults: flightRm[] = [
    {
      airline: "SAA",
      remainingNumberOfSeats: 10 ,
      departure: { time: Date.now().toString(), place: " Mpumalanga" },
      arrival: { time: Date.now().toString(), place: "Cape Town" },
      price: 500,
    },
    {
      airline: "Airlink",
      remainingNumberOfSeats: 15,
      departure: { time: Date.now().toString(), place: "Polokwane" },
      arrival: { time: Date.now().toString(), place: " Johannesburg" },
      price: 700 ,
    },

    {
      airline: "Flysafair",
      remainingNumberOfSeats: 4 ,
      departure: { time: Date.now().toString(), place: "Lanseria" },
      arrival: { time: Date.now().toString(), place: "George" },
      price: 650,
    }
  ]
  constructor() { }
  ngOnInit(): void { }
 
}

export interface flightRm {
  airline: string;
  arrival: TimePlaceRm;
  departure: TimePlaceRm;
  price: number;
  remainingNumberOfSeats: number;

}
export interface TimePlaceRm
{
  place: string;
  time: string;
  
}
