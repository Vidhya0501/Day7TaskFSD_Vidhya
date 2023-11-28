//e. Print the country that uses US dollars as currency.


var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);   
    var currency = result.filter((element) => {
    for(let key in element.currencies){
       if(element.currencies[key].name === "United States dollar"){
           return element;
       }
    }
  });
    //    console.log(currency);

       var country=currency.map((ele)=>ele.name.common);
       console.log(`Country that uses US dollars as currency
       
       ${country}`);
}
