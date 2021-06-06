import bhavas from "/bhavasdata.js";
function calculatePP(bhavas)
 {let PP = [];
 for(let i=1;i<=12;i++)
 {  let newArr,Arr=[];
     newArr=bhavas.filter(element=>element.bNo==i);
     Arr.push(newArr[0].DAL);
     if(newArr[0].DAL!=newArr[0].BHL)
     Arr.push(newArr[0].BHL);
     if(!Arr.includes(newArr[0].ANL))
     Arr.push(newArr[0].ANL);
     if(newArr.length>=2)
     {    for(let j=1;j<newArr.length;j++)
          if(!Arr.includes(newArr[j].PL))
           Arr.push(newArr[j].PL);
      }
    
  PP.push(Arr);
 }
return PP;}


function calculatePL(bhavas,PP)
{
    
    let arr2 = [];
    let myArr = [];
    myArr = bhavas.filter(element=>element.PL!="");
    PP.forEach(element => {
     let arr3= myArr.map((element2)=>{
         if(element.includes(element2.PL) 
         || element.includes(element2.NL) 
         || element.includes(element2.PSU) 
         || element.includes(element2.SSL))  
         return element2.PL;
         else return "";

            
        }).filter(x=> x!=""); 
        // let filtered = arr3.filter(x=> x!="");
      arr2.push(arr3);  
    });
    return arr2;

}

 let PP = calculatePP(bhavas);
 let PL = calculatePL(bhavas,PP);

const table = document.querySelector("table");

const insertData = function (i,x,PP,PL, table) {
	const markup = `
	<tr>
		<td>${i}</td>
		<td>${x}</td>
		<td>${PP}</td>
		<td>${PL}</td>
	</tr>
	`;
	table.insertAdjacentHTML("beforeend", markup);
};

for(let i=1;i<=12;i++)
{   let y=i-1;
    insertData(i,PL[y].length,PP[y],PL[y],table);
}