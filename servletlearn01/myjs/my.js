$(function(){
	$.ajax({
		url:"http://localhost:8080/servletlearn08/ProviceServlet",
		type:"post",
		data:"",
		success:function(d){
			alert(d)
		},
		error:function(){
			
		},
		dataType:"json"
	})
})