import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'calculator-app';
  result: string = '';

    add(firsnumber:string, secondnumber:string){
      this.result = (Number(firsnumber) + Number(secondnumber)).toString();
    }
    sub(firsnumber:string, secondnumber:string){
      this.result = (Number(firsnumber) - Number(secondnumber)).toString();
    }
    div(firsnumber:string, secondnumber:string){
      this.result = (Number(firsnumber) / Number(secondnumber)).toString();
    }
    mul(firsnumber:string, secondnumber:string){
      this.result = (Number(firsnumber) * Number(secondnumber)).toString();
    }
}
