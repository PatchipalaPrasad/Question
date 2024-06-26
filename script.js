

// 



let units=Number(prompt("Enter Total units:"));
// one unit charge is 10Rs

if(units<=100)
{
    let totalBill=500+((5/100)*units)*10;
    alert("Total Bill is:"+totalBill);
}
else if(units>100 && units<=500)
{
        let totalBill=1200+((7.5/100)*units)*10;
        alert("Total Bill is:"+totalBill);
}
else if(units>500 && units<=750)
{
        let totalBill=1500+((9.5/100)*units)*10;
        alert("Total Bill is:"+totalBill);
 }
else if(units>750 && units<=1000)
{
        let totalBill=2000+((11.2/100)*units)*10;
        alert("Total Bill is:"+totalBill);
}
else
{
    let totalBill=2200+((12/100)*units)*10;
        alert("Total Bill is:"+totalBill);
}