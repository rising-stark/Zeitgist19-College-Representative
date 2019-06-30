var fname,lname,college,email,contact,chkbox,whyca,anyexp;
$(document).ready(function(){
	var tooltipFname,tooltipLname,tooltipCollege,tooltipEmail,tooltipContact,tooltipWhy;
	fname=0;
	lname=1;
	college=0;
	email=0;
	contact=0;
	whyca=0;
	chkbox=0;
	anyexp=1;
	/*$('#fnameimg').on('click',function(){
		$(this).trigger('mouseover');
		$(this).trigger('mouseenter');
		$(this).trigger('hover');
	});*/
	$('input:not(#college)').keypress(function(e){
		if(e.which==32){
			return false;
		}
	});
	var regExpcontact = /[0-9]/;
	  $('[name="contact"]').on('keydown keyup blur focus', function(e) {
	    var value =e.key;
	    /*var ascii=value.charCodeAt(0);
	    $('textarea').append(ascii);
	    $('textarea').append(value);
	    console.log(e);*/
	    // Only numbers
	    if (!regExpcontact.test(value)
	      && e.which != 8   // backspace
	      && e.which != 46  // delete
	      && (e.which < 37  // arrow keys
	        || e.which > 40)) {
	          e.preventDefault();
	          return false;
	    }
	  });
	  $('[name="contact"]').on('keypress', function(e) {
		  if($('[name="contact"]').val().length >9){
		    	e.preventDefault();
		    }
	  });
	
	  var regExpFname = /[a-zA-Z]/;
	  $('[name="fname"]').on('keydown keyup blur focus', function(e) {
	    var value =e.key;
	    /*var ascii=value.charCodeAt(0);
	    $('textarea').append(ascii);
	    $('textarea').append(value);
	    console.log(e);*/
	    // Only numbers
	    if (!regExpFname.test(value)
	      && e.which != 8   // backspace
	      && e.which != 46  // delete
	      && (e.which < 37  // arrow keys
	        || e.which > 40)) {
	          e.preventDefault();
	          return false;
	    }
	  });
	  
	  $('[name="fname"]').on('keypress', function(e) {
		  if($('[name="fname"]').val().length >39){
		    	e.preventDefault();
		    }
	  });
	  
	  var regExpCollege = /^[a-zA-Z ]*$/;
	  $('[name="college"]').on('keydown keyup blur focus', function(e) {
	    var value =e.key;
	    /*var ascii=value.charCodeAt(0);
	    $('textarea').append(ascii);
	    $('textarea').append(value);
	    console.log(e);*/
	    // Only numbers
	    if (!regExpCollege.test(value)
	      && e.which != 8   // backspace
	       && e.which != 32   // space
	      && e.which != 46  // delete
	      && (e.which < 37  // arrow keys
	        || e.which > 40)) {
	          e.preventDefault();
	          return false;
	    }
	  });
	  
	  $('[name="college"]').on('keypress', function(e) {
		  if($('[name="fname"]').val().length >80){
		    	e.preventDefault();
		  }
	  });

	  var regExpLname = /[a-zA-Z]/;
	  $('[name="lname"]').on('keydown keyup blur focus', function(e) {

	    var value =e.key;
	    /*var ascii=value.charCodeAt(0);
	    $('textarea').append(ascii);
	    $('textarea').append(value);
	    console.log(e);*/
	    // Only numbers
	    if (!regExpLname.test(value)
	      && e.which != 8   // backspace
	      && e.which != 46  // delete
	      && (e.which < 37  // arrow keys
	        || e.which > 40)) {
	          e.preventDefault();
	          return false;
	      }
	  });
	  
	  $('[name="lname"]').on('keypress', function(e) {
		  if($('[name="lname"]').val().length >39){
		    	e.preventDefault();
		    }
	  });
	  // To allow only alphanumeric
	  /*var regExpWhy = /^[a-zA-Z0-9]+$/;
	  $('[name="whyca"]').on('keydown keyup blur focus', function(e) {
	    var value =e.key;
	    /*var ascii=value.charCodeAt(0);
	    $('textarea').append(ascii);
	    $('textarea').append(value);
	    console.log(e);
	    // Only numbers
	    if (!regExpWhy.test(value)
	      && e.which != 8   // backspace
	      && e.which != 32   // space
	      && e.which != 46  // delete
	      && (e.which < 37  // arrow keys
	        || e.which > 40)) {
	          e.preventDefault();
	          return false;
	    }
	  });*/
	  /*var regExpWhy2 = /^[^\s]([ ]{2,})[^\s]/;
	  $('[name="whyca2"]').on('keydown keyup blur focus', function(e) {
	    var value =e.key;
	    /*var ascii=value.charCodeAt(0);
	    $('textarea').append(ascii);
	    $('textarea').append(value);
	    console.log(e);
	    // Only numbers
	    if (!regExpWhy2.test(value)
	      && e.which != 8   // backspace
	      && e.which != 32   // space
	      && e.which != 46  // delete
	      && (e.which < 37  // arrow keys
	        || e.which > 40)) {
	          e.preventDefault();
	          return false;
	    }
	  });*/
	
	  $('input').on('keyup keydown keypress', function() {
		  if($(this).val().length==0){
			  var displayTooltip = "Please fill out this field";
			  var name = $(this).attr("name");
			  $(this).attr('title', displayTooltip);
			  if(name=="fname")
				  fname=0;
			  else if(name=="lname")
				  lname=1;
			  else if(name=="college")
				  college=0;
			  else if(name=="contact")
				  contact=0;
			  else if(name=="email")
				  email=0;
			  $('#'+name+'img').attr("src","img/wrong.png");
			  $('#'+name+'img').prop("alt", "wrong");
			  $('#'+name+'img').attr("hidden",true);
			  $('#'+name+'img').attr('title', displayTooltip);
		  }
	  });
	  $('[name="whyca"]').on('keyup keydown keypress', function() {
		  if($(this).val().length==0){
			  var displayTooltip = "Please fill out this field";
			  var name = $(this).attr("name");
			  $(this).attr('title', displayTooltip);
			  if(name=="whyca")
				  whyca=0;
			  $('#'+name+'img').attr("src","img/wrong.png");
			  $('#'+name+'img').prop("alt", "wrong");
			  $('#'+name+'img').attr("hidden",true);
			  $('#'+name+'img').attr('title', displayTooltip);
		  }
	  });
	  setInterval(checkbox,0);
	  function checkbox(){
		  if($('[name="chkbox"]').is(":checked")){
			  chkbox=1;
		  }
		  else{
			  chkbox=0;
		  }
	  }
	  $('[name="fname"]').on('focus blur mouseleave scroll',function(){
		  if($('[name="fname"]').val().length > 1){
			  fname=1;
			  tooltipFname="Accepted";
			  $('#fnameimg').attr("src","img/tick.png");
			  $('#fnameimg').prop("alt", "tick");
			  $('#fnameimg').attr("hidden",false);
		  }
		  else if($('[name="fname"]').val().length ==1){
			  fname=0;
			tooltipFname="Names are not of single letter";
			$('#fnameimg').attr("src","img/wrong.png");
			$('#fnameimg').prop("alt", "wrong");
			$('#fnameimg').attr("hidden",false);
		  }
		else{
			fname=0;
			tooltipFname="Please fill out this field";
			$('#fnameimg').attr("src","img/wrong.png");
			$('#fnameimg').prop("alt", "wrong");
			$('#fnameimg').attr("hidden",true);
		}
		  $('[name="fname"]').attr('title', tooltipFname);
		  $('#fnameimg').attr('title', tooltipFname);
	  });
	  $('[name="lname"]').on('focus blur mouseleave scroll',function(){
		  if($('[name="lname"]').val().length > 1){
				lname=1;
				tooltipLname="Accepted";
				$('#lnameimg').attr("src","img/tick.png");
				$('#lnameimg').prop("alt", "tick");
				$('#lnameimg').attr("hidden",false);
			}
			else if($('[name="lname"]').val().length ==1){
			  lname=1;
			tooltipLname="Names are not of single letter";
			$('#lnameimg').attr("src","img/wrong.png");
			$('#lnameimg').prop("alt", "wrong");
			$('#lnameimg').attr("hidden",false);
		  }
			else{
				lname=1;
				tooltipLname="Please fill out this field";
				$('#lnameimg').attr("src","img/wrong.png");
				$('#lnameimg').prop("alt", "wrong");
				$('#lnameimg').attr("hidden",true);
			}
		  $('[name="lname"]').attr('title', tooltipLname);
		  $('#lnameimg').attr('title', tooltipLname);	
	  });
	  $('[name="college"]').on('focus blur mouseleave scroll',function(){
		  if($('[name="college"]').val().length > 4){
				college=1;
				tooltipCollege="Accepted";
				$('#collegeimg').attr("src","img/tick.png");
				$('#collegeimg').prop("alt", "tick");
				$('#collegeimg').attr("hidden",false);
			}
			else if($('[name="college"]').val().length > 0){
				college=0;
				tooltipCollege="Not a College name";
				$('#collegeimg').attr("src","img/wrong.png");
				$('#collegeimg').prop("alt", "wrong");
				$('#collegeimg').attr("hidden",false);
			}
			else{
				college=0;
				tooltipCollege="Please fill out this field";
				$('#collegeimg').attr("src","img/wrong.png");
				$('#collegeimg').prop("alt", "wrong");
				$('#collegeimg').attr("hidden",true);
			}
		  $('[name="college"]').attr('title', tooltipCollege);
		  $('#collegeimg').attr('title', tooltipCollege);	
	  });
		$('[name="email"]').on('focus blur mouseleave scroll',function(){
			var emailid=$('[name="email"]').val();
			var reg = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
			if(emailid.length>0){
				if(reg.test(emailid)){
					email=1;
					tooltipEmail = "Accepted";
					$('#emailimg').attr("src","img/tick.png");
					$('#emailimg').prop("alt", "tick");
					$('#emailimg').attr("hidden",false);
				}
				else{
				    email=0;
					tooltipEmail = "The email id "+emailid+" is not a valid email id";
					$('#emailimg').attr("src","img/wrong.png");
					$('#emailimg').prop("alt", "wrong");
					$('#emailimg').attr("hidden",false);
				}
			}
			else{
				email=0;
				tooltipEmail = "Please fill out this field";
				$('#emailimg').attr("src","img/wrong.png");
				$('#emailimg').prop("alt", "wrong");
				$('#emailimg').attr("hidden",true);
			}
			$('[name="email"]').attr('title', tooltipEmail);
				$('#emailimg').attr('title', tooltipEmail);
		});
		$('[name="contact"]').on('focus blur mouseleave',function(){
			var contactnumber=$('[name="contact"]').val();
			if(contactnumber.length>0){
				if(contactnumber.length<10){
					contact=0;
					tooltipcontact = "The contact number "+contactnumber+" is invalid. It should be a 10 digit number";
					$('#contactimg').attr("src","img/wrong.png");
					$('#contactimg').prop("alt", "wrong");
					$('#contactimg').attr("hidden",false);
				}
				else{
					contact=1;
					tooltipcontact = "Accepted";
					$('#contactimg').attr("src","img/tick.png");
					$('#contactimg').prop("alt", "tick");
					$('#contactimg').attr("hidden",false);
					/*$.ajax({
					type: 'POST',
					data:{
						contactnumber: contactnumber,
						action: 'validExistWorkingcontact'
					},
					url: 'Registration1',
					cache:false,
					success: function(result){
						if(result==3){
							contact=1;
							tooltipcontact = "Accepted";
							$('#contactimg').attr("src","img/tick.png");
							$('#contactimg').prop("alt", "tick");
							$('#contactimg').attr("hidden",false);
						}
						else if(result==2){
							contact=0;
							tooltipcontact = "The contact number "+contactnumber+" is not a valid contact number";
							$('#contactimg').attr("src","img/wrong.png");
							$('#contactimg').prop("alt", "wrong");
							$('#contactimg').attr("hidden",false);
						}
						else if(result==1){
							contact=0;
							$('#contactimg').attr("src","img/wrong.png");
							$('#contactimg').prop("alt", "wrong");
							$('#contactimg').attr("hidden",false);
							alert("The contact number "+contactnumber+" is not working/active");
						}
						else{
							contact=0;
							tooltipcontact = "The contact number "+contactnumber+" is already associated with another account";
							$('#contactimg').attr("src","img/wrong.png");
							$('#contactimg').prop("alt", "wrong");
							$('#contactimg').attr("hidden",false);
						}
						$('[name="contact"]').attr('title', tooltipcontact);
						$('#contactimg').attr('title', tooltipcontact);
					}
				});*/
				}
			}
			else{
				contact=0;
				tooltipcontact = "Please fill out this field";
				$('#contactimg').attr("src","img/wrong.png");
				$('#contactimg').prop("alt", "wrong");
				$('#contactimg').attr("hidden",true);
			}
			$('[name="contact"]').attr('title', tooltipcontact);
			$('#contactimg').attr('title', tooltipcontact);
		});
		/*$('[name="address"]').on('focus blur mouseleave',function(){
			$('[name="address"]').attr('title', tooltipAddress);
			$('#addressimg').attr('title', tooltipAddress);
		});*/
		$('[name="whyca"]').on('focus blur mouseleave scroll',function(){
		    if($('[name="whyca"]').val().trim().length > 35){
				whyca=1;
				tooltipWhy="Accepted";
				$('#whycaimg').attr("src","img/tick.png");
				$('#whycaimg').prop("alt", "tick");
				$('#whycaimg').attr("hidden",false);
			}
			else if($('[name="whyca"]').val().length > 0){
				whyca=0;
				tooltipWhy="Minimum 10 words required";
				$('#whycaimg').attr("src","img/wrong.png");
				$('#whycaimg').prop("alt", "wrong");
				$('#whycaimg').attr("hidden",false);
			}
			else{
				whyca=0;
				tooltipWhy="Please fill out this field";
				$('#whycaimg').attr("src","img/wrong.png");
				$('#whycaimg').prop("alt", "wrong");
				$('#whycaimg').attr("hidden",true);
			}
		  $('[name="whyca"]').attr('title', tooltipWhy);
		  $('#whycaimg').attr('title', tooltipWhy);	
	    });
	setInterval(Grow, 0);
	function Grow(){
        if($('[name="btnREGISTER"]').is(':disabled') == false){
    	    $('[name="btnREGISTER"]').on('focus mouseenter mouseover',function(){
    	        $('[name="btnREGISTER"]').removeClass("grow");
        	});
        	$('[name="btnREGISTER"]').on('mouseleave mouseout',function(){
        	    $('[name="btnREGISTER"]').addClass("grow");
    	    });
    	}
    	else{
    	    $('[name="btnREGISTER"]').removeClass("grow");
    	}
	}
	setInterval(Check, 300);
	function Check(){
        /*
        console.log("fname "+fname);
        console.log("lname "+lname);
        console.log("email "+email);
        console.log("college "+college);
        console.log("contact "+contact);
        console.log("anyexp "+anyexp);
        console.log("whyca "+whyca);*/
		if(fname==1 && lname==1 && college==1 && email==1 && contact==1 && whyca==1 && anyexp==1 && chkbox==1){
		    $('[name="btnREGISTER"]').removeClass("btn-danger");
		    if($('[name="btnREGISTER"]').is(':disabled') == true){
        	    $('[name="btnREGISTER"]').addClass("grow btn-success");
        	}
			$('[name="btnREGISTER"]')[0].disabled=false;
		}
		else if(fname==0 || lname==0 || college==0 || email==0 || contact==0 || whyca==0 || anyexp==0 || chkbox==0){
			$('[name="btnREGISTER"]').removeClass("btn-success");
			$('[name="btnREGISTER"]').addClass("btn-danger");
			$('[name="btnREGISTER"]')[0].disabled=true;
		}
	}
	function reset(){console.log("RESET clicked");
		fname=0;lname=1;contact=0;email=0;whyca=0;anyexp=1;college=0;chkbox=0;
		$('input[type=text],textarea').val("");
		var idarray=['#fname','#lname','#contact','#college','#email','#whyca'];
		for(i=0;i<idarray.length;i++){
			var tooltip = "Please fill out this field";
			$(idarray[i]+'img').attr("src","img/wrong.png");
			$(idarray[i]+'img').prop("alt", "wrong");
			$(idarray[i]+'img').attr("hidden",true);
			$(idarray[i]).attr('title', tooltip);
			$(idarray[i]+'img').attr('title', tooltip);
		}
		$('[name="chkbox"]').prop("checked", false);
	}
	$('#success-alert button').on('click touch',function(){
	    $("#success-alert").fadeOut(500);
	});
	$('[name="btnREGISTER"]').click(function(){
	    $('[name="btnREGISTER"]').removeClass("grow");
	    $('[name="btnREGISTER"]').addClass("btn-success");
		$('[name="btnREGISTER"]')[0].disabled=true;
		$('.three').fadeIn(100).delay(4500).fadeOut(500);
		$.ajax ({
        url : "gsign/signin.php",
        method: "POST",
        dataType: "json",
        data: {
        	fname:$('[name="fname"]').val(),
        	lname:$('[name="lname"]').val(),
        	email:$('[name="email"]').val(),
        	contact:$('[name="contact"]').val().trim(),
        	college:$('[name="college"]').val(),
        	whyca:$('[name="whyca"]').val().trim(),
        	anyexp:$('[name="anyexp"]').val().trim()
        },
        success: function(data) {
            console.log("inside success function");
            console.log(data.result);
            console.log(data.status1);
            console.log(typeof(data.status1));
        	if(data.status1==="sent"){
        	    console.log(data.result1);
        	    $("#success-alert").removeClass();
        	    $("#success-alert").addClass('alert alert-success');
                $("#success-alert").css({"border": "2px seagreen solid",
                    "box-shadow": "2px 2px 2px 5px #0064003d"
                });
        	    $("#success-alert h6").html(data.result);
        	    $("#success-alert").delay(2000).fadeIn(500);
        	    reset();
        	}
        	else if(data.status1==="already"){
        	    console.log(data.result1);
        	    $("#success-alert").removeClass();
        	    $("#success-alert").addClass('alert alert-warning');
                $("#success-alert").css({"border": "2px #d39e00 solid",
                    "box-shadow": "2px 2px 2px 5px #fff3cda6"
                });
        	    $("#success-alert h6").html(data.result);
        	    $("#success-alert").delay(4000).fadeIn(500);
        	}
        	else if(data.status1==="error"){
        	    console.log(data.result1);
        	    $("#success-alert").removeClass();
        	    $("#success-alert").addClass('alert alert-danger');
                $("#success-alert").css({"border": "2px #dc3545 solid",
                    "box-shadow": "2px 2px 2px 5px #f8d7da61"
                });
        	    $("#success-alert h6").html(data.result);
        	    $("#success-alert").delay(3000).fadeIn(500);
        	}
        },
        error: function(error) {
            console.log(error);
            $("#success-alert").removeClass();
        	    $("#success-alert").addClass('alert alert-danger');
                $("#success-alert").css({"border": "2px #dc3545 solid",
                    "box-shadow": "2px 2px 2px 5px #f8d7da61"
                });
        	    $("#success-alert h6").html(error);
        	    $("#success-alert").delay(3000).fadeIn(500);
        }
      });
		/*console.log("fname "+$('[name="fname"]').val());
        console.log("lname "+$('[name="lname"]').val());
        console.log("email "+$('[name="email"]').val());
        console.log("college "+$('[name="college"]').val());
        console.log("contact "+$('[name="contact"]').val());
        console.log("anyexp "+$('[name="anyexp"]').val());
        console.log("whyca "+$('[name="whyca"]').val());*/
	});
});