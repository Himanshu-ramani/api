let data;
const stateContainer = document.getElementById("corona")
let c;
document.getElementById("select").addEventListener("onchange",function(){
  console.log(hi);
})
let chosen;
let India;
function indiaCor(data){
  fetch(
    `https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true`
  )
    .then((rawdata) => {
      // console.log(rawdata);
      return rawdata.json();
    })
    .then((data) => {
      let updateiso = data.lastUpdatedAtApify
      let newupdate = new Date (updateiso).toString()
     
      document.getElementById("update").innerHTML = newupdate.split(":00 GMT-0700 (Pacific Daylight Time)")
      document.getElementById("active-case").innerHTML = data.activeCases
        document.getElementById("active-casse-new").innerHTML = data.activeCasesNew
        ////deths
        document.getElementById("deaths").innerHTML = data.deaths
        document.getElementById("deaths-new").innerHTML = data.deathsNew
        //recover
        document.getElementById("recovered").innerHTML = data.recovered
        document.getElementById("recovered-new").innerHTML = data.recoveredNew
        ///total
        document.getElementById("total").innerHTML = data.totalCases
    
  });
}

indiaCor()


function mumbai(){
  fetch(
    `https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true`
  )
    .then((rawdata) => {
      // console.log(rawdata);
      return rawdata.json();
    })
    .then((data) => {
  document.getElementById("active-case").innerHTML = data.regionData[20].activeCases
        document.getElementById("active-casse-new").innerHTML = data.regionData[20].newInfected
        ////deths
        document.getElementById("deaths").innerHTML = data.regionData[20].deceased
        document.getElementById("deaths-new").innerHTML = data.regionData[20].newDeceased
        //recover
        document.getElementById("recovered").innerHTML = data.regionData[20].recovered
        document.getElementById("recovered-new").innerHTML = data.regionData[20].newRecovered
        ///total
        document.getElementById("total").innerHTML = data.regionData[20].totalInfected
      });
 }
 function guj(){
  fetch(
    `https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true`
  )
    .then((rawdata) => {
      // console.log(rawdata);
      return rawdata.json();
    })
    .then((data) => {
  document.getElementById("active-case").innerHTML = data.regionData[10].activeCases
        document.getElementById("active-casse-new").innerHTML = data.regionData[10].newInfected
        ////deths
        document.getElementById("deaths").innerHTML = data.regionData[10].deceased
        document.getElementById("deaths-new").innerHTML = data.regionData[10].newDeceased
        //recover
        document.getElementById("recovered").innerHTML = data.regionData[10].recovered
        document.getElementById("recovered-new").innerHTML = data.regionData[10].newRecovered
        ///total
        document.getElementById("total").innerHTML = data.regionData[10].totalInfected
      });
 }
 /////////////////
  function list(){

    let value =document.getElementById("select").value
    if (value == "India") {
      indiaCor()
    }
    if (value == "Mumbai") {
      mumbai()
    }
    if (value == "guj") {
     guj() 
    }
  }
///////
///////////////////////
function news(){
  fetch(
    `https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=fc892eaa17a142a799c50694a36b5499`
  )
    .then((golddata) => {
      return golddata.json();
    })
    .then((gdata) => {
      // console.log(gdata);
      document.getElementById("news-img").src = gdata.articles[art].urlToImage
      document.getElementById("title").innerHTML = gdata.articles[art].title
      document.getElementById("description").innerHTML = gdata.articles[art].description
      document.getElementById("btn").href = gdata.articles[art].url
      if (  gdata.articles[art].author == null) {
        document.getElementById("author").innerHTML = "~public"
      } else {
        
        document.getElementById("author").innerHTML = "~" + gdata.articles[art].author
      }
    });
}
let art = 0

function next(){
  news()
    art++
}
next()
function back(){
  news()
  art--
}
/////////////////////


// api ket foe wheather 56456a4cf72c4998903133437212810

fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=514147f35efd8d695334455a91911308`
)
  .then((whdata) => {
    return whdata.json();
  })
  .then((data) => {
    console.log(data);
    
    const feelF =data.main.feels_like
    let temp = data.main.temp
    let C = feelF-273.15
    let tempc = temp-273.15
    document.getElementById("humidity").innerHTML = data.main.humidity + "%"
    document.getElementById("wind").innerHTML = data.wind.speed + "km/hr"
    document.getElementById("feel").innerHTML = Math.round(C) +"C" 
    document.getElementById("tempture").innerHTML = Math.round(tempc)+"C"
    document.getElementById("name").innerHTML = data.name
    document.getElementById("weatherText").innerHTML = data.weather[0].main
  });
  //////////////////

  