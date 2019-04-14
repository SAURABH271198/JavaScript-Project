var result=document.querySelector("#result");

document.querySelector("#seven").addEventListener('click',function()
{

	if(result.value==0)
	{
		result.value=parseInt(document.querySelector("#seven").value);
	}
	else
	{
	result.value+=parseInt(document.querySelector("#seven").value);
	}
	


});

document.querySelector("#eight").addEventListener('click',function()
{
	if(result.value==0)
	{
		result.value=parseInt(document.querySelector("#eight").value);
	}
	else
	{
	result.value+=parseInt(document.querySelector("#eight").value);
	}

});

document.querySelector("#nine").addEventListener('click',function()
{
	if(result.value==0)
	{
		result.value=parseInt(document.querySelector("#nine").value);
	}
	else
	{
	result.value+=parseInt(document.querySelector("#nine").value);
	}

});

document.querySelector("#mul").addEventListener('click',function()
{



	result.value+=document.querySelector("#mul").value;
	

	



});

document.querySelector("#six").addEventListener('click',function()
{
	if(result.value==0)
	{
		result.value=parseInt(document.querySelector("#six").value);
	}
	else
	{
	result.value+=parseInt(document.querySelector("#six").value);
	}

});
document.querySelector("#four").addEventListener('click',function()
{
	if(result.value==0)
	{
		result.value=parseInt(document.querySelector("#four").value);
	}
	else
	{
	result.value+=parseInt(document.querySelector("#four").value);
	}
});
document.querySelector("#five").addEventListener('click',function()
{
	if(result.value==0)
	{
		result.value=parseInt(document.querySelector("#five").value);
	}
	else
	{
	result.value+=parseInt(document.querySelector("#five").value);
	}

});
document.querySelector("#min").addEventListener('click',function()
{

	result.value+=(document.querySelector("#min").value);

});


document.querySelector("#three").addEventListener('click',function()
{
	if(result.value==0)
	{
		result.value=parseInt(document.querySelector("#three").value);
	}
	else
	{
	result.value+=parseInt(document.querySelector("#three").value);
	}
});
document.querySelector("#two").addEventListener('click',function()
{
	if(result.value==0)
	{
		result.value=parseInt(document.querySelector("#two").value);
	}
	else
	{
	result.value+=parseInt(document.querySelector("#two").value);
	}

});
document.querySelector("#one").addEventListener('click',function()
{
	if(result.value==0)
	{
		result.value=parseInt(document.querySelector("#one").value);
	}
	else
	{
	result.value+=parseInt(document.querySelector("#one").value);
	}

});
document.querySelector("#plus").addEventListener('click',function()
{

	result.value+=document.querySelector("#plus").value;

});
document.querySelector("#zero").addEventListener('click',function()
{

	result.value+=parseInt(document.querySelector("#zero").value);

})

document.querySelector("#modulus").addEventListener('click',function()
{

	result.value+=document.querySelector("#modulus").value;

});


document.querySelector("#equal").addEventListener('click',function()
{

	var exp=eval(result.value);
	result.value=exp;

});

document.querySelector("#sqrt").addEventListener('click',function()
{

	var root1=Math.sqrt(result.value);
	result.value=root1;

});
document.querySelector("#cancel").addEventListener('click',function()
{

	result.value=0;

});
document.querySelector("#dot").addEventListener('click',function()
{

	result.value+=document.querySelector("#dot").value;

});

document.querySelector("#pow").addEventListener('click',function()
{

	result.value=Math.pow(parseInt(result.value),2);

});

document.querySelector("#onebyx").addEventListener('click',function()
{

	result.value=1/parseInt(result.value);

});

document.querySelector("#clear").addEventListener('click',function()
{

	var sub=result.value;
	var sub1=sub.toString();
	result.value=sub1.substring(0,sub1.length-1);

});
document.querySelector("#plusm").addEventListener('click',function()
{

		if(parseInt(result.value)>0)
		{
			result.value=-(result.value);
		}
		else if(parseInt(result.value)<0)
		{
			result.value=-(result.value);
		}
		else
		{
			result.value=parseInt(0);
		}

});