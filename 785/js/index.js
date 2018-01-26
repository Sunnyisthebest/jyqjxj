// JavaScript Document
$(function(){
	$(".news .right .con .tab li").click(function(){
		$(".news .right .con .tab li").removeClass("cur");
		$(this).addClass("cur");
	})
	/*$(".news .right .con .tab .toright").click(function(){
		var s =$(".news .right .con .tab li").index($(".news .right .con .tab .cur"));
		$(".news .right .con .tab li").removeClass("cur");
		s=s+1;
		if(s>2)
		{
			s=0;
		}
		$(".news .right .con .tab li:eq("+s+")").addClass("cur");
	})*/
	
	
	var i=0;
	var twid=0;/*li总高*/
	var s=$(".news_box li").length;
	twid=30*s/180;
	twid=Math.ceil(twid)-1;
	$(".prev").click(function(){
		if(i==0)
		{
			i=twid+1;
		}
		i=i-1;
		$(".news_box ul").animate({"top":-180*i})
	})
	$(".next").click(function(){
		if(i==twid)
		{
			i=-1;
		}
		i=i+1;
		$(".news_box ul").animate({"top":-180*i})
	})


})