angular.module('myApp').controller('mainCtrl', ['$scope', '$http', function($scope, $http){
	

	console.log('this: ',this)

	var key = 'AIzaSyCb7Q1VpM80jYrVKphW3Bzk6W1S-otCe4w';

	$scope.getLocation = function(e){
		console.log('this: ',e)
		$http({
			method: 'POST',
			url: 'https://maps.googleapis.com/maps/api/geocode/json?address=' + e.city + '&key=' + key
		}).then(function sucessCallBack(res) {
			console.log('SUCCESS: ', res);
   			e.lat = res.data.results[0].geometry.location.lat;
			e.lng = res.data.results[0].geometry.location.lng;
		}, function errorCallBack(res) {
			console.log('ERROR:',res);
		} ); 
	}

	$scope.names = ['Colin','Daniel', 'Matt', 'Chris', 'Sam'];
	$scope.people = [
		{
			name: $scope.names[0],
			age: 29,
			city: 'San Francisco',
			lat: null,
			lng: null,
			photo_url: 'https://scontent.fsnc1-5.fna.fbcdn.net/v/t1.0-9/12803242_1271144606233320_5700989032315340200_n.jpg?oh=7624fd3e353b4e25d14e56f522317e09&oe=58C05012'
		},
		{
			name: $scope.names[1],
			age: 30,
			city: 'Richmond',
			lat: null,
			lng: null,
			photo_url: 'https://scontent.fsnc1-5.fna.fbcdn.net/v/t1.0-9/14947793_1127800943956393_4788255843298948868_n.jpg?oh=0252aaed750d8c03133c413bf735ff0b&oe=58B9F6AF'
		},
		{
			name: $scope.names[2],
			age: 31,
			city: 'Oakland',
			lat: null,
			lng: null,
			photo_url: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAjKAAAAJDVhZTQ3ZDgwLWRhOGMtNDgxNi05OTU0LWI1YWZlYmMxOGRiZg.jpg'
		},
		{
			name: $scope.names[3],
			age: 32,
			city: 'New York',
			lat: null,
			lng: null,
			photo_url: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAXdAAAAJDA1N2U0NTNjLWRiMGUtNDg2NS1iMmJkLWUyYzIxNDRiYWFhOQ.jpg'
		},
		{
			name: $scope.names[4],
			age: 32,
			city: 'New York',
			lat: null,
			lng: null,
			photo_url: 'https://scontent.fsnc1-5.fna.fbcdn.net/v/t1.0-9/11100595_10206354434518847_2360154466397878616_n.jpg?oh=c92624b9f592a7b52b35601a8c6e5a79&oe=58B68E09'
		}
	];
	console.log($scope.people);
	
	$scope.people.forEach(function(e){
		$scope.getLocation(e);
	});

	$scope.dismiss = function() {
		this.p.active = true;
	}
}]);
