define(function(require) {
	'use strict';

	var template = require('tpl!layer');

	var Layers = Backbone.View.extend({

		el: '#layers',

		events: {
			'click .add': function(event) {
				var name = prompt('Name');
				if (name) this.add(name);
			},

			'click .remove': function(event) {
				$(event.target).closest('.layer').remove();
			}
		},

		initialize: function() {
			this.layers = {};
			this.$sortable = this.$('.sortable')
				.sortable({ cursor: 'move' })
				.disableSelection();

			this.$entities = this.create({ name: 'entities', readonly: true });
			this.$('.list').prepend(this.$entities);
			this.clear();
		},

		clear: function() {
			this.$sortable.html('');
			this.layers = { 'entities': this.$entities };
			this.add('collisions', { readonly: true });
			this.add('background');
		},

		add: function(name, options) {
			options = _.extend({ name: name }, options);
			var item = this.create(options);
			this.$sortable.append(item);
		},

		create: function(options) {
			var name = options.name;
			if (this.layers.hasOwnProperty(name))
				throw new Error('Layer ' + name + ' already exists');

			var item = $('<div>')
				.addClass('layer')
				.html(template(options));

			this.layers[name] = item;
			return item;
		}

	});

	return new Layers();
});
