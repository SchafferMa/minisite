// JavaScript Document
var form=document.forms[0];
var user=form.user;
var psd=form.psd;
var repsd=form["re-psd"];
var email=form.email;
var tel=form.tel;
var adr=form.adr;
var sex=form.sex;
var hobby=form["hobby[]"];
var accept=form.accept;


form.onsubmit=function()
{
	if(user.value=="")
	{
		alert("用户名不能为空");
		return false;
	}
	else
	{
		var reg=/^\w+$/;
		if(!reg.test(user.value))
		{
			alert("用户名格式不正确");
			return false;
		}	
	}
	
	if(psd.value == '')
	{
		alert('密码不能为空');
		return false;
	}
	else
	{
		var reg = /^[\w]{8,}/;
		if(!reg.test(psd.value))
		{
			alert('密码格式不正确');
			return false;
		};
	};
	
	if(repsd.value != psd.value)
	{
		alert('两次密码输入不正确');
		return false;
	};
	
	if(email.value == '')
	{
		alert('邮箱不能为空');
		return false;
	}
	else
	{
		var reg = /^\w+@\w+\.\w+$/;
		if(!reg.test(email.value))
		{
			alert('邮箱格式不正确');
			return false;
		};
	};
	
	if(tel.value == '')
	{
		alert('电话不能为空');
		return false;
	}
	else
	{
		var reg = /^1[35789]\d{9}$/;
		if(!reg.test(tel.value))
		{
			alert('电话格式不正确');
			return false;
		};
	};
	
	if(adr.value == '请选择省份')
	{
		alert( adr.value );
		return false;
	};
	
	var sexFlag = false;
	for(var i=0;i<sex.length;i++)
	{
		if(sex[i].checked)
		{
			sexFlag = true;
		};
	}
	
	if(!sexFlag)
	{
		alert('请选择性别');
		return false;
	};
	
	var hobbyFlag = false;
	for(var i=0;i<hobby.length;i++)
	{
		if(hobby[i].checked)
		{
			hobbyFlag = true;
		};
	};
	
	if(!hobbyFlag)
	{
		alert('请选一个爱好吧');
		return false;
	};
	
	console.log("1");
	if(!accept.checked)
	{
		alert('请认真阅读协议');
		return false;
	};
}
