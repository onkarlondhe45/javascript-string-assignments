
document.write("<h3>Capitalizing Words</h3>");



  function capitalizeWords(givenString) {
    let words = givenString.split(" ");
	console.log(words);
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    }
    document.write(words.join(" "));
	console.log(words.join(" "));
}

capitalizeWords("jaY shRee rAm");
 
document.write("<hr>");
document.write("<br>");



document.write("<h3>Capitalizing Each Word</h3>");
 
function capitalizeAll(givenString){
	 
	let convertingStringIntoArray = givenString.split("");
	
	for(let i=0; i<convertingStringIntoArray.length; i++){
		convertingStringIntoArray[i] = String.fromCharCode(convertingStringIntoArray[i].charCodeAt(0)-32);
	}
	
	let desiredString = convertingStringIntoArray.join("");
	console.log(desiredString);
	document.write(desiredString);

}
capitalizeAll("onkar londhe");

 

document.write("<hr>");
document.write("<br>");


document.write("<h3>Word Existence Check</h3>");


function isExist(givenString){
		
	let exist = givenString.includes("ram");
	
	if(exist){
		document.write("it is a part of string");
	}else{
		document.write("it is not a part of string");	
	}
}

isExist("jay shri ram");
 
 
document.write("<hr>");
document.write("<br>");


document.write("<h3>Word Occurrence Count</h3>");

function getOccurrenceCount(givenString, occurrenceWord){
	
	let word = givenString.split(" ");
	let count = 0;
	for(let i=0; i<word.length; i++){
		if(word[i]===occurrenceWord){
			count++;
		}
	}
	
	if(count>0){
		return count;
	}else{
		return `'${occurrenceWord}' is not present in the given string.`;
	}
}

let occurrenceCount = getOccurrenceCount("i am onkar and my full name is onkar ramesh londhe", "onkar");
document.write(occurrenceCount);
 


document.write("<hr>");
document.write("<br>");





document.write("<h3>Word Density Calculation:</h3>");

function wordDensity(givenString, densityWord){
	let words = givenString.split(" ");
	let occurrenceCount = 0;
	
	for(let i=0; i<words.length; i++){
		if(words[i]===densityWord){
			 occurrenceCount++;
		}
	}
	return (occurrenceCount/words.length)*100; 	
}

let densityCal = wordDensity("hare krushna hare krushna krushna krushna hare hare, hare ram hare ram ram ram hare hare", "krushna");
document.write(densityCal);



document.write("<hr>");
document.write("<br>");


document.write("<h3>File Extension Extraction</h3>");

function getExt(file){
	
	
	
	if(file.includes(".")){
		let fileExt = file.split(".").pop();
		return fileExt;
 	}else{
		return "Null";
	}
}
 
document.write(getExt("index.html"));

document.write("<hr>");
document.write("<br>");






document.write("<h3>Removing Whitespace</h3>");

function removeWhitespace(givenString){
	 let noWhiteSpace = givenString.replace(/\s/g, ""); 
	 return noWhiteSpace;
}

document.write(removeWhitespace(" he  llo guy's "));
 
document.write("<hr>");
document.write("<br>");




document.write("<h3>Reversing Words</h3>");

let reverseString = " ";
function reverseWords(givenString){
	
	for(let i=givenString.length-1; i>=0; i--){
		 reverseString = reverseString + givenString[i];
	}
	document.write(reverseString);
}

reverseWords("Maharashtra");



document.write("<hr>");
document.write("<br>");




document.write("<h3>Counting Vowels</h3>");

function countVowels(givenString){
	let str1 = givenString.split("");
	let count = 0;
	for(let i=0; i<str1.length; i++){
		if(str1[i]==="a" || str1[i]==="e" || str1[i]==="i" || str1[i]==="o" || str1[i]==="u" || str1[i]==="A" || str1[i]==="E" || str1[i]==="I" || str1[i]==="O" || str1[i]==="U"){
			count++;
		}
	}
	document.write(count);
}

countVowels("Onkar Ramesh Londhe");


document.write("<hr>");
document.write("<br>");




document.write("<h3>String Palindrome Check</h3>");

function isPalindrome(givenString){
	 
	let reverseString = "";
	for(let i=givenString.length-1; i>=0; i--){
		reverseString = reverseString + givenString[i];
	}
	
	if(givenString === reverseString){
		document.write(`'${givenString}' is Palindrome.`);
	}else{
		document.write(`'${givenString}' is not Palindrome.`);
	}
}

isPalindrome("racecar");


document.write("<hr>");
document.write("<br>");




document.write("<h3>String Truncation</h3>");

function truncateString(givenString){
	let truncateString = givenString+"...";
	// let padStr = givenString.padEnd(givenString.length+5, ".");
	document.write(truncateString);
}

truncateString("Hello World");


document.write("<hr>");
document.write("<br>");




document.write("<h3>String Masking</h3>");

function maskString(givenString, addStars){
	
	let slice = givenString.slice(addStars);
	
	console.log(slice);
	 
	for(i=0; i<addStars; i++){
		slice =  "*"+ slice;
	}
	
	document.write(slice);
}

maskString("976050938473",8);


document.write("<hr>");
document.write("<br>");



document.write("<h3>Email Validation</h3>");

function validateEmail(givenEmail){
	
	let regex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/; 
	let emailValidation = givenEmail.match(regex);
	
	if(emailValidation!=null){
		return true;
	}else{
		return false;
	}
}

let result = validateEmail("onkar@gmail.com");
document.write(result);