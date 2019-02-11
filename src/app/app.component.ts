import { Component } from '@angular/core';
import { removeAllListeners } from 'cluster';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  
  arrayOdd = [];
  arrayEven = [];
  toDisable: boolean;
  resetCounter: number = 0;
  toAbleButton: Boolean;


  onCounting(count: number){
    
      if( !(count%2) ){
        this.arrayEven.push(count);
      }else{
        this.arrayOdd.push(count);
      }
      
    console.log(`  this is from App-component : ${count}`);
  }

  toReset(reset: { counter: number, disable: boolean }){
    this.toDisable = reset.disable;
    this.resetCounter = reset.counter;
  }

  ToAbleButton(toClearButton){
    this.toAbleButton = toClearButton;
  }

  clearAll(){
    clearArray(this.arrayEven);
    clearArray(this.arrayOdd);
    this.resetCounter = 0;
    this.toAbleButton = !this.ToAbleButton;
  }


}

function clearArray(arr: any){
  let array = arr;
  while(array.length){
    array.pop();
  }
}