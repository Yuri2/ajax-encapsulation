//作者：一陀牛屎
function ajax(ajson){
	var xhr=window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject('Microsoft.XMLHTTP');	
	var method=ajson.method||'get',
		url=ajson.url,
		ayan=ajson.ayan||true,
		data=ajson.data||'',
		success=ajson.success,
		error=ajson.error;
		if(method.toLowerCase()=='get'){
			url+='?'+data+new Date().getTime();	
		}
		xhr.open(method ,url,ayan);
		xhr.setRequestHeader('content-type' , 'application/x-www-form-urlencoded');
		xhr.send(data);
		xhr.onreadystatechange=function(){
			if(xhr.readState==4){
				success&&success( xhr.responseText );
			}else{
				error&&error();
			}
		}
}
// ajax调 用 内 容 格 式。。。
/*ajax({
	'method':'post',
	'url':'abc.php',
	'ayan':true,
	'data':'123456',
	'success':function(){},
	'error':function(){}
	});*/
