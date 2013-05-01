define(function(require) {

	var extend = require();

	return extend(Object, {

		constructor: function() {
			if (this.$factory) {
				var value = this.$factory.apply(this, arguments);
				if (value) return value;
			}

			this.init.apply(this, arguments);
		},

		init: function() { }
	});
});
