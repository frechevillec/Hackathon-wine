((app)=>{

'use strict'

// On crée notre component marketList et on lui associe son template et son controller
app.component("marketList", {
    templateUrl: "/app/components/marketList/marketListTemplate.html",
    controller: ["$http", function($http) {
        let marketCollection;

        $http.get("http://wine.wildcodeschool.fr/api/v1/markets").then((response) => {
            this.markets = response.data;
        })

        // this.filterMarkets = (market) => {
        //     let foundProduct = market.products.filter((product) => {
        //         product.name.indexOf(this.query) > -1
        //     })
        //     console.log(foundProduct)
        //     return foundProduct !== undefined || market.name.indexOf(this.query) > -1
        // }
    }]
})
app.filter('filterMarkets', function() {
    return function(markets, query) {
        if (markets === undefined){
            return [];
        }
        if (query === undefined){
            return markets;
        }
        let filterMarkets = [];
        let marketMatch = new RegExp(query, 'i');

        markets.forEach((market) => {
            let matched = false;
            market.products.forEach((product) => {
                if (marketMatch.test(product.name)){
                    matched = true
                }
            })
            if (marketMatch.test(market.name) || matched){
                filterMarkets.push(market)
            }
        })

        return filterMarkets
    }
})
})(angular.module("marketList"))
