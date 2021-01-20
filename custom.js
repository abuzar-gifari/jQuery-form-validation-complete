function addClass(id){
	$("#"+id).addClass("red error_icon");
}

function removeClass(id){
	$("#"+id).removeClass("red error_icon");
}

function addMessage(id){
	$("#"+id).html(" required");
}

function removeMessage(id){
	$("#"+id).html("");
}


$(document).ready(function(){
	//Year part
	var start_year = 1900;
	var end_year = 2021;
	$("#year").append("<option value='0'>Year</option>");
	for(start_year;start_year<=end_year;start_year++){
		$("#year").append("<option value='"+start_year+"'>"+start_year+"</option>");
	}
	//Day part 
	var start_day = 1;
	var end_day = 31;
	$("#day").append("<option value='0'>Day</option>");
	for(start_day;start_day<=end_day;start_day++){
		$("#day").append("<option value='"+start_day+"'>"+start_day+"</option>");
	}
	//Year And Day Part Close;
	
	$("#submit").click(function(){
		
		var error = 0;
		var fname = $("#f_name").val();
		var lname = $("#l_name").val();
		var email = $("#email").val();
		var male = $("#male").is(":checked");
		var female = $("#female").is(":checked");
		var year = $("#year option:selected").val();
		var day = $("#day option:selected").val();

		removeClass("f_name");
		removeMessage("e_fname");
		
		removeClass("l_name");
		removeMessage("e_lname");
		
		removeClass("email");
		removeMessage("e_email");
		
		removeMessage("e_gender");
		
		removeClass("year");
		removeMessage("e_year");
		
		removeClass("day");
		removeMessage("e_day");
		
		
		if(fname == ""){
			addClass("f_name");
			addMessage("e_fname");
			error = error + 1;
		}
		
		if(lname == ""){
			addClass("l_name");
			addMessage("e_lname");
			error += 1;
		}
		
		if(email == ""){
			addClass("email");
			addMessage("e_email");
			error += 1;
		}
		
		if(male == false && female == false){
			addMessage("e_gender");
			error += 1;
		}
		
		if(year == 0){
			addClass("year");
			addMessage("e_year");
			error += 1;
		}
		
		if(day == 0){
			addClass("day");
			addMessage("e_day");
			error += 1;
		}
		
	});
	
});
