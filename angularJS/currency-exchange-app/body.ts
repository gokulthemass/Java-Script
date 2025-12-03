import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [],
  templateUrl: './body.html',
  styleUrls: ['./body.css'],
})
export class Body implements AfterViewInit{

  ngAfterViewInit(): void {
      
  
  const sendamt = document.getElementById("snd_amt") as HTMLInputElement;
  const receiveamt = document.getElementById("receive_amt") as HTMLInputElement;

  const sendcurr = document.getElementById("snd_curr") as HTMLSelectElement;
  const receivecurr = document.getElementById("rcv_curr") as HTMLSelectElement;

  const usdtoinr = 87;
  const fee = 0.99;

  function conversion(){
    let sendvalue = parseFloat(sendamt.value) || 0;
    let sendtype = sendcurr.value;
    let receivetype = receivecurr.value;
    let result = 0;

    if(sendtype === 'inr' && receivetype === 'usd'){
      result = (sendvalue - fee) / usdtoinr;
    }
    else if(sendtype === 'usd' && receivetype === 'inr'){
      result = (sendvalue - fee) * usdtoinr;
    }
    else{
      result = sendvalue - fee;
    }
    receiveamt.value = result >= 0 ? result.toFixed(2) : '';
  }

  sendamt?.addEventListener('input',conversion);
  sendcurr?.addEventListener('change', conversion);
  receivecurr?.addEventListener('change', conversion);

  conversion();
}}
