$(function(){
	$("#loginform").validate({
		rules:{
			upname:{
				required:true,
				rangelength:[6,12]
				
			},
			upwd:{
				required:true,
				rangelength:[6,12]
			}
		},
		messages:{
			upname:{
				required:"用户名不能为空！",
				rangelength:"用户名长度必须在6-12位之间"
			},
			upwd:{
				required:"密码不能为空！",
				rangelength:"密码长度必须在6-12位之间"
			}
		},
		onfocusout: function(element) {
			$(element).valid();
		},
		submitHandler:function(form){
			$.ajax({
				type: 'GET',
				url: "http://localhost:8080/Ajaxd01/userController.do?",
				dataType:"jsonp",
				jsonp:"aaa",
				data:"upname="+$("#upname").val()+"&"+"upwd="+$("#upwd").val(),
				success: function(info){
					if(info=="pwdRight"){
						location.href="table.html";
					}else{
						$("#ltips").text("用户名或密码错误!");
						$("#ltips").css("color","red");
					}
				},
				error: function(XmlHttpRequest, textStatus, errorThrown){
						alert("ERROR");
				}
			});
		}
	});
	
})

