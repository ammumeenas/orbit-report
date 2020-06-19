import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite.';


@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {
  @Input()
  displayList: Satellite[];
  typeList = ['Communication', 'Probe', 'Space Station', 'Telescope', 'Space Debris', 'Positioning'];

  constructor() {
  }

  ngOnInit() {
  }
  count(stringInput: string) {

    let count = 0;
    for (let i = 0; i < this.displayList.length; i++) {
      if (this.displayList[i].type.toUpperCase() === stringInput.toUpperCase()) {
        count = count + 1;
      }


    }

    return count;
  }

  total() {
    return this.count('Space Debris') + this.count('Communication') + this.count('Probe') + this.count('Positioning') + this.count('Space Station') +
      this.count('Telescope');

  }

}

