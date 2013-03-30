$(function(){
    var url = "data.json";
    $.getJSON(url,function(data){
	$.each(data,function(key,value){
	    var $img = $("<img/>").attr({src:key,width:150,height:150});
	    var $td1 = $("<td>").append($img);
	    var $td2 = $("<td>").append(value);
	    var $tr  = $("<tr>").append($td1);
	    $tr.append($td2);
	    $("tbody").append($tr);
	});
    });
});
