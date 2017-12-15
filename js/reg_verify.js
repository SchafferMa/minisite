// JavaScript Document
var form=document.forms[0];
//var btnSubmit=form.getElementsByTagName("button")[0];
var only=true;
form.onsubmit=function()
{
	if(only==false)return false;
	var formGroup=form.getElementsByClassName("form-group");
	for(var i=0;i<formGroup.length-2;i++)
	{
		var formGroupCol=formGroup[i].getElementsByClassName("col-sm-10")[0];
		var inputTag=formGroupCol.getElementsByTagName("input");
		if(inputTag.length!=0)
		{
			var inputValue1=inputTag[0].value;
			var inputType=inputTag[0].type;	
			switch(inputType)
			{
			case "text":
				console.log(reg_vfy);
				reg_vfy(/^\w+$/,inputValue1,inputType);
				break;
			case "password":
				reg_vfy(/^[\w]{8,}/,inputValue1,inputType);
				break;
			case "email":
				reg_vfy(/^\w+@\w+\.\w+$/,inputValue1,inputType);
				break;
			case "tel":
				reg_vfy(/^\d{11}$/,inputValue1,inputType);
				break;
			case "radio":
				var n=0;
				for(var j=0;j<inputTag.length;j++)
				{
					if(inputTag[j].checked)n++;
				}
				if(n==0)
				{
					var createP=document.createElement("p");
					formGroupCol.appendChild(createP);
					var labelText=formGroup[i].firstElementChild.innerHTML;
					createP.innerHTML=labelText+"不能为空";
				}
				break
			case "checkbox":
				var n=0;
				for(var j=0;j<inputTag.length;j++)
				{
					if(inputTag[j].checked)n++;
				}
				if(n==0)
				{	
					var createP=document.createElement("p");
					formGroupCol.appendChild(createP);
					console.log(labelText);
					var labelText=formGroup[i].firstElementChild.innerHTML;
					createP.innerHTML=labelText+"不能为空";
				}
				break;
			default:
				break;
			}
		
		}
		else
		{//获取下拉菜单
			var selectTag=formGroupCol.getElementsByTagName("select")[0];
			var optionTag=selectTag.getElementsByTagName("option");
			if(selectTag.value==optionTag[0].innerHTML)
			{
				var createP=document.createElement("p");
				formGroupCol.appendChild(createP);
				var labelText=formGroup[i].firstElementChild.innerHTML;
				createP.innerHTML=labelText+"不能为空";
			}
		}
		
		function reg_vfy(regexp,input_value,inputType)
		{
		if(!input_value)
					{//没有输入值  就显示  不能为空
						var createP=document.createElement("p");
						formGroupCol.appendChild(createP);
						//console.log(createP.parentNode);
						var labelText=createP.parentNode.previousElementSibling.innerHTML;
						var	inputType=createP.previousElementSibling.type;
						return createP.innerHTML=inputType!="password"?labelText+"不能为空":labelText.substring(2)+"不能为空";
					}
					else
					{//有值
						var reg=regexp;
						var vfy=reg.exec(input_value);//vfy存在说明格式正确
						if(!vfy)
						{//格式不对
							var createP=document.createElement("p");
							formGroupCol.appendChild(createP);
							//console.log(createP.parentNode);
							var labelText=createP.parentNode.previousElementSibling.innerHTML;
							var	inputType=createP.previousElementSibling.type;
							return createP.innerHTML=inputType!="password"?labelText+"格式不正确":labelText.substring(2)+"格式不正确";
						}
						
					}	
					
		}
	}
	only=false;
	var getCreateP=form.getElementsByTagName("p");
	console.log(getCreateP);
	if(getCreateP.length!=0)return false;
		
}
form.onreset=function()
{
	window.location="Register.html";
}

