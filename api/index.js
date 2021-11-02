let data;
const renderdata = function (data) {};
fetch(
  `https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true`
)
  .then((rawdata) => {
    // console.log(rawdata);
    return rawdata.json();
  })
  .then((data) => {
    renderdata(data);
    console.log(data);
    // console.log(data[0].countries[12]);
    console.log(data.activeCasesNew);
  });
renderdata();
/////////////////////////////
fetch(
  `https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=fc892eaa17a142a799c50694a36b5499`
)
  .then((golddata) => {
    return golddata.json();
  })
  .then((gdata) => {
    console.log(gdata);
  });
//fc892eaa17a142a799c50694a36b5499

// api ket foe wheather 56456a4cf72c4998903133437212810

fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=514147f35efd8d695334455a91911308`
)
  .then((whdata) => {
    console.log(whdata);
    return whdata.json();
  })
  .then((data) => {
    console.log(data);
  });

let html = ` <div class="1">
<span class="head">ACTIVE CASE:</span><span class="no">23</span>
</div>
<div class="2">
<span class="head">ACTIVE CASE NEW:</span><span class="no">263</span>
</div>
<div class="3">
<span class="head">DEATH:</span><span class="no">263</span>
</div>
<div class="4">
<span class="head">DEATH NEW:</span><span class="no">263</span>
</div>
<div class="5">
<span class="head">TEST YESTERDAY:</span><span class="no">263</span>
</div>`;
