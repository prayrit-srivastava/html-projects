function over()
{
	var x=document.getElementById("writes");
	x.style.backgroundColor="grey";

}
function click()
{
	var y=document.getElementById("exit");
	y.innerHTML="shanti se padh";
	alert()
}
function validation(){
	var x = getElementByname("email")[0].value;
	var atindex = x.lengthOf('@');
	var dotindex = x.lastIndexOf('.');
	alert("hi");
	 return =true;
	 if(atindex<1||dotindex-atindex<3||dotindex>=(atindex -2))
	 	return=false;
	 return(result);
}
/*		alert("you have to be a hostler to understand this feeling");

var x;
x=prompt("are you sure");
if(x==no)
	exit;
function seeyousoon(){
	document.write("see you soon");
}
function hover(){
	var z=document.getElementById("writes");
 	z.style.backgroundColor="grey";
*/
