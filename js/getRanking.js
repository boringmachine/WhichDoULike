$(function() {

	var count = 4;
	var start_index = 0;
	var end_index = count;

	var appendToTbody = function appendToTbody(data, si, ei) {
		var i = 0;
		$.each(data, function(key, value) {
			if (ei < i) {
				return false;
			}else if(i < si){
			}else{
				var $img = $("<img/>").attr({
					src : key,
					width : 150,
					height : 150
				});
				var $td1 = $("<td>").append($img);
				var $td2 = $("<td>").append(value);
				var $tr = $("<tr>").append($td1).append($td2);
				var $tbody = $("tbody").append($tr);
			}
			i++;
		});
		$("#loadButton").click(function() {
			start_index = end_index+1;
			end_index += count+1;
			appendToTbody(data, start_index,end_index);
		});
	}
	var url = "data.json";
	$.getJSON(url, function(data) {
		appendToTbody(data,start_index,end_index);
	});
});
