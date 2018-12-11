var toggleSt = true;

$(function(){
	
	timer();
	intro();

	setInterval(function(){timer();},1000)

	$("#toggleBtn").click(function(){
		if(toggleSt == true){
			$(this).addClass("on");
			toggle();
			$("#nav").css("display","block");
			$(".navSub").css("display","block");
			$("header").stop().animate({height:280},400);
			$(".navSub").stop().delay(400).animate({height:230},300);
			$(".shadow").css("display","block");
			$(".shadow").stop().animate({opacity:1},300);
			toggleSt = false;
			console.log(toggleSt*5);
		}else{
			$(this).removeClass("on");
			toggle();
			$("header").stop().delay(400).animate({height:50},400,function(){
				$("#nav").css("display","none")
			});
			$(".navSub").stop().animate({height:0},300,function(){
				$(".navSub").css("display","none")
			});
			$(".shadow").stop().animate({opacity:0},400,function(){
				$(".shadow").css("display","none");
			});
			toggleSt = true;
			console.log(toggleSt*5);
		}
	});

	$(".basket_btn").click(function(){
		var dataSt = $(this).parent("li").attr("data-state");		

		if(dataSt == "true"){
			$(this).css("backgroundColor","#1ec878");
			$(this).parent("li").css("borderColor","#1ec878");
			$(this).parent("li").attr("data-state","false");
		}else{
			console.log(dataSt);
			$(this).css("backgroundColor","#ddd");
			$(this).parent("li").css("borderColor","#ddd");
			$(this).parent("li").attr("data-state","true");
		} //장바구니 체크버튼 스크립트
	})

});

function intro(){
	var k =0;
	for(var i=7; i>0; i--){
		$("#intro>ul>li").eq(i).delay(500*k).animate({opacity:0},200);
		k++
		if(k == 6){
			$("#intro").delay(4500).animate({opacity:0},800,function(){
				$("#intro").css("display","none")
			})
		}
	}
};

function timer(){
	var today = new Date();
	var nowHours = today.getHours();
	var nowMinutes = today.getMinutes();	
	if(nowHours < 10) nowHours = "0"+nowHours;
	if(nowMinutes < 10) nowMinutes = "0"+nowMinutes;	
	$(".preTime").html(nowHours+":"+nowMinutes);
};

function toggle(){
	$("#nav>li").each(function(index){
		$(this).delay(200*toggleSt).delay(200*index*toggleSt).animate({right:22*toggleSt,opacity:1*toggleSt},400);
	});
};




