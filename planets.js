let bhavas  = [{
    bNo : 1,
    SL  : "Ju",
    DAL : "Su",
    BHL : "Ra",
    ANL : "Ra",
    DEG : [269.38,273.85],
    PL  : "Ke",
    PSL : "Sa",
    NL  : "Su",
    PSU : "Sa",
    SSL : "Ve"},{
        bNo : 2,
        SL  : "Sa",
        DAL : "Ma",
        BHL : "Me",
        ANL : "Sa",
        DEG : [301.77],
        PL  : "", PSL : "", NL  : "",PSU : "",SSL : ""},
        {
            bNo : 3,
            SL  : "Ju",
            DAL : "Sa",
            BHL : "Me",
            ANL : "Ke",
            DEG : [335.82,8.04],
            PL  : "Mo",
            PSL : "Ma",
            NL  : "Ke",
            PSU : "Ju",
            SSL : "Sa"},
            {
                bNo : 4,
                SL  : "Ma",
                DAL : "Ke",
                BHL : "Ju",
                ANL : "Sa",
                DEG : [8.05],
                PL  : "", PSL : "",NL  : "",PSU : "",SSL : ""},
                {
                    bNo : 5,
                    SL  : "Ve",
                    DAL : "Su",
                    BHL : "Me",
                    ANL : "Ju",
                    DEG : [36.61],
                    PL  : "", PSL : "",NL  : "",PSU : "",SSL : ""},
                    {
                        bNo : 6,
                        SL  : "Me",
                        DAL : "Ma",
                        BHL : "Ve",
                        ANL : "Ve",
                        DEG : [62.79],
                        PL  : "", PSL : "",NL  : "",PSU : "",SSL : ""},
                        {
                            bNo : 7,
                            SL  : "Me",
                            DAL : "Ju",
                            BHL : "Su",
                            ANL : "Ve",
                            DEG : [89.38,93.85],
                            PL  : "Ra",
                             PSL : "Mo",
                             NL  : "Sa",
                             PSU : "Sa",
                             SSL : "Me"},
                             {
                                bNo : 8,
                                SL  : "Su",
                                DAL : "Ke",
                                BHL : "Ve",
                                ANL : "Ra",
                                DEG : [121.77,122.50],
                                PL  : "Ma",
                                 PSL : "Su",
                                 NL  : "Ke",
                                 PSU : "Ve",
                                 SSL : "Sa"},
                                 {
                                    bNo : 9,
                                    SL  : "Me",
                                    DAL : "Su",
                                    BHL : "Me",
                                    ANL : "Su",
                                    DEG : [155.82,170.33,177.27,177.35,186.29],
                                    PL  : ["Sa","Ju","Su","Me"],
                                     PSL : ["Me","Me","Me","Ve"],
                                     NL  : ["Mo","Ma","Ma","Ma"],
                                     PSU : ["Ke","Ju","Ju","Mo"],
                                     SSL : ["Sa","Ve","Su","Me"]},
                                     {
                                        bNo : 10,
                                        SL  : "Ve",
                                        DAL : "Ra",
                                        BHL : "Ra",
                                        ANL : "Ve",
                                        DEG : [188.05],
                                        PL  : "",
                                         PSL : "",NL  : "",PSU : "",SSL : ""},
                                         {
                                            bNo : 11,
                                            SL  : "Ma",
                                            DAL : "Sa",
                                            BHL : "Me",
                                            ANL : "Ra",
                                            DEG : [216.61,222.45],
                                            PL  : "Ve",
                                             PSL : "Ma",
                                             NL  : "Sa",
                                             PSU : "Ma",
                                             SSL : "Sa"},
                                             {
                                                bNo : 12,
                                                SL  : "Ju",
                                                DAL : "Ke",
                                                BHL : "Ve",
                                                ANL : "Me",
                                                DEG : [242.79],
                                                PL  : "", PSL : "",NL  : "",PSU : "",SSL : ""}
                
    
    
    
    
    ];

let PP=[];
for(let i=0;i<12;i++)
{
    let temp=[];
    if(!temp.includes(bhavas[i].DAL))
    {
        temp.push(bhavas[i].DAL);
    }
    if(!temp.includes(bhavas[i].BHL))
    {
        temp.push(bhavas[i].BHL);
    }
    if(Array.isArray(bhavas[i].PL))
    {
         for(let j=0;j<bhavas[i].PL.length;j++)
          {
            if(!temp.includes(bhavas[i].PL[j]))
            {
                temp.push(bhavas[i].PL[j]);
            }
          }
    }
    else if(bhavas[i].PL==="" && !temp.includes(bhavas[i].ANL))
    {
        temp.push(bhavas[i].ANL)
    }
    else
    {
        temp.push(bhavas[i].PL);
    }
    PP.push(temp);
}
function print()
{   console.log(`Bhava No.\tPrimary Planets`)
    for(let i=0;i<PP.length;i++)
     {
         console.log(` ${i+1} \t\t ${PP[i]}`);
         }
}
print();