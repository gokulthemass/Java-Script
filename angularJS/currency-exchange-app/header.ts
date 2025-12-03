import { AfterViewInit, Component } from '@angular/core';
import { Body } from '../body/body';
import { End } from '../end/end';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [Body, End],
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
})
export class Header implements AfterViewInit{

  ngAfterViewInit() {
      
const modal = document.getElementById("myModal");
const openmodal = document.getElementById("openmodal");
const closemodal = document.getElementById("closeModal");

const loginmodal = document.getElementById("loginmodal");
const closelogin = document.getElementById("loginclose");
const openlogin = document.getElementById("openlogin");

const regmodal = document.getElementById("regmodal");
const closereg = document.getElementById("regclose");
const openreg = document.getElementById("openreg");

openmodal?.addEventListener("click", function(event){
  if(modal){
  modal.style.display= "flex";}
});

closemodal?.addEventListener("click", function(event){
  if(modal){
  modal.style.display= "none";}
});

window.addEventListener("click", function(event){
  if(modal && event.target === modal){
    modal.style.display="none";
  }
});

openlogin?.addEventListener("click", function(event){
  if(loginmodal){
    loginmodal.style.display="flex";
  }
});

closelogin?.addEventListener("click", function(event){
  if(loginmodal){
    loginmodal.style.display="none";
  }
});

window.addEventListener("click",function(event){
  if(loginmodal && event.target === loginmodal){
    loginmodal.style.display ="none";
  }
});

openreg?.addEventListener("click", function(event){
  if(regmodal){
    regmodal.style.display="flex";
  }
});

closereg?.addEventListener("click", function(event){
  if(regmodal){
    regmodal.style.display="none";
  }
});

window.addEventListener("click",function(event){
  if(regmodal && event.target === regmodal){
    regmodal.style.display ="none";
  }
});

}
}
