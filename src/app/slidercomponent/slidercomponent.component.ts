import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slidercomponent',
  templateUrl: './slidercomponent.component.html',
  styleUrls: ['./slidercomponent.component.css']
})
export class SlidercomponentComponent implements OnInit {
  
  onInputChange(event: any) {
    console.log(event.value);
    
    Data : Number = event.value;
  }



  constructor() { }

  ngOnInit(): void {
  }

}
