// requesting signup modal
$(document).ready(function(){
	$("#request-signup-modal").click(function(e){
		e.preventDefault();
		$("#login-modal").modal("hide");
		$("#signup-modal").modal("show");
	});
});


// requesting login modal
$(document).ready(function(){
	$("#request-login-modal").click(function(e){
		e.preventDefault();
		$("#signup-modal").modal("hide");
		$("#login-modal").modal("show");
	});
});

// signup
$(document).ready(function(){
	$("#signup-form").submit(function(e){
		e.preventDefault();

		$.ajax({
			type : "POST",
			url : "api/signup",
			data : new FormData(this),
			processData : false,
			contentType : false,
			success : function(response){
				console.log(response);
			}
		});
	});
});