$(".icon").click(function() {
	$(".icon").not(this).removeClass("icon-active");
	$(this).toggleClass("icon-active");
});

$("#ux").click(function() {

	if ($("#ux").hasClass("icon-active"))
	{
		$(".project").not(".tag-ux").hide(function() {
			$(this).appendTo(".hidden-projects");
		});
		$(".tag-ux").appendTo(".projects-wrap");
		$(".tag-ux").show("fast");
	}
	else {
		$(".project").appendTo(".projects-wrap");
		$(".project").show("fast");
	}
	
});

$("#design").click(function() {

	if ($("#design").hasClass("icon-active"))
	{
		$(".project").not(".tag-design").hide(function() {
			$(this).appendTo(".hidden-projects");
		});
		$(".tag-design").appendTo(".projects-wrap");
		$(".tag-design").show("fast");
	}
	else {
		$(".project").appendTo(".projects-wrap");
		$(".project").show("fast");
	}
	
});

$("#dev").click(function() {

	if ($("#dev").hasClass("icon-active"))
	{
		$(".project").not(".tag-dev").hide(function() {
			$(this).appendTo(".hidden-projects");
		});
		$(".tag-dev").appendTo(".projects-wrap");
		$(".tag-dev").show("fast");
	}
	else {
		$(".project").appendTo(".projects-wrap");
		$(".project").show("fast");
	}
	
});

// alert($(".project").hasClass("tag-ux"));
