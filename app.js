(function(){
	var app = angular.module('store', [ ]);

	var gems = [
		{
			name: 'Dodecahedron',
			price: 2.95,
			description: '...',
			canPurchase: true,
			soldOut: false,
			reviews: [
				{
					stars: 5,
					body: "I love this product!",
					author: "joe@thomas.com"
				},
				{
					starts: 1,
					body: "This product sucks",
					author: "tim@hater.com"
				}
			]
		},
		{
			name: "Pentagonal Gem",
			price: 5.95,
			description: "This is the second product.",
			canPurchase: true,
			soldOut: false,
			reviews: [
				{
					stars: 4,
					body: "Good good",
					author: "wens@thomas.com"
				},
				{
					stars: 1,
					body: "This product sucks",
					author: "tim@hater.com"
				}
			]
		}
	];

	app.controller('StoreController', function(){
		this.products = gems;
	});

	app.controller('PanelController', function(){
		this.tab = 1;

		this.selectTab = function(setTab){
			this.tab = setTab;
		};

		this.isSelected = function(checkTab) {
			return this.tab === checkTab;
		}
	})
})();

