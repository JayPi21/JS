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
let PP = calculatePP(bhavas);

function calculatePL(bhavas,PP)
{
    let myArr = [];
    myArr = bhavas.filter(element=>element.SL=="");
    let arr2 = [];
    PP.forEach(element => {
     let arr3= myArr.map((element2)=>{
         if(element.includes(element2.PL) || element.includes(element2.NL) || element.includes(element2.PSU) || element.includes(element2.SSL))  
         return element2.PL;
         else return "";

            
        }) 
        let filtered = arr3.filter(x=> x!="");
      arr2.push(filtered);  
    });
    return arr2;

}
let PL = calculatePL(bhavas,PP);
function printtable(bhavas,PP,PL)
{   console.log(`B No\tNo P\t\tPP\t\t\t\t\t\tPL`)
    for(let i=0;i<12;i++)
     {

        console.log(`${i+1}\t\t${PL[i].length}\t\t${PP[i]}\t\t\t${PL[i]}`);
     }
}
printtable(bhavas,PP,PL);
// console.log(PL[5]);