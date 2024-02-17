import { Component,OnInit } from '@angular/core';
import { environent } from "../../../environments/environent";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  WDP01_CAM_01: string = '';
  WDP01_CAM_02: string = '';
  WDP12_CAM_01: string = '';
  WDP12_CAM_02: string = '';
  WDP22_CAM_01: string = '';
  WDP22_CAM_02: string = '';
  WIP01_CAM_01: string = '';
  WIP12_CAM_01: string = '';
  WIP12_CAM_02: string = '';
  PA1_PA2_CAM_01: string = '';
  PA3_PA4_CAM_01: string = '';
  PA5_PA6_CAM_01: string = '';

  playerWidth: number = 400;

  ngOnInit(): void {
    this.WDP01_CAM_01 = environent.WDP01_CAM_01;
    this.WDP01_CAM_02 = environent.WDP01_CAM_02;
    this.WDP12_CAM_01 = environent.WDP12_CAM_01;
    this.WDP12_CAM_02 = environent.WDP12_CAM_02;
    this.WDP22_CAM_01 = environent.WDP22_CAM_01;
    this.WDP22_CAM_02 = environent.WDP22_CAM_02;
    this.WIP01_CAM_01 = environent.WIP01_CAM_01;
    this.WIP12_CAM_01 = environent.WIP12_CAM_01;
    this.WIP12_CAM_02 = environent.WIP12_CAM_02;
    this.PA1_PA2_CAM_01 = environent.PA1_PA2_CAM_01;
    this.PA3_PA4_CAM_01 = environent.PA3_PA4_CAM_01;
    this.PA5_PA6_CAM_01 = environent.PA5_PA6_CAM_01;

    console.log(this.WDP01_CAM_01);
  }

}
