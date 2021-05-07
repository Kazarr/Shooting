import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-target',
  templateUrl: './target.component.html',
  styleUrls: ['./target.component.sass']
})
export class TargetComponent implements OnInit {

  points: any;
  center = 650;
  r = 70;

// 1300 1300
// center 650 650
// r = 70
  constructor() { }

  ngOnInit(): void {
  }

  shoot(event: MouseEvent) {
    console.log(event.x, event.y);

  }
}
