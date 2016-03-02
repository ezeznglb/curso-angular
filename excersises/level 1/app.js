(function (){
    var gemStoreApp = angular.module('gemStore', []),
        gems = [{
            name: 'Adamite',
            price: 312.50,
            canPurchase: true,
            soldOut: false
        },{
            name: 'Aegirine',
            price: 657.50,
            canPurchase: false,
            soldOut: true
        },{
            name: 'Agate',
            price: 11.50,
            canPurchase: false,
            soldOut: true
        },{
            name: 'Albite',
            price: 1123.50,
            canPurchase: true,
            soldOut: false
        },{
            name: 'Aluminium',
            price: 3876.00,
            canPurchase: false,
            soldOut: true
        }];
    gemStoreApp.controller('storeController', function (){
        this.products = gems;
    });
})();