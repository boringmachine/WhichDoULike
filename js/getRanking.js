$(function() {

	var count = 4;
	var start_index = 0;
	var end_index = count;

	var appendToTbody = function appendToTbody(data, keys, si, ei) {
		var i = 0;
		$.each(keys, function(index, key) {
			if (ei < i) {
				return false;
			} else if (i < si) {
			} else {
				var $img = $("<img/>").attr({
					src : key,
					width : 150,
					height : 150
				});
				var $td1 = $("<td>").append($img);
				var $td2 = $("<td>").append(data[key]);
				var $tr = $("<tr>").append($td1).append($td2);
				var $tbody = $("tbody").append($tr);
			}
			i++;
		});
		$("#loadButton").click(function() {
			start_index = end_index + 1;
			end_index += count + 1;
			appendToTbody(data, keys, start_index, end_index);
		});
	}
	function ArrayLikeObjectKeysAsArray(data) {
		var keys = Array();
		var i = 0;
		$.each(data, function(key, value) {
			keys[i] = key;
			i++
		});
		return keys;
	}

	function ArrayLikeObjectValuesAsArray(data) {
		var values = Array();
		var i = 0;
		$.each(data, function(key, value) {
			values[i] = value;
			i++;
		})
		return values;
	}

	function ArrayLikeObjectSorter(data) {
		var keys = ArrayLikeObjectKeysAsArray(data);
		var values = ArrayLikeObjectValuesAsArray(data);
		var swapped = true;
		while(swapped){
			swapped = false;
			$.each(keys,function(i) {
				if (values[i] < values[i + 1]) {
					var temp = keys[i];
					keys[i] = keys[i + 1];
					keys[i + 1] = temp;
					var temp = values[i];
					values[i] = values[i + 1];
					values[i + 1] = temp;
					swapped = true;
				}
			});
		}
		return keys;
	}

	var url = "data.json";
	$.getJSON(url, function(data) {
		var keys = ArrayLikeObjectSorter(data);
		appendToTbody(data, keys, start_index, end_index);
	});
});
