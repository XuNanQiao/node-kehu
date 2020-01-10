$(function(){
	init_data();
});

function init_data(){
	
	var url = "http://192.168.8.230:8080/taskmanage"+"/station/selectStationTree";
	$.getJSON(url,function(result){
		var onedata = result.data;
		console.log(onedata);
	});
	
}






