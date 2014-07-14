// main.js
var app = angular.module('myApp', ['ngGrid']);
app.controller('SkillsCtrl', function($scope, $http) {
	$scope.filterOptions = {
		filterText: ''
	};

	$scope.categories = [
      		{name:'-- Show All Categories --', value:'showall'},
      		{name:'Languages Only', value:'languages'},
      		{name:'Frameworks Only', value:'frameworks'},
      		{name:'Database Only', value:'database'},
      		{name:'Plateforms Only', value:'plateforms'},
      		{name:'Concepts and Methodologies Only', value:'concepts-methodologies'},
      		{name:'Software and Tools Only', value:'software-tools'},
      		{name:'CMS and eCommerce Only', value:'cms-ecommerce'}
    	];
    $scope.myCategory = $scope.categories[0]; // all 

    

	$http.get('/skills.json').success(function(res){
		$scope.myData = [];
		
		$scope.cateChange = function() {
			if($scope.myCategory.value == "showall"){
				$scope.myData = $scope.myData.concat(res.Languages);
				$scope.myData = $scope.myData.concat(res.Frameworks);
				$scope.myData = $scope.myData.concat(res.Database);
				$scope.myData = $scope.myData.concat(res.Plateforms);
				$scope.myData = $scope.myData.concat(res.ConceptsMethodoligies);
				$scope.myData = $scope.myData.concat(res.SoftwareTools);
				$scope.myData = $scope.myData.concat(res.CMSEcommerce);
			}else if($scope.myCategory.value == "languages"){
				$scope.myData = res.Languages;
			}else if($scope.myCategory.value == "frameworks"){
				$scope.myData = res.Frameworks;
			}else if($scope.myCategory.value == "database"){
				$scope.myData = res.Database;
			}else if($scope.myCategory.value == "plateforms"){
				$scope.myData = res.Plateforms;
			}else if($scope.myCategory.value == "concepts-methodologies"){
				$scope.myData = res.ConceptsMethodoligies;
			}else if($scope.myCategory.value == "software-tools"){
				$scope.myData = res.SoftwareTools;
			}else if($scope.myCategory.value == "cms-ecommerce"){
				$scope.myData = res.CMSEcommerce;
			}
    		};	
		
		$scope.myData = $scope.myData.concat(res.Languages);
		$scope.myData = $scope.myData.concat(res.Frameworks);
		$scope.myData = $scope.myData.concat(res.Database);
		$scope.myData = $scope.myData.concat(res.Plateforms);
		$scope.myData = $scope.myData.concat(res.ConceptsMethodoligies);
		$scope.myData = $scope.myData.concat(res.SoftwareTools);
		$scope.myData = $scope.myData.concat(res.CMSEcommerce);
		//	$scope.gridOptions = { data: 'myData' };
		$scope.data1 = res.Frameworks;
	}).then(function(response){
		//do nothing
	});
	$scope.gridOptions = { 
		data: 'myData',
		rowHeight: '25',
		sortInfo:{ fields: ['lastUsedYear'], directions: ['desc']},
		columnDefs: [
			{field:'skills', displayName: 'Skills'},
       			{field:'ratingOutOf5',displayName: 'Rating', cellTemplate:'ratingTemplate.html', width:'160px'},
			{field:'lastUsedYear', displayName: 'Last Used', width:'80px'}
		],
		filterOptions: $scope.filterOptions
	};

	$scope.filterSkills = function() {
		var filterText = 'name:Skills';
		if ($scope.filterOptions.filterText === '') {
			$scope.filterOptions.filterText = filterText;
		}
		else if ($scope.filterOptions.filterText === filterText) {
			$scope.filterOptions.filterText = '';
		}
	};	

});
