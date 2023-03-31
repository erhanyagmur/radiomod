function tikla()
{
	var renk=["orange","yellow","pink","purple","green"];
	
	if(document.getElementById("a").checked==true){
		var rastgele=Math.floor(Math.random()*5);
		document.getElementsByTagName("p")[0].style.color=renk[rastgele];
	}
	if(document.getElementById("b").checked==true)
	{
		var rastgele=Math.floor(Math.random()*5);
		document.getElementsByTagName("p")[1].style.color=renk[rastgele];
	}
	if(document.getElementById("c").checked==true)
	{
		var rastgele=Math.floor(Math.random()*5);
		document.getElementById("ekran").style.backgroundColor=renk[rastgele];
	}
}