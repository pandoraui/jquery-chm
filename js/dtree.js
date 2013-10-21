$(function () {
$(".dtree > div h2").before("<a href='javascript:void(0)'><img src='img/plus.gif'></a><img src='img/folder.gif'>");
//$(".dtree > div:eq(1) a").before("<img src='img/join.gif'><img src='img/page.gif'>");
$(".dtree > div a img").last().attr("src","img/plusbottom.gif");
$(".dtree ul li a").before("<img src='img/line.gif'><img src='img/join.gif'><img src='img/page.gif'>");
$(".dtree > div").each(function(){
   var $id = $(this).attr("id");
   $("#"+$id+" li").last().children("img:eq(1)").attr("src","img/joinbottom.gif");
 });
$(".dtree > div:eq(-1) li").each(function(){
	$("img:eq(0)",this).attr("src","img/empty.gif");
});
$(".dtree > div > a").toggle(function(){
		var index =$(".dtree > div").index(this);
		if(index > 0){
			$("img",this).attr("src","img/minus.gif");
		}else{
			$("img",this).attr("src","img/minusbottom.gif");
		}
		$(this).nextAll("img").attr("src","img/folderopen.gif");
		$(this).nextAll("ul").show();
	},function(){
		var index =$(".dtree > div").index(this);//判断-1
		if(index > 0){
			$("img",this).attr("src","img/plus.gif");
		}else{
			$("img",this).attr("src","img/plusbottom.gif");
		}	
		$(this).nextAll("img").attr("src","img/folder.gif");
		$(this).nextAll("ul").hide();
	});
$(".dtree > div > h2").toggle(function(){
		var index =$(".dtree > div").index(this);
		if(index > 0){
			$(this).siblings("a").find("img").attr("src","img/minus.gif");
		}else{
			$(this).siblings("a").find("img").attr("src","img/minusbottom.gif");
		}
		$(this).siblings("img").attr("src","img/folderopen.gif");
		$(this).nextAll("ul").show();
	},function(){
		var index =$(".dtree > div").index(this);//判断-1
		if(index > 0){
			$(this).siblings("a").find("img").attr("src","img/plus.gif");
		}else{
			$(this).siblings("a").find("img").attr("src","img/plusbottom.gif");
		}		
		$(this).siblings("img").attr("src","img/folder.gif");
		$(this).nextAll("ul").hide();
	});
$(".dtree ul li a").attr("target","body");
$("#openAll").click(function(){
	$(".dtree div > a img").attr("src","img/minus.gif");
	$(".dtree div > img:eq(0)").attr("src","img/folderopen.gif");
	$(".dtree ul").show();
});
$("#closeAll").click(function(){
	$(".dtree div > a img").attr("src","img/plus.gif");
	$(".dtree div > img:eq(0)").attr("src","img/folder.gif");
	$(".dtree ul").hide();
});
//.dtree > div > h2
//$("#Other li:eq(0),#Other li:eq(0)").children("img:eq(0)").attr("src","img/empty.gif");
    $.ajax({
        url: 'js/data.txt',
        dataType: 'json'
    }).done(function (data) {
        var status = $('#selection'),
            countries = $.map(data, function (value) {
                return value;
            });

        $('#query').autocomplete({
			width:188,
            lookup: countries,
            onSelect: function (suggestion) {
                //status.html('You selected: ' + suggestion);
				var url = suggestion+".html";
				window.open(url,"body");
            }
        });
    });
	$('#query').keydown(function(e){ 
		if(e.keyCode==13){ 
			var soval = $("#query").val();
			if(soval){
				var url = soval+".html";
				window.open(url,"body");
			}
		} 
	})
	$("#butsoso").click(function(){
		var soval = $("#query").val();
		if(soval){
			var url = soval+".html";
			window.open(url,"body");
		}
	});
});