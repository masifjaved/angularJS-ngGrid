<!DOCTYPE html>
<html ng-app="myApp">
    <head lang="en">
	<meta charset="utf-8">
	<title>AngularJS Sample</title>  
	<link rel="stylesheet" type="text/css" href="http://angular-ui.github.com/ng-grid/css/ng-grid.css" />
	<link rel="stylesheet" type="text/css" href="style.css" />
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.18/angular.min.js"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.18/angular-resource.js"></script>
	<script type="text/javascript" src="http://angular-ui.github.com/ng-grid/lib/ng-grid.debug.js"></script>
	<script type="text/javascript" src="main.js"></script>
    </head>
    <body >

<div ng-controller="SkillsCtrl">
<strong>Filter:</strong> </string><input type="text" ng-model="filterOptions.filterText" />
<select ng-model="myCategory" ng-options="category.name for category in categories" ng-change="cateChange()"></select>
      <br/>
      <br/>
	<div class="gridStyle" ng-grid="gridOptions"></div>
</div>
    </body>
</html> 
