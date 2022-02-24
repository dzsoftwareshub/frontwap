// login request modal
$(document).ready(function(){
	$(".request-login-modal").click(function(e){
		e.preventDefault();
		$("#signup-modal").modal("hide");
		$("#login-modal").modal("show");
	});
});

// request signup modal
$(document).ready(function(){
	$(".request-signup-modal").click(function(e){
		e.preventDefault();
		$("#signup-modal").modal("show");
		$("#login-modal").modal("hide");
	});
});
