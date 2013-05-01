(function() {
	'use strict';

	requirejs.config({
		baseUrl: 'js',
		urlArgs: 'nocache=' + Date.now(),

		paths: {
			'promise': 'lib/promise',
		},
	})(['main']);

	/**
	 * Imported Globals:
	 *  - $
	 *  - _
	 *  - Backbone
	 *  - Handlebars
	 */

})();
