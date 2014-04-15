
$('#indexPage').live('pageshow', function(event,ui) {	
	$("#isSelect").click(function (e) { 
       //alert("FUCK ME");  
    });  
});

$('#qOne').live('pageshow',function(event, ui) {
	  
    $('#btnSelect').click(function (e) { 
    	sessionStorage.setItem('qOneAnswer', $('input:radio[name=qOneOptions]:checked').val() );
		//alert(sessionStorage.getItem('qOneAnswer'));  
		$.mobile.changePage("question2.html", { transition: "slide"});
	});    
});

$('#qTwo').live('pageshow',function(event, ui) {
    
	$("#btnSelect").click(function (e) {	
		sessionStorage.setItem('qTwoAnswer', $('input:radio[name=qTwoOptions]:checked').val() ); 
		//alert(sessionStorage.getItem('qTwoAnswer'));
		$.mobile.changePage("question3.html", { transition: "slide"});
	});   
});

$('#qThree').live('pageshow',function(event, ui) {
    
	$("#btnSelect").click(function (e) {	
		sessionStorage.setItem('qThreeAnswer', $('input:radio[name=qThreeOptions]:checked').val() ); 
		//alert(sessionStorage.getItem('qThreeAnswer'));
		$.mobile.changePage("question4.html", { transition: "slide"});
	});   
});

$('#qFour').live('pageshow',function(event, ui) {
    
	$("#btnSelect").click(function (e) {	
		sessionStorage.setItem('qFourAnswer', $('input:radio[name=qFourOptions]:checked').val() ); 
		//alert(sessionStorage.getItem('qFourAnswer'));
		$.mobile.changePage("question5.html", { transition: "slide"});
	});   
});

$('#qFive').live('pageshow',function(event, ui) {
    
	$("#btnSelect").click(function (e) {	
		sessionStorage.setItem('qFiveAnswer', $('input:radio[name=qFiveOptions]:checked').val() ); 
		//alert(sessionStorage.getItem('qFiveAnswer'));
		$.mobile.changePage("question6.html", { transition: "slide"});
	});   
});

$('#qSix').live('pageshow',function(event, ui) {
    
	$("#btnSelect").click(function (e) {	
		sessionStorage.setItem('qSixAnswer', $('input:radio[name=qSixOptions]:checked').val() ); 
		//alert(sessionStorage.getItem('qSixAnswer'));
		$.mobile.changePage("question7.html", { transition: "slide"});
	});   
});

$('#qSeven').live('pageshow',function(event, ui) {
    
	$("#btnSelect").click(function (e) {	
		sessionStorage.setItem('qSevenAnswer', $('input:radio[name=qSevenOptions]:checked').val() ); 
		//alert(sessionStorage.getItem('qSevenAnswer'));
		$.mobile.changePage("question8.html", { transition: "slide"});
	});   
});

$('#qEight').live('pageshow',function(event, ui) {
    
	$("#btnSelect").click(function (e) {	
		sessionStorage.setItem('qEightAnswer', $('input:radio[name=qEightOptions]:checked').val() ); 
		//alert(sessionStorage.getItem('qEightAnswer'));
		$.mobile.changePage("question9.html", { transition: "slide"});
	});   
});

$('#qNine').live('pageshow',function(event, ui) {
    
	$("#btnSelect").click(function (e) {	
		sessionStorage.setItem('qNineAnswer', $('input:radio[name=qNineOptions]:checked').val() ); 
		//alert(sessionStorage.getItem('qNineAnswer'));
		$.mobile.changePage("question10.html", { transition: "slide"});
	});   
});

$('#qTen').live('pageshow',function(event, ui) {
    
	$("#btnSelect").click(function (e) {	
		sessionStorage.setItem('qTenAnswer', $('input:radio[name=qTenOptions]:checked').val() ); 
		//alert(sessionStorage.getItem('qTenAnswer'));
		$.mobile.changePage("preResult.html", { transition: "slide"});
	});   
});

function GetCorrectAnswerCount(){
	var intVal = parseInt(sessionStorage.getItem('qOneAnswer')) + parseInt(sessionStorage.getItem('qTwoAnswer')) +
		parseInt(sessionStorage.getItem('qThreeAnswer')) + parseInt(sessionStorage.getItem('qFourAnswer')) +
		parseInt(sessionStorage.getItem('qFiveAnswer')) + parseInt(sessionStorage.getItem('qSixAnswer')) +
		parseInt(sessionStorage.getItem('qSevenAnswer')) + parseInt(sessionStorage.getItem('qEightAnswer')) +
		parseInt(sessionStorage.getItem('qNineAnswer')) + parseInt(sessionStorage.getItem('qTenAnswer'));    
	
	if (isNaN(intVal)) {
		return 0;
	}
	else {	
		return intVal;	
	}
} 

function GetResultGrade() {
	var result = GetCorrectAnswerCount();
	
	if (result == 10) {
		return 'A';
	}	
	else if (result < 10 && result >= 8) {
		return 'B';
	}
	else if (result < 8 && result >= 6) {
		return 'C';
	}
	else if (result < 6 && result >= 4) {
		return 'D';
	}
	else if (result < 4 && result >= 1) {
		return 'E';
	}
	else {
		return 'F';
	}
}
