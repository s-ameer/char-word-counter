import { useState,useEffect } from"react";

function Cwcounter()
{
	const[text,setText]=useState("");
	const[ans,setAns]=useState("");

	const hText=(event)=>{
		setText(event.target.value);
		}
	const count=()=>{
		let cc=text.length;
		let wc=text.split(" ").length;
		if(cc==0)
			wc=0;
		let msg="cc= "+cc+" wc= "+wc;
		setAns(msg);
			}
	useEffect( ()=>{count()},[text]);

	return(
	<>
		<center>
		<h1>Char Word Counter</h1>
		<form>
			<textarea placeholder="Enter text here" rows={5} cols={40} 
			onChange={hText}></textarea>
		
		</form>
		<h1>{ans}</h1>
		</center>
	</>
	);

}
export default Cwcounter;