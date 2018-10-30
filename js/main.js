var toggleSt = true;

$(function(){
	
	timer();	
	setInterval(function(){timer();},1000)

	$("#toggleBtn").click(function(){
		if(toggleSt == true){
			$(this).addClass("on");
			$("header").stop().animate({height:280},500);
			$(".shadow").stop().delay(300).animate({opacity:1},400);
			toggleSt = false;
		}else{
			$(this).removeClass("on");
			$("header").stop().animate({height:50},500);
			$(".shadow").stop().animate({opacity:0},400);
			toggleSt = true;
		}

	});
})

function timer(){
	var today = new Date();
	var nowHours = today.getHours();
	var nowMinutes = today.getMinutes();
	
	if(nowHours.length < 10) nowHours = "0"+nowHours;
	if(nowMinutes.length < 10) nowMinutes = "0"+nowMinutes;
	
	$(".preTime").html(nowHours+":"+nowMinutes);
};

function toggle(){

};




