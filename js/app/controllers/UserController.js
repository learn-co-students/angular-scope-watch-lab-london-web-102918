function UserController($scope) {
	this.username = '';

	this.country = {
		name: {
			short: '',
			full: ''
		},
		population: ''
	};

	$scope.$watch(() => {
		return this.username
	}, (nV, oV) => {
		console.log('username stuff changed, yo: ' + nV)
	})

	$scope.$watchCollection(() => {
		return this.country.name
	}, (nV, oV) => {
		console.log('specific country name stuff changed, yo: ' + nV)
	})

	$scope.$watch(() => {
		return this.country
	}, (nV, oV) => {
		console.log('general country stuff changed, yo: ' + nV)
	}, true)

}

angular
	.module('app')
	.controller('UserController', UserController);
