var box = document.getElementsByClassName("box");

let jsques = [
	"1. What is JavaScript and how does it differ from Java?",
	"2. How do you declare a variable in JavaScript? Explain the differences between var, let, and const.",
	"3. What are the different data types available in JavaScript?",
	"4. Explain how == and === differ in JavaScript.",
	"5. What are JavaScript functions and how do you define one? Provide an example.",
	"6. Explain the concept of scope in JavaScript. What is the difference between global and local scope?",
	"7. What is a closure in JavaScript? Provide an example of a closure.",
	"8. How does the this keyword work in JavaScript? Provide an example where this is used in an object method.",
	"9. What is the event loop in JavaScript and how does it handle asynchronous operations?",
	"10. Explain the difference between synchronous and asynchronous code in JavaScript.",
	"11. What are promises in JavaScript and how do you use them? Provide an example.",
	"12. Describe the purpose and usage of the async and await keywords in JavaScript.",
	"13. What is a JavaScript object and how do you create one? Provide an example.",
	"14. Explain what prototypes are in JavaScript and how prototypal inheritance works.",
	"15. What is the difference between call(), apply(), and bind() methods in JavaScript? Provide examples.",
];

console.log(Math.ceil(Math.random()*15));
//  console.log(Math.ceil(Math.random()*9999));	

for (var i = 0; i < box.length; i++) {
	box[i].addEventListener("click", function () {
        clearall();
        this.innerText= jsques[Math.floor(Math.random() * 15)];
		this.style.backgroundColor = "white";
		this.style.color = "black";
        this.style.fontSize="20px";
        });
}
function clearall() {
	for (var i = 0; i < box.length; i++) {
		box[i].style.backgroundColor = "black";
		box[i].style.color = "white";
        box[i].innerText=i+1
        box[i].style.fontSize="30px";
	}
}
