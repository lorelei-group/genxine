define(function(require) {

	var Base = require('../core/base');

	return Base.extend({

		init: function(seconds) {
			var time = Date.now();

			if (seconds)
				time += seconds * 1000;
			this._target =
		}
	});
});
