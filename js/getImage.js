$(function() {
	var id_name = ["img1", "img2"];
	var img_dir = "./img/";

	getImage = function getImage() {
		var url = "getImage.php";
		var query = $(this).attr("src");
		$.get(url, {
			name : query
		}, function(data) {
			$("#" + id_name[0]).attr({
				src : img_dir + data[id_name[0]]
			});
			$("#" + id_name[1]).attr({
				src : img_dir + data[id_name[1]]
			});
		}, "json");
	}
	$(getImage);
	$("#" + id_name[0]).click(getImage);
	$("#" + id_name[1]).click(getImage);
});
