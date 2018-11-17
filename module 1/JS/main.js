let hacker1 = 'Marc';
console.log("The driver's name is " + hacker1);

let hacker2 = 'Javi';
console.log("The navigator's name is " + hacker2);

if(hacker1.length > hacker2.length){
  console.log( "The driver has the longest name, it has " + hacker1.length + " characters")

} else if(hacker1.length < hacker2.length){

  console.log( "Yo, navigator got the longest name, it has " + hacker2.length + " characters")

}else{

  console.log( "Wow, you both got equally long names, " + hacker2.length + " characters")
}

hacker1 = hacker1.toUpperCase();
let newHacker = '';

for(let i=0; i < hacker1.length; i++){
  console.log(hacker1[i]);
  newHacker += hacker1[i] + ' ';
}

console.log(newHacker);





