var quiz="";
var quizList = [
	{	
		name: "question1",
		question: "1. What city is the capital of China?",
		answer: "Beijing",
		choices: ["Beijing","Tokyo","Manila"]
	},
	{
		name: "question2",
		question: "2. What is the largest lake in Africa?",
		answer: "Victoria",
		choices: ["Kivu","Chad","Victoria","Malwi"]
	},
	{
		name: "question3",
		question: "3. Which ocean trench is the deepest?",
		answer: "Mariana",
		choices: ["Tonga","Kermadec","Mariana","Java"]
	},
	{
		name: "question4",
		question: "4. Canada's highest mountain is located in which province or territory?",
		answer: "Yukon",
		choices: ["Alberta","Quebec","Ontario","Yukon"]
	},
	{
		name: "question5",
		question: "5. How many times zones are in Canada?",
		answer: "Six",
		choices: ["Five","Six","Seven","Eight"]
	},
	{
		name: "question6",
		question: "6. What is the capital city of Australia?",
		answer: "Canberra",
		choices: ["Canberra","Columbus","Burma"]
	},
	{
		name: "question7",
		question: "7. In what country would you find Mount Kilimanjaro?",
		answer: "Tanzania",
		choices: ["Tanzania","Zambia","Angola","Ethiopia"]
	},
	{
		name: "question8",
		question: "8. Which city is located both in Asia and Europe continent?",
		answer: "Istanbul",
		choices: ["Bursa","Ankara","Izmir","Istanbul"]
	},
	{
		name: "question9",
		question: "9. Which is the largest desert in the world?",
		answer: "Sahara",
		choices: ["Thar","Gobi","Sahara","Namib"]
	},
	{
		name: "question10",
		question: "10. First US zoo was built in?",
		answer: "Philadelphia",
		choices: ["Philadelphia","Phoenix","Los-Angeles","San-Diego"]
	}
];

function displayQuestions(){

	for(var i=0; i<quizList.length; i++){

		var multipleChoice ="";

		for(var key in quizList[i].choices)
			multipleChoice += "<br><input name="+quizList[i].name+" type='radio' value="+quizList[i].choices[key]+">&emsp;"+quizList[i].choices[key];   

		quiz += "<span class='question'>"+quizList[i].question+"</span>"+multipleChoice+"<hr>";
	}
	$(".quiz-form").append(quiz);
	$('.form').show();
	$('.map-image').hide();	
	$('#start').hide();
}

function checkAnswer(){
	var correctCount = 0;
	var val = "";
	var ans = "";
	for(var i=0; i<quizList.length; i++){

		if($("input[name='"+quizList[i].name+"']:checked")){
			val = $("input[name='"+quizList[i].name+"']:checked").attr("value");
			ans = $("input[name='"+quizList[i].name+"']:checked").attr(quizList[i].answer);
			console.log($("input[name='"+quizList[i].name+"']:checked").val());
			if(val === ans)
				correctCount++;
		}else{
			val = $("input[name='"+quizList[i].name+"']:checked").attr("value","noanswer");
			console.log("uncheck"+val);
		}
	}
	console.log(correctCount);
}

$(document).ready(function() {
	$('.form').hide();
	$("#start").click(displayQuestions);

	$("#submit").click(checkAnswer);


});
