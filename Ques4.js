//d. Print the total population of countries using reduce function


var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    var res=result.reduce((acc,ele)=>acc+ele.population,0);
    console.log(` Total population of countries = ${res}`);
}