//c.

var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    result.forEach((ele)=>
    console.log(`Country name: ${ele.name.common} 
    Capital: ${ele.capital} 
    Flag: ${ele.flag}`)
    );
}