$(document).ready(function(){$(".js-social-signup form").each(function(){var $this=$(this);$($this).validate({rules:{firstname:"required",lastname:"required",email:{required:true,email:true},question:{maxlength:0}},showErrors:function showErrors(errorMap,errorList){if(this.numberOfInvalids()>0){$this.find(".errors").html("Please fill in the required fields.");$this.find(".errors").show();$this.find(".item-input").css({"background-color":"#F5E6E6","border":"2px solid #AE3C39"});$this.find(".item-input[aria-invalid\x3d'false']").removeAttr("style");
$this.find(".social-signup--link-icons").hide()}else{$this.find(".errors").hide();$this.find(".errors").html("");$this.find(".item-input").removeAttr("style");$this.find(".social-signup--link-icons").show()}},submitHandler:function submitHandler(form){$this.find(".errors").html("Submitting...");$this.find(".errors").show();$.ajax({crossDomain:true,async:false,type:$(form).attr("method"),url:$(form).attr("action"),data:$(form).serialize(),dataType:"json",success:function success(data,_success){if(data.success==
"true"){var dataLayerOb={event:"formInteraction"};var form$0={"action":"submitted","name":"Newsletter signup","inputField":"","newsLetterSignup":true,"giftAidApplied":false,"allowMarketing":document.cookie.match(new RegExp("(^| )"+"nhm-marketing"+"\x3d([^;]+)"))[2]==="1"};Object.assign(dataLayerOb,{form:form$0});var dataLayerEvent=new CustomEvent("dataLayerEvent",{detail:dataLayerOb});document.querySelector("body").dispatchEvent(dataLayerEvent);window.location.href=data.thankyouURL}else{$this.find(".errors").html(data.errorMessage);
$this.find(".errors").show();$this.find(".social-signup--link-icons").hide()}},error:function error(jqxhr,textStatus,_error){$this.find(".errors").html("There has been an error and we cannot subscribe you to the newsletter at this time.");$this.find(".errors").show();$this.find(".social-signup--link-icons").hide()}});return false}})});$(".social-signup--input-container").each(function(){var social=$(this);if(window.outerWidth<750)social.addClass("js-social-signup--small");else if(window.outerWidth<
780)if(social.context.offsetWidth<300)social.addClass("js-social-signup--small");else if(social.context.offsetWidth<500)social.addClass("js-social-signup--medium");else social.addClass("js-social-signup--large");else if(window.outerWidth<1050)if(social.context.offsetWidth<350)social.addClass("js-social-signup--small");else if(social.context.offsetWidth<700)social.addClass("js-social-signup--medium");else social.addClass("js-social-signup--large");else if(social.context.offsetWidth<400)social.addClass("js-social-signup--small");
else if(social.context.offsetWidth<800)social.addClass("js-social-signup--medium");else social.addClass("js-social-signup--large")})});