import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.sass']
})
export class GameControlComponent implements OnInit {

  @Output('counter') counterOutside = new EventEmitter<number>();
  @Output('resetCounter') clearCounter = new EventEmitter<{ counter: number, disable: boolean }>();
  @Output('cleaButton') clearButton = new EventEmitter<boolean>();
 
  @Input() counter: number;
  stopTheGame: any;
  odd: number;
  even: number;
  disable: boolean = true;
  toClearButton: boolean = true;


  constructor() { }

  ngOnInit() {
  }

  startGame(){
    this.stopTheGame = setInterval(() =>{
      this.counter += 1;
      this.counterOutside.emit( this.counter );
      //console.log(this.counter);
    }, 1000)
    this.clearCounter.emit({ 
      counter: this.counter, 
      disable: this.disable
    });
    this.disable = !this.disable;
  }

  stopGame(){
    clearInterval( this.stopTheGame )
    this.disable = !this.disable;
    this.clearCounter.emit({ 
      counter: this.counter, 
      disable: this.disable
    });
    this.clearButton.emit(this.toClearButton);
  }


}
