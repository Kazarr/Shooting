import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-target',
  templateUrl: './target.component.html',
  styleUrls: ['./target.component.sass']
})
export class TargetComponent implements OnInit {

  center = 500;
  rDesat = 50;
  rDevat = 100;
  rOsem = 150;
  rSedem = 200;
  rSest = 250;
  rPat = 300;
  rStyri = 350;
  rTri = 400;
  rDva = 450;
  rJeden = 500;
// (x +xm)^2 + (y +ym)^2 <= r^2 stredová rovnica kruhu
  constructor() {
  }

  ngOnInit(): void {
  }

  shoot(event: MouseEvent) {
    const x = event.x - 7 - this.center; // body margin
    const y = event.y - 7 - this.center; // body margin
    if (x ** 2 + y ** 2 <= this.rDesat ** 2) {
      return console.log('desat bodov');
    }
    if (x ** 2 + y ** 2 <= this.rDevat ** 2) {
      return  console.log('däveť bodov');
    }
    if (x ** 2 + y ** 2 <= this.rOsem ** 2) {
      return  console.log('osem bodov');
    }
    if (x ** 2 + y ** 2 <= this.rSedem ** 2) {
      return  console.log('sedem bodov');
    }
    if (x ** 2 + y ** 2 <= this.rSest ** 2) {
      return  console.log('sest bodov');
    }
    if (x ** 2 + y ** 2 <= this.rPat ** 2) {
      return  console.log('pat bodov');
    }
    if (x ** 2 + y ** 2 <= this.rStyri ** 2) {
      return  console.log('styri body');
    }
    if (x ** 2 + y ** 2 <= this.rTri ** 2) {
      return  console.log('tri body');
    }
    if (x ** 2 + y ** 2 <= this.rDva ** 2) {
      return  console.log('dva body');
    }
    if (x ** 2 + y ** 2 <= this.rJeden ** 2) {
      return  console.log('jeden bod');
    }
  }
}
