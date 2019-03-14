$(".display").click(function(){
var main_string=$("input[name='place']").val();
var array=main_string.split(",");
var x=array[0];
var y=array[1];
var z=array[2];

var settings = {
  "url": "http://api.airvisual.com/v2/city?city="+x+"&state="+y+"&country="+z+"&key=QnZsF3rDttfRtAqRC",
  "method": "GET",
  "timeout": 0,
};

$.ajax(settings).done(function (response) {
if(response["data"]["status"] == "fail"){
  $('#qual').text("Error! Wrong data given.");
}
else{
	var temp=response["data"]["current"]["weather"]["tp"];

	$('#temperature').text(temp);
	var aqiu=response["data"]["current"]["pollution"]["aqius"];
	$('#aqi').text(aqiu);
	if (aqiu>0 && aqiu<51) 
	{
		$('#qual').text("Pollution Level 1(Excellent)")
	}
	else if (aqiu>50 && aqiu<101) 
	{
		$('#qual').text("Pollution Level 2(Good)")
	}
	else if (aqiu>100 && aqiu<151) 
	{
		$('#qual').text("Pollution Level 3(Lightly Polluted)")
	}
	else if (aqiu>150 && aqiu<201) 
	{
		$('#qual').text("Pollution Level 4(Moderately Polluted)")
	}
	else if (aqiu>200 && aqiu<301) 
	{
		$('#qual').text("Pollution Level 5(Heavily Polluted)")
	}
	else if (aqiu>300) 
	{
		$('#qual').text("Pollution Level 6(Severely Polluted)")
	}
}}
);

});

$("input[name='place']").keypress(
function(event){
if(event.which==13){
var main_string=$("input[name='place']").val();
var array=main_string.split(",");
var x=array[0];
var y=array[1];
var z=array[2];

var settings = {
  "url": "http://api.airvisual.com/v2/city?city="+x+"&state="+y+"&country="+z+"&key=QnZsF3rDttfRtAqRC",
  "method": "GET",
  "timeout": 0,
};

$.ajax(settings).done(function (response) {
  console.log(response["data"]);
var temp=response["data"]["current"]["weather"]["tp"];
$('#temperature').text(temp);
var aqiu=response["data"]["current"]["pollution"]["aqius"];
$('#aqi').text(aqiu);
if (aqiu>0 && aqiu<51) 
{
	$('#qual').text("Pollution Level 1(Excellent)")
}
else if (aqiu>50 && aqiu<101) 
{
	$('#qual').text("Pollution Level 2(Good)")
}
else if (aqiu>100 && aqiu<151) 
{
	$('#qual').text("Pollution Level 3(Lightly Polluted)")
}
else if (aqiu>150 && aqiu<201) 
{
	$('#qual').text("Pollution Level 4(Moderately Polluted)")
}
else if (aqiu>200 && aqiu<301) 
{
	$('#qual').text("Pollution Level 5(Heavily Polluted)")
}
else if (aqiu>300) 
{
	$('#qual').text("Pollution Level 6(Severely Polluted)")
}
});

}
});

$(".reset").click(function(){
	$('#temperature').text("");
	$('#qual').text("");
	$('#aqi').text("");
	$("input[name='place']").val('');
	$('#lat').text("");
	$('#long').text("");
});

$(".current").click(function(){
  var x,y;
  function showMap(position) {
  x=position.coords.latitude; 
  y=position.coords.longitude;
  $('#lat').text(x);
console.log(x);
$('#long').text(y);
var settings = {
  "url": "http://api.airvisual.com/v2/nearest_city?lat="+x+"&lon="+y+"&key=QnZsF3rDttfRtAqRC",
  "method": "GET",
  "timeout": 0,
};

$.ajax(settings).done(function (response) {

if(response["data"]["status"] == "fail"){
  $('#qual').text("Error! Wrong data given.");
}
else{
	var a,b,c;
	a=response["data"]["city"];
	b=response["data"]["state"];
	c=response["data"]["country"];
	$("input[name='place']").val(a+","+b+","+c);
	var temp=response["data"]["current"]["weather"]["tp"];

	$('#temperature').text(temp);
	var aqiu=response["data"]["current"]["pollution"]["aqius"];
	$('#aqi').text(aqiu);
	if (aqiu>0 && aqiu<51) 
	{
		$('#qual').text("Pollution Level 1(Excellent)")
	}
	else if (aqiu>50 && aqiu<101) 
	{
		$('#qual').text("Pollution Level 2(Good)")
	}
	else if (aqiu>100 && aqiu<151) 
	{
		$('#qual').text("Pollution Level 3(Lightly Polluted)")
	}
	else if (aqiu>150 && aqiu<201) 
	{
		$('#qual').text("Pollution Level 4(Moderately Polluted)")
	}
	else if (aqiu>200 && aqiu<301) 
	{
		$('#qual').text("Pollution Level 5(Heavily Polluted)")
	}
	else if (aqiu>300) 
	{
		$('#qual').text("Pollution Level 6(Severely Polluted)")
	}
}}
);
}

navigator.geolocation.getCurrentPosition(showMap); 



});