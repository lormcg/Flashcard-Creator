//BASIC CARD -------
//basic card is a constructor for a basic flash card:
// question on the front, answer on the back
function BasicCard(front, back) {
	this.front = front;
	this.back = back;
}

//CLOZE CARD -------
/*Cloze card is a constructor for a fill-in-the-blank question.
user will submit the full text and the section they want to remove.
*/

function ClozeCard (fullText, cloze) {
	this.fullText = fullText;
	this.cloze = cloze;
}

/*the partial sentence for the cloze card will be created by searching the full 
text for the cloze and replacing it with '...'
If the submitted cloze does not exist, it will return an error. 
*/

ClozeCard.prototype.partialSearch = function() {
		//searching the full text for the cloze phrase
		//storing the index of the start of the cloze in a variable
		var clozeStart = this.fullText.indexOf(this.cloze);

		//-1 means the cloze phrase does not appear in the full text.
		//so, this displays an error if the phrase is not found
		//otherwise the cloze is removed to create the partial phrase
		 if (clozeStart == -1) {
		 	console.log('Text not found!');
		 } else {	
		 	this.partial = this.fullText.replace(this.cloze, '...');
		 }
}		 


var brokenQuestion = new ClozeCard('This is going to break', 'yes');
var workingQuestion = new ClozeCard('This will not break', 'will not');

workingQuestion.partialSearch();

console.log (workingQuestion);

