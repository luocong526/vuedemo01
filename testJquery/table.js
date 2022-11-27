$(function(){
			$.ajax({
				type:"GET",
				url:"http://localhost:8080/Ajaxd01/userListController.do",
				dataType:"jsonp",
				jsonp:"callback",
				success:function(userlist){
					//后端返回的是json字符串 前端需要转换为json对象
					var userl=$.parseJSON(userlist);
					$.each(userl,function(index,item){
						console.log(item.upname);
						console.log(item.uid);
						var appendString="<tr class='active'><td><input type='checkbox' name='ckdata' id='ckdata' value='"+item.uid+"'/></td>";
						appendString=appendString+"<td>"+(index+1)+"</td>";
						appendString=appendString+"<td>"+item.upname+"</td>";
						appendString=appendString+"<td>"+item.urname+"</td>";
						appendString=appendString+"<td>"+item.uphone+"</td>";
						appendString=appendString+"<td>"+item.uaddr+"</td>";
						appendString=appendString+"<td>"+item.uhobby+"</td>";
						appendString=appendString+"<td>"+item.uemail+"</td>";
						appendString=appendString+"<td><input type='button' name='del' id='del' value='删除' onclick='del("+item.uid+")' /></td>";
						appendString=appendString+"<td><input type='button' name='upd' id='upd' value='修改' onclick='upd("+item.uid+")' /></td>"
						appendString=appendString+"</tr>";
						console.log(appendString);
						$("#tb").append($(appendString));
					})
				},
				error:function(XmlHttpRequest, textStatus, errorThrown){
					alert("error: ");
				}
			});
		})
		//删除方法
		function del(uid){
			var flag=window.confirm("确定吗？");
			if(flag){
				$.ajax({
					type:"post",
					url:"http://localhost:8080/Ajaxd01/userDelController.do",
					data:"uid="+uid,
					dataType:"jsonp",
					jsonp:"callback",
					success:function(info){
						alert(info);
					},
					error:function(){
						alert("ERROR");
					}
				})
				window.location.reload();
			}
		}
		//修改方法
		function upd(uid){
			location.href="updUser.html?uid="+uid;
		}
		//新增方法
		function add(){
			location.href="addUser.html";
		}
		
		function checkfun(){
			if($("input[name='ckdata']").attr("checked")){
				$("input[name='ckdata']").attr("checked",false);
			}else{
				$("input[name='ckdata']").attr("checked",true);
			}
		}
		