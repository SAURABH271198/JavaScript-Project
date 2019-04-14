// var fname,lname,email,psw,cpsw,address,pin,mobileNo,gender,bloodGroup,fname_err
// ,lname_err,psw_er,cpsw_err,mno_err,pin_err,add_err;
// // document.querySelector("#signup").addEventListener('click',function(){
//  fname=document.querySelector("#fname");
//  lname=document.querySelector("#lname");
//  email=document.querySelector("#email");
//  psw=document.querySelector("#psw");
//  cpsw=document.querySelector("#cpsw");
//  address=document.querySelector("#add");
//  pin=document.querySelector("#pin");
//  mobileNo=document.querySelector("#mno");
//  gender=document.querySelector("#gen");
//  bloodGroup=document.querySelector("#bgroup");
// psw.addEventListener('input',()=>{

// 	let my=document.querySelector('#psw_err');
// 	let get=psw_match(psw.value);
// 	// document.querySelector('').appendChild(my)
// 	if(get==true)
// 	{
// 		my.innerHTML="<font>Success</font>";
// 	}
// 	else
// 	{
// 		my.innerHTML="<font color='red'>Please Enter Correct Password</font>";
		
// 	}
	

// });







function name_match(name)
{
	var pattern=/^[a-zA-z]+$/i
	var result=pattern.test(name);
	if(result)
	{
		result=true;
	}
	else
	{
		result=false;
	}
	return result;
}


function psw_match(password)
{
	var pattern=/^[\d]{8,12}$/;
	var result=pattern.test(password);
	if(result)
	{
		result=true;
	}
	else
	{
		result=false;
	}
	return result
}

function add_match(address)
{
	var pattern=/^[\w\d\s]+$/i;
	var result=pattern.test(address);
	if(result)
	{
		result=true;
	}
	else
	{
		result=false;
	}
	return result;
}



function pin_match(pin)
{
	var pattern=/^[\d]{6}$/;
	var result=pattern.test(pin);

	if(result)
	{
		result=true;
	}
	else
	{
		result=false;
	}
	return result;
}

function mno_match(mobile)
{
	var pattern=/^[\d]{10}$/;

	var result=pattern.test(mobile);
	if(result)
	{
		result=true;
	}
	else
	{
		result=false;
	}
	return result;
}


document.querySelector('#fname').addEventListener('change',()=>
{
	let fname=parseInt(document.querySelector("#fname").value);
	let fname_err=document.getElementById('fname_err')
	let get=name_match(fname);
	if(get==true)
	{
		fname_err.innerHTML="<font color='green' class='green'>Correct</font>";
	}
	else
	{

		fname_err.innerHTML="<font color='red' class='red'>first nam should be Alphabetic</font>";
	}



})


document.querySelector('#add').addEventListener('change',()=>
{
	add=document.querySelector("#add").value;
	add_err=document.getElementById('add_err')
	let get=add_match(add);
	if(get==true)
	{
	add_err.innerHTML="<font color='green' class='green'>Correct</font>";
	}
	else
	{

	add_err.innerHTML="<font color='red' class='red'>Address Should be less than 60 charchter</font>";
	}



})

document.querySelector('#lname').addEventListener('change',()=>
{
	let lname=parseInt(document.querySelector("#lname").value);
	let lname_err=document.getElementById('lname_err')
	let get=name_match(lname);
	if(get==true)
	{
		lname_err.innerHTML="<font color='green' class='green'>Correct</font>";
	}
	else
	{

		lname_err.innerHTML="<font color='red' class='red'>last name shold be Alphabetic</font>";
	}



})


document.querySelector('#psw').addEventListener('change',()=>
{
	let psw=parseInt(document.querySelector("#psw").value);
	let psw_err=document.getElementById('psw_err')
	let get=psw_match(psw);
	if(get==true)
	{
		psw_err.innerHTML="<font color='green' class='green'>Correct</font>";
	}
	else
	{

		psw_err.innerHTML="<font color='red' class='red'>password should be in digit and its length 8 to 12</font>";
	}



})


document.querySelector('#cpsw').addEventListener('change',()=>
{
	let cpsw=parseInt(document.querySelector("#cpsw").value);
	let cpsw_err=document.getElementById('cpsw_err')
	let get=psw_match(cpsw);
	if(get==true)
	{
		cpsw_err.innerHTML="<font color='green' class='green'>Correct</font>";
	}
	else
	{

		cpsw_err.innerHTML="<font color='red' class='red'>password should be in digit and its length 8 to 12</font>";
	}



})

document.querySelector('#mno').addEventListener('change',()=>
{
	let mno=parseInt(document.querySelector("#mno").value);
	let mno_err=document.getElementById('mno_err')
	let get=mno_match(mno);
	if(get==true)
	{
		mno_err.innerHTML="<font color='green' class='green'>Correct</font>";
	}
	else
	{

		mno_err.innerHTML="<font color='red' class='red'>Please Enter Correct 10 Digit Mobile Number</font>";
	}



})

document.querySelector('#pin').addEventListener('change',()=>
{
	let pin=parseInt(document.querySelector("#pin").value);
	let pin_err=document.getElementById('pin_err')
	let get=pin_match(pin);
	if(get==true)
	{
		pin_err.innerHTML="<font color='green' class='green'>Correct</font>";
	}
	else
	{

		pin_err.innerHTML="<font color='red' class='red'>pin should be only 6 digit</font>";
	}



})