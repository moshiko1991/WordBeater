window.addEventListener('load', init);

//difficult levels
var levels = 5;
	
function easy(){
	levels = 5;
	console.log("1");
}

function medium(){
	levels = 3;
	console.log("2");
}

function hard(){
	levels = 2;
    console.log("3");
}

const levelList = levels;


//properties:

let time = levels;
let score = 0;
let isPaying;

//documents:

const userTap = document.querySelector('#userTap');
const correntWord = document.querySelector('#correntWord');
const timeDisplay = document.querySelector('#timeDisplay');
const scoreDispaly = document.querySelector('#scoreDispaly');
const massage = document.querySelector('#massage');
const seconds = document.querySelector('#seconds');


const words = [
'about',
'all',
'developer',
'documents',
'ase',
'atmosphere',
'because',
'butterfly',
'can',
'come',
'could',
'day',
'even',
'find',
'first',
'for',
'from',
'get',
'give',
'have',
'hebrew',
'here',
'infected',
'mushroom',
'interface',
'java',
'javascript',
'just',
'know',
'like',
'looking',
'man',
'many',
'more',
'new york',
'no',
'not',
'now',
'people',
'something',
'take',
'telephone',
'than',
'that',
'the',
'their',
'them',
'then',
'there',
'these',
'they',
'thing',
'think',
'this',
'those',
'time',
'to',
'two',
'up',
'use',
'very',
'want',
'way',
'we',
'well',
'what',
'when',
'which',
'who',
'will',
'with',
'would',
'year',
'you',
'your',
];

//Main Functions:

//words randum
function init() {

//load words from array
	showWord(words); 

//word match(start match statment)
userTap.addEventListener('input', startMatch);	

//countdown seconds (in milliseconds)
setInterval(countdoun, 1000);

//game status:
setInterval(statusCheck, 50);

}


//start match function
function startMatch(){
	if(wordMatch()){
		console.log("match");
//start count again		
		isPaying = true;
		time = levels + 1;
		showWord(words);
		userTap.value = '';
		score++;
	}
	scoreDispaly.innerHTML = score;
}

//word are match function
function wordMatch(){
	if(userTap.value === correntWord.innerHTML){
		massage.innerHTML = "Good Job";
		return true;
	}else {
		massage.innerHTML = "";
		return false;
	}
}

//randum word & show
function showWord(words){
	//random array:
	const randomWord = Math.floor(Math.random() * words.length);  
	correntWord.innerHTML = words[randomWord]; 

}

//countdown function
function countdoun(){
	//run out condition
	if(time > 0){
		time--;
	}else if(time === 0) {
		// if true Game Over; (isPlayng var false)
		isPaying = false;
	}

	//time view
	timeDisplay.innerHTML = time;
	
}

//status check function
function statusCheck(){
	if(!isPaying && time === 0){
		massage.innerHTML = 'Game Over!';
		score = 0;
	}
}





