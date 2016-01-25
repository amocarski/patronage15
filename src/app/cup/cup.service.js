(function(){
	'use strict';

	angular
	.module('cup')
	.service('CupService', CupService);

	function CupService(){
		this.isEmpty = isEmpty;
		this.fill = fill;
		this.drink = drink;

		var empty = true;

		function isEmpty(){
			return empty;
		}

    function fill(){
			if(!empty){
				throw new Error('overflow');
			}
			empty = false;
				//this.isEmpty = false;
		}

			function drink(){
				empty = true;
				//this.isEmpty = true;
			}
	}

})();
