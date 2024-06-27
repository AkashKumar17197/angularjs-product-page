app.controller('ProductController', ['$scope', function($scope)
{
    var ctrl = this;
    ctrl.categories = ['Tables', 'Lamps', 'Chairs', 'Sofas'];
    ctrl.colors = ['#d4a45a', '#64442d', '#5480c7', '#b8b8b8', '#704280', '#d45h32', '#642418'];
    ctrl.priceRange = { min: 0,
        max: 500,
        value: 250 };

    ctrl.products = [
        {
            name: 'Designers Chair GT Designed By Carry GaliA',
            price: 120,
            originalPrice: 130,
            category: 'Chairs',
            image: 'https://cdn.shopify.com/s/files/1/0044/1208/0217/files/BOLDEOFC_400x.jpg?v=1697607154', // Replace with actual image path
            link: 'https://www.amazon.com'
        },
        {
            name: 'The ultimate CollectionA',
            price: 130,
            originalPrice: 140,
            category: 'Chairs',
            image: 'https://cdn.shopify.com/s/files/1/0044/1208/0217/files/BOLDEOFC_400x.jpg?v=1697607154', // Replace with actual image path
            link: 'https://www.amazon.com'
        },
        {
            name: 'Designers Chair GT Designed By Carry Gali2',
            price: 140,
            originalPrice: 150,
            category: 'Chairs',
            image: 'https://cdn.shopify.com/s/files/1/0044/1208/0217/files/BOLDEOFC_400x.jpg?v=1697607154', // Replace with actual image path
            link: 'https://www.amazon.com'
        },
        {
            name: 'The ultimate Collection2',
            price: 150,
            originalPrice: 160,
            category: 'Chairs',
            image: 'https://cdn.shopify.com/s/files/1/0044/1208/0217/files/BOLDEOFC_400x.jpg?v=1697607154', // Replace with actual image path
            link: 'https://www.amazon.com'
        },
        {
            name: 'Designers Chair GT Designed By Carry Gali3',
            price: 160,
            originalPrice: 170,
            category: 'Chairs',
            image: 'https://cdn.shopify.com/s/files/1/0044/1208/0217/files/BOLDEOFC_400x.jpg?v=1697607154', // Replace with actual image path
            link: 'https://www.amazon.com'
        },
        {
            name: 'The ultimate Collection3',
            price: 170,
            originalPrice: 180,
            category: 'Chairs',
            image: 'https://cdn.shopify.com/s/files/1/0044/1208/0217/files/BOLDEOFC_400x.jpg?v=1697607154', // Replace with actual image path
            link: 'https://www.amazon.com'
        },
    ];

    ctrl.sortOptions = ['Price: Low to High', 'Price: High to Low'];

    ctrl.sortBy = function(option)
    {
        if (option === 'Price: Low to High')
        {
            ctrl.products.sort((a, b) => a.price - b.price);
        }
        else if (option === 'Price: High to Low')
        {
            ctrl.products.sort((a, b) => b.price - a.price);
        }
    };



     // Watch for changes in the price range and filter products accordingly
     $scope.$watch(function() {
        return ctrl.priceRange.value;
    }, function(newVal, oldVal) {
        if (newVal !== oldVal) {
            ctrl.filterProductsByPrice();
        }
    });

    ctrl.filterProductsByPrice = function() {
        // Assuming originalProducts is the unfiltered list of products
        ctrl.filteredProducts = ctrl.products.filter(product => product.price <= ctrl.priceRange.value);
    };

    // Initialize filteredProducts with all products
    ctrl.filteredProducts = ctrl.products;

    

}]);

