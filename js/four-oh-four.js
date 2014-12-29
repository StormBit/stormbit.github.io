var StormBit = StormBit || {};

StormBit.FourOhFour = function(node) {
	this.container = node;
	this.params.q = window.location.pathname.split(/[/-_]/).join(" ");

	$.getJSON(
		"http://api.swiftype.com/api/v1/public/engines/search.json?callback=?",
		this.params
	).success(this.render);
};

StormBit.FourOhFour.prototype.container = null;
StormBit.FourOhFour.prototype.params = {
	engine_key: "PTCnAnrfYm7pvRS51Wya",
	per_page: 10
};

StormBit.FourOhFour.prototype.render = function(data) {
	var container = this.container.html("");

	if (data['records']['page'].length > 0) {
		container.append("<h2>Suggested pages:</h2>");

		$.each(data['records']['page'], function(index, result) {
			container.append(
				"<p><a href='" + result['url'] + "'>" +
					(result['highlight']['title'] || result['title']) + "</a><br>" +
					(result['highlight']['body'] || result['body'].substring(0, 300)) +
				"</p>"
			);
		});
	}
}
