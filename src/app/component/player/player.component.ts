import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrl: './player.component.css'
})
export class PlayerComponent {
  @Input() ipAdd: String = '';
  @Input() camName: String = '';
  aspectRation: number = 16/9;
  @Input() playerWidth: number = 0;
  playerHeight: number = this.playerWidth / this.aspectRation;

}
