
document.write("<h3>Capitalizing Words</h3>");


let str = "hello guy's i am onkar.";
 
 function capitalizeWords() {
    let words = str.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
		
    }
    document.write(words.join(" "));
}

capitalizeWords();
 
document.write("<hr>");
document.write("<br>");

document.write("<h3>Capitalizing Each Word</h3>");
 
function capitalizeAll(){
	let str1 = "hello world...!";
	let word1 = str1.split(" ");
	
	for(let i=0; i<word1.length; i++){
		word1[i] = word1[i].toUpperCase();
	}
	document.write(word1.join(" "));
}

capitalizeAll();

document.write("<hr>");
document.write("<br>");


document.write("<h3>Word Existence Check</h3>");


function isExist(){
	
	let str3 = "jay hind jay maharashtra";
	
	let exist = str3.includes("maharashtra");
	
	if(exist){
		document.write("it is a part of string");
	}else{
		document.write("it is not a part of string");	
	}
}

isExist();
 
 
document.write("<hr>");
document.write("<br>");

