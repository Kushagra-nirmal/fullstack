// 9a.html 9b.html both html are correct but different way in code for understanding fast


// Query Selector, Selector Single Element-> First Occuring Element

var  a = document.querySelector("h1")// access first h1 tag
console.log(a);

var  a = document.querySelector("p")// access first p tag
console.log(a);

var  a = document.querySelector("div")// access first div tag
console.log(a);

var  b= document.querySelector(".box")// access first .box tag
console.log(b);

var  b = document.querySelector(".first")// access .first tag
console.log(b);

var  b = document.querySelector("#first")// access elements with  #first tag
console.log(b);

var  b = document.querySelector("#main")// access element with "main" id
console.log(b);

var c = document.querySelector("p.first")// access first paragraph tag with first class 
console.log(c);

var c = document.querySelector("div.box")// access first div tag with box class
console.log(c);

var d = document.querySelector(".box.first")// access element having classes box & first
console.log(d);


var e = document.querySelectorAll("h1");
console.log(e);
console.log("Number of elements:"+e.length);
console.log(e[0]);
console.log(e[0].innerHTML)