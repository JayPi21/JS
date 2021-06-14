import bhavas from "/bhavasdata.js";
function calculatePP(bhavas)
 {let PP = [];
 for(let i=1;i<=12;i++)
 {  let newArr,Obj={};
     newArr=bhavas.filter(element=>element.bNo==i);
     Obj[newArr[0].DAL]=true;
     if(newArr[0].DAL!=newArr[0].BHL)
     Obj[newArr[0].BHL]=true;
     if(Obj[newArr[0].ANL]!=true)
     Obj[newArr[0].ANL]=true;
     if(newArr.length>=2)
     {    for(let j=1;j<newArr.length;j++)
          if(Obj[newArr[j].PL]!=true)
           Obj[newArr[j].PL]=true;
      }
    
  PP.push(Obj);
 }
return PP;}
//calculatePP(bhavas);


function calculatePL(bhavas,PP)
{
    
    let arr2 = [];
    let myArr = [];
    myArr = bhavas.filter(element=>element.PL!="");
    
    PP.forEach(element => {
     let arr3= myArr.map((element2)=>{
         if(element[element2.PL]==true
         || element[element2.NL]==true 
         || element[element2.PSU]==true 
         || element[element2.SSL]==true)  
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


const table = document.querySelector("#bhavas");

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
    let PParray = Object.keys(PP[y]);
    insertData(i,PL[y].length,PParray,PL[y],table);
}