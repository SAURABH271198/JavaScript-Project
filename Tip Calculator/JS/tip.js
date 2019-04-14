
	var finalBill=document.getElementById("final_bill");
	var tip=document.getElementById("tip");
	
	 var tip1;


document.querySelector("#bill").addEventListener('input',function()
{
	var bill=parseInt(document.querySelector('#bill').value);
	if(bill<=500)
	{
		 tip1=(bill*0.2);
	}

	else if(bill>500&&bill<=1000)
	{
		 tip1=bill*0.1;
	}
	else
	{
		 tip1=bill*0.05;
	}
	if(isNaN(bill))
	{
		tip1=0;
	}
	
tip.value=tip1;
	
})

document.querySelector("#cal").addEventListener('click',function()

{
var bill=parseInt(document.querySelector('#bill').value);

 var noOfPerson=parseInt(document.getElementById("person").value);
 var final=(bill+tip1)/noOfPerson;
	finalBill.value=final;
});
