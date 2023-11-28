// Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).
// Get all the countries from Asia continent /region using Filter function

var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    var res=result.filter((ele)=>ele.region === "Asia");  //filter Asian continent data
    
    var r=res.map((ele)=>ele.name.common);  //map asian countries name
    console.log(`Asian Countries 
    
    ${r}`);
}

