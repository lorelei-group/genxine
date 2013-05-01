
var app = angular.module('app', [])



app.factory('Layers', function() {
	var data = [{
		name: 'collision',
		readonly: true,
		visible: true,
	}, {
		name: 'background',
		visible: true,
	}];

	data.entities = { visible: true };
	return data;
});

function LayersCtrl($scope, Layers) {
	$('#loader').remove();
	$('#layers ul')
		.sortable({ cursor: 'move' })
		.disableSelection();

	window.layers = $scope.layers = Layers;

	$scope.add = function() {
		var name = prompt('Name');
		if (name) Layers.push({ name: name, visible: true });
	};
}



app.factory('Properties', function() {
	return [{
		name: 'size.x',
		value: '100px',
	}, {
		name: 'size.y',
		value: '150px',
	}, {
		name: 'texts',
		value: 'asdf',
	}];
});

function PropertiesCtrl($scope, Properties) {
	window.properties = $scope.properties = Properties;

	$scope.add = function() {
		var name = prompt('Name');
		if (name) Properties.push({ name: name });
	};
}
