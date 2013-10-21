$(function () {
	$(".dtree").height($(window).height());
	$(".dtree h2").click(function(){
/*		if($(this).hasClass("up")){
			$(this).siblings("ol").slideUp("fast").removeClass("up");
		}else{
			$(this).siblings("ol").slideDown('fast').addClass("up");
		}*/
		if($(this).hasClass("up")){
			$(this).siblings("ol").slideUp("fast");
			$(this).removeClass("up");
		}else{
			$(".dtree ol").slideUp("fast");
			$(".dtree h2").removeClass("up");
			$(this).siblings("ol").slideDown('fast');
			$(this).addClass("up");
		}
	});
$("#openAll").click(function(){
	$(".dtree ol").show();
	$(".dtree h2").addClass("up");
});
$("#closeAll").click(function(){
	$(".dtree ol").hide();
	$(".dtree h2").removeClass("up");
});

$(".dtree li").on('click','a', function() {
	$(".dtree li a.up").removeClass("up");
	$(this).addClass("up");
	//$(this).attr("href","javascript:void(0)");
	//var thisHref = $(this).attr(href);
});

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
				//alert(suggestion);
				var url = suggestion+".html";
				$("#gdt").append('<div id=conview><div class=background></div><iframe id='+'iframe_over'+' src='+url+'></iframe></div>');
				$("#conview").delay(300).fadeIn("slow");
				$("#gdt").addClass("gdtovh");
				window.history.pushState(null, null,url);
				e.preventDefault();
				$(document).on("change","#query",function(){
					$("#iframe_over").css("top",$(document).scrollTop());
				});	
				window.addEventListener('popstate', function(e) { 
					$('#conview').remove();
			　　　　$("#right").load(location.pathname); 
			 　　});						
            }
        });
    });
	$('#query').keydown(function(e){ 
		if(e.keyCode==13){ 
			var soval = $("#query").val();
			if(soval){
				var url = soval+".html";
				//window.open(url,"body");
				$("#gdt").append('<div id=conview><div class=background></div><iframe id='+'iframe_over'+' src='+url+'></iframe></div>');
				$("#conview").delay(300).fadeIn("slow");
				$("#gdt").addClass("gdtovh");			
			window.history.pushState(null, null,url);
			e.preventDefault();
			//$("#iframe_over").css("top",$(document).scrollTop());
			}
		} 
	})
/*	$("#butsoso").click(function(){
		var soval = $("#query").val();
		if(soval){
			var url = soval+".html";
			//window.open(url,"body");
			$("#gdt").addClass("gdtovh");
			$("#gdt").append('<div id=conview><div class=background></div><iframe id='+'iframe_over'+' src='+url+'></iframe></div>');			
			window.history.pushState(null, null,url);
			e.preventDefault();
			//$("#iframe_over").css("top",$(document).scrollTop());
		}
	});*/

});