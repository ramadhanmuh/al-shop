// Function
let pages = {
    isHome: function () {

        let components = {
            topSlider: $('.home-top-slider'),
            saleItems: $('.home-sale-item')
        }

        $.each(components, function (key, value) {
            if (value === 0) {
                return false;
            }
        });

        return true;
    },
};

// Init pages
pages.home = {};