define(function(require) {
	'use strict';

	var template = require('tpl!property');

	var Properties = Backbone.View.extend({

		el: '#properties',

		events: {
			'click .add': function(event) {
				var name = prompt('Name');
				if (name) this.add(name);
			},

			'click .remove': function(event) {
				$(event.target).closest('.property').remove();
			}
		},

		initialize: function() {
			this.clear();
			this.add('width0', '100px');
			this.add('width1', '100px');
			this.add('width2', '100px');
		},

		clear: function() {
			this.properties = {};
		},

		add: function(name, value, options) {
			if (this.properties.hasOwnProperty(name))
				throw new Error('Property ' + name + ' already exists');

			options = _.extend({ name: name, value: value }, options);
			var item = $('<div>')
				.addClass('property')
				.html(template(options));

			this.properties[name] = item;
			this.$('.list').append(item);
			return item;
		}

	});

	return new Properties();
});
