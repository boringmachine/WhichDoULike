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
	while (swapped) {
		swapped = false;
		$.each(keys, function(i) {
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
