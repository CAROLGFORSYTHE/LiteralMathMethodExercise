// The Literal Math Method Exercise
// 1a
let warmHugs = "Hi, I'm Olaf and I like warm hugs.";

// 1b
console.log(warmHugs.toUpperCase());

// 1c
warmHugs = warmHugs.replace("like", "love");
console.log(warmHugs);

// 2a
let beenImpaled = "Oh, look at that. I've been impaled.";

// 2b
console.log(beenImpaled.slice(18));
// console.log(beenImpaled.slice(18, 36));
// console.log(beenImpaled.slice(-18));

// 3a
let dotDotDot = "...";

// 3b
let skullBones = `I don't have a skull${dotDotDot}or bones.`;
console.log(skullBones);

// 4
console.log(Math.PI);

// 5
let randomNum = Math.random();
randomNum *= 3;
randomNum = Math.floor(randomNum);
randomNum++;
console.log(randomNum);

// let randomNum = Math.random();
// randomNum *= 3;
// randomNum = Math.ceil(randomNum);
// console.log(randomNum);

// BONUS
// 6
console.log(" Let It Go!".toUpperCase().repeat(2).trim());

// 7a
let reindeers = "Reindeers are better than people.";

// 7b
console.log(reindeers.replace(/ /g, "_"));
// console.log(reindeers.split(" ").join("_"));

// 8
console.log(Math.SQRT2);
// console.log(Math.sqrt(2));

// 9
// Completed on separate lines
// let newRandomNumber = Math.random();
// newRandomNumber *= 17;
// newRandomNumber = Math.floor(newRandomNumber);
// newRandomNumber += 7;

// Extra Bonus: Completed on a single line
var newRandomNumber = Math.floor(Math.random() * (23 - 7 + 1) + 7);
// var newRandomNumber = Math.floor(Math.random() * (16 + 1) + 7);
// var newRandomNumber = Math.floor(Math.random() * 17 + 7);
// var newRandomNumber = Math.floor(A number from 0 up to 16.999 + 7);
// var newRandomNumber = Math.floor(A number from 7 up to 23.999);
// var newRandomNumber = A whole number from 7 up to 23;
console.log(newRandomNumber);

// Using Ceil (Number could possibly be 6 in this case)
let randomNumber = Math.ceil(Math.random() * 17) + 6;