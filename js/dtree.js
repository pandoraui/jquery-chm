$(function() {
	$(".dtree h2").click(function() {
		/*		if($(this).hasClass("up")){
			$(this).siblings("ol").slideUp("fast").removeClass("up");
		}else{
			$(this).siblings("ol").slideDown('fast').addClass("up");
		}*/
		if ($(this).hasClass("up")) {
			$(this).siblings("ol").slideUp("fast");
			$(this).removeClass("up");
		} else {
			$(".dtree ol").slideUp("fast");
			$(".dtree h2").removeClass("up");
			$(this).siblings("ol").slideDown('fast');
			$(this).addClass("up");
		}
	});
	$("#openAll").click(function() {
		$(".dtree ol").show();
		$(".dtree h2").addClass("up");
	});
	$("#closeAll").click(function() {
		$(".dtree ol").hide();
		$(".dtree h2").removeClass("up");
	});

	$(".dtree li").on('click', 'a', function() {
		$(".dtree li a.up").removeClass("up");
		$(this).addClass("up");
		//$(this).attr("href","javascript:void(0)");
		//var thisHref = $(this).attr(href);
	});


	$.ajax({
		url: 'js/data.txt',
		dataType: 'json'
	}).done(function(data) {
		var status = $('#selection'),
			countries = $.map(data, function(value) {
				return value;
			});

		$('#query').autocomplete({
			width: 188,
			lookup: countries,
			onSelect: function(suggestion) {
				//status.html('You selected: ' + suggestion);
				var url = suggestion + ".html";
				$("#J_right").attr("src", url);
				window.history.pushState(null, null, url);
				$(".dtree li a.up").removeClass("up");
				$(".dtree ol").hide();
				$(".dtree h2").removeClass("up");
				$('.dtree li a[href="' + url + '"]').parents("ol").show();
				$('.dtree li a[href="' + url + '"]').parents("ol").siblings("h2").addClass("up");
				$('.dtree li a[href="' + url + '"]').addClass("up");
			}
		});
	});
	$('#query').keydown(function(e) {
		if (e.keyCode == 13) {
			var soval = $("#query").val();
			if (soval) {
				var url = soval + ".html";
				$("#J_right").attr("src", url);
				window.history.pushState(null, null, url);
				$(".dtree li a.up").removeClass("up");
				$(".dtree ol").hide();
				$(".dtree h2").removeClass("up");
				$('.dtree li a[href="' + url + '"]').parents("ol").show();
				$('.dtree li a[href="' + url + '"]').parents("ol").siblings("h2").addClass("up");
				$('.dtree li a[href="' + url + '"]').addClass("up");
			}
		}
	})
	$("#butsoso").click(function() {
		var soval = $("#query").val();
		if (soval) {
			var url = soval + ".html";
			$("#J_right").attr("src", url);
			window.history.pushState(null, null, url);
			$(".dtree li a.up").removeClass("up");
			$(".dtree ol").hide();
			$(".dtree h2").removeClass("up");
			$('.dtree li a[href="' + url + '"]').parents("ol").show();
			$('.dtree li a[href="' + url + '"]').parents("ol").siblings("h2").addClass("up");
			$('.dtree li a[href="' + url + '"]').addClass("up");
		}
	});

});