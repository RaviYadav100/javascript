let date=new Date()
console.log(date.toString());
console.log(date.toDateString());
console.log(date.toLocaleDateString());

// --------------------------------------------------------------------------
let createDate=new Date(2024 ,3 ,30)
let createDate1=new Date(2024 ,3 ,30 ,11 ,45)
let createDate2=new Date("2024-03-11")
let createDate3=new Date("12-03-2024")
console.log(createDate.toLocaleString());
console.log(createDate1.toLocaleString());
console.log(createDate2.toLocaleString());
console.log(createDate3.toLocaleString());


// ---------------------------------------------------------------------------------

let createstamp=Date.now()
console.log(createstamp);
console.log(createDate.getTime());
console.log(Math.floor(createstamp/1000));

// ---------------------------------------------------------------------------------

let dates=new Date()
console.log(dates.toLocaleString('Default',{
    weekday: "long"
}));




