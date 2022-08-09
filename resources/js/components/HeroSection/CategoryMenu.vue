<template>
  <div
    class="
      bg-white
      py-3
      rounded-md
      hidden
      lg:block
      h-[516px]
      text-xs
      overflow-hidden
    "
  >
    <!-- <p class="flex items-center px-4">
        <CatIcon class="h-6 w-6 mr-2" />
        Categories
    </p> -->

    <div class="flyout-w">
      <div class="flyout" role="menu">
        <a href="/groceries/" class="itm" role="menuitem">
          <svg
            viewBox="0 0 24 24"
            class="ic -mrxs -fsh0"
            width="20"
            height="20"
          >
            <use
              xlink:href="https://www..ug/assets_he/images/i-icons.edbc85eb.svg#cat-groceries"
            ></use>
          </svg>
          <span class="text">Supermarket</span>
          <div class="sub" role="menu">
            <div class="sub-w">
              <div class="co">
                <div class="cat">
                  <a href="/food-cupboard-supplies/" class="tit" role="menuitem"
                    >FOOD CUPBOARD</a
                  >
                  <a href="/sugar-3999/" class="s-itm" role="menuitem">Sugar</a>
                  <a href="/flours-meals/" class="s-itm" role="menuitem"
                    >Flours</a
                  >
                  <a
                    href="/dried-beans-grains-rice/"
                    class="s-itm"
                    role="menuitem"
                    >Dried Beans, Grains &amp; Rice</a
                  >
                  <a href="/crisps-snacks-nuts/" class="s-itm" role="menuitem"
                    >Snacks</a
                  >
                  <a href="/cooking-oil/" class="s-itm" role="menuitem"
                    >Cooking Oil</a
                  ><a href="/soft-drinks/" class="s-itm" role="menuitem"
                    >Soft Drinks</a
                  ><a href="/juice-drinks/" class="s-itm" role="menuitem"
                    >Fruit Juice</a
                  ><a href="/water/" class="s-itm" role="menuitem">Water</a
                  ><a
                    href="/hot-beverages-coffee-tea-cocoa/"
                    class="s-itm"
                    role="menuitem"
                    >Coffee, Tea &amp; Cocoa</a
                  ><a href="/grocery-milk-cream/" class="s-itm" role="menuitem"
                    >Milk &amp; Cream</a
                  ><a href="/pasta-1593/" class="s-itm" role="menuitem">Pasta</a
                  ><a href="/breakfast-foods/" class="s-itm" role="menuitem"
                    >Breakfast Foods</a
                  ><a href="/cooking-spices/" class="s-itm" role="menuitem"
                    >Spices</a
                  >
                </div>
              </div>
              <div class="co">
                <div class="cat">
                  <a href="/beers-wine-spirits/" class="tit" role="menuitem"
                    >BEERS, WINES &amp; SPIRITS</a
                  ><a href="/vodka/" class="s-itm" role="menuitem">Vodka</a
                  ><a href="/red-wine/" class="s-itm" role="menuitem"
                    >Red White</a
                  ><a href="/liqueor/" class="s-itm" role="menuitem">Liquor</a
                  ><a href="/beers/" class="s-itm" role="menuitem">Beers</a
                  ><a href="/white-wine/" class="s-itm" role="menuitem"
                    >White Wine</a
                  ><a href="/whiskey/" class="s-itm" role="menuitem">Whiskey</a
                  ><a
                    href="/champagne-sparkling-wine/"
                    class="s-itm"
                    role="menuitem"
                    >Champagne</a
                  >
                </div>
                <div class="cat">
                  <a href="/household-supplies/" class="tit" role="menuitem"
                    >CLEANING</a
                  ><a href="/laundry-supplies/" class="s-itm" role="menuitem"
                    >Laundry</a
                  ><a
                    href="/household-air-fresheners/"
                    class="s-itm"
                    role="menuitem"
                    >Household Air Fresheners</a
                  ><a
                    href="/household-toilet-cleaners/"
                    class="s-itm"
                    role="menuitem"
                    >Toilet Cleaners</a
                  ><a href="/papers-rolls/" class="s-itm" role="menuitem"
                    >Toilet Paper,Wipes &amp; Kitchen Towels</a
                  ><a
                    href="/household-bathroom-toilet-cleaners/"
                    class="s-itm"
                    role="menuitem"
                    >Household Cleaning</a
                  >
                </div>
              </div>
              <div class="co">
                <div class="cat">
                  <a href="/baby-products/" class="tit" role="menuitem"
                    >BABY PRODUCTS</a
                  ><a
                    href="/baby-disposable-diapers/"
                    class="s-itm"
                    role="menuitem"
                    >Disposable Diapers</a
                  ><a href="/baby-wipes-refills/" class="s-itm" role="menuitem"
                    >Wipes &amp; Refills</a
                  ><a
                    href="/baby-feeding-products/"
                    class="s-itm"
                    role="menuitem"
                    >Feeding</a
                  >
                </div>
              </div>
            </div>
          </div>
        </a>
        <a href="/phones-tablets/" class="itm" role="menuitem"
          ><svg
            viewBox="0 0 24 24"
            class="ic -mrxs -fsh0"
            width="20"
            height="20"
          >
            <use
              xlink:href="https://www..ug/assets_he/images/i-icons.edbc85eb.svg#cat-mobile"
            ></use></svg
          ><span class="text">Phones &amp; Tablets</span>
          <div class="sub" role="menu">
            <div class="sub-w">
              <div class="co">
                <div class="cat">
                  <a href="/mobile-phones/" class="tit" role="menuitem"
                    >MOBILE PHONES</a
                  ><a href="/smartphones/" class="s-itm" role="menuitem"
                    >Smartphones</a
                  ><a href="/cell-phones/" class="s-itm" role="menuitem"
                    >Feature Phones</a
                  ><a
                    href="https://www..ug/mlp-refurbished-phones/"
                    class="s-itm"
                    role="menuitem"
                    >Refurbished Phones</a
                  >
                </div>
              </div>
              <div class="co">
                <div class="cat">
                  <a href="/tablets/" class="tit" role="menuitem">TABLETS</a
                  ><a href="/tablets/" class="s-itm" role="menuitem">Tablets</a
                  ><a href="/tablet-bags/" class="s-itm" role="menuitem"
                    >Bags</a
                  >
                </div>
              </div>
              <div class="co">
                <div class="cat">
                  <a href="/mobile-accessories/" class="tit" role="menuitem"
                    >CELL PHONE ACCESSORIES</a
                  ><a href="/smart-watches/" class="s-itm" role="menuitem"
                    >Smart Watches</a
                  ><a
                    href="/mobile-phone-batteries-battery-packs/"
                    class="s-itm"
                    role="menuitem"
                    >Batteries &amp; Battery Packs</a
                  ><a
                    href="/mobile-phone-cases-clips/"
                    class="s-itm"
                    role="menuitem"
                    >Cases &amp; Clips</a
                  ><a
                    href="/mobile-phone-chargers/"
                    class="s-itm"
                    role="menuitem"
                    >Chargers</a
                  ><a
                    href="/mobile-phone-data-connectivity/"
                    class="s-itm"
                    role="menuitem"
                    >Data &amp; Connectivity</a
                  ><a
                    href="/mobile-phone-headsets/"
                    class="s-itm"
                    role="menuitem"
                    >Headsets</a
                  ><a
                    href="/mobile-phone-memory-cards/"
                    class="s-itm"
                    role="menuitem"
                    >Memory Cards</a
                  ><a
                    href="/selfie-sticks-tripods/"
                    class="s-itm"
                    role="menuitem"
                    >Selfie Sticks &amp; Tripods</a
                  >
                </div>
              </div>
            </div>
          </div></a
        >
        <a href="/home-office/" class="itm" role="menuitem"
          ><svg
            viewBox="0 0 24 24"
            class="ic -mrxs -fsh0"
            width="20"
            height="20"
          >
            <use
              xlink:href="https://www..ug/assets_he/images/i-icons.edbc85eb.svg#cat-appliance"
            ></use></svg
          ><span class="text">Home &amp; Office</span></a
        >
        <div class="sub" role="menu">
          <div class="sub-w">
            <div class="co">
              <div class="cat">
                <a href="/home-kitchen/" class="tit" role="menuitem"
                  >HOME &amp; KITCHEN</a
                ><a
                  href="/home-kitchen-furniture/"
                  class="s-itm"
                  role="menuitem"
                  >Furniture</a
                ><a href="/home-decor/" class="s-itm" role="menuitem"
                  >Home Decor</a
                ><a href="/bedding/" class="s-itm" role="menuitem">Bedding</a
                ><a href="/bath/" class="s-itm" role="menuitem">Bath</a
                ><a href="/event-party-supplies/" class="s-itm" role="menuitem"
                  >Event &amp; Party Supplies</a
                ><a
                  href="/home-kitchen-storage-organization/"
                  class="s-itm"
                  role="menuitem"
                  >Storage &amp; Organization</a
                ><a href="/wall-art/" class="s-itm" role="menuitem">Wall Art</a
                ><a href="/floor-care/" class="s-itm" role="menuitem"
                  >Vacuums &amp; Floor Care</a
                ><a
                  href="/home-cleaning-supplies/"
                  class="s-itm"
                  role="menuitem"
                  >Cleaning Supplies</a
                ><a
                  href="/small-appliances-ironing-laundry/"
                  class="s-itm"
                  role="menuitem"
                  >Irons &amp; Steamers</a
                ><a
                  href="/appliances-fridges-freezers/"
                  class="s-itm"
                  role="menuitem"
                  >Fridges</a
                >
              </div>
            </div>
            <div class="co">
              <div class="cat">
                <a href="/home-kitchen-dining/" class="tit" role="menuitem"
                  >KITCHEN &amp; DINING</a
                ><a
                  href="/kitchen-dinning-small-appliances/"
                  class="s-itm"
                  role="menuitem"
                  >Small Appliances</a
                ><a href="/dining-entertaining/" class="s-itm" role="menuitem"
                  >Dining &amp; Entertaining</a
                ><a
                  href="/kitchen-utensils-gadgets/"
                  class="s-itm"
                  role="menuitem"
                  >Kitchen Utensils &amp; Gadgets</a
                ><a
                  href="/kitchen-dining-cookware/"
                  class="s-itm"
                  role="menuitem"
                  >Cookware</a
                ><a href="/coffee-tea-espresso/" class="s-itm" role="menuitem"
                  >Coffee, Tea &amp; Espresso</a
                ><a
                  href="/kitchen-storage-organization/"
                  class="s-itm"
                  role="menuitem"
                  >Storage &amp; Organization</a
                ><a
                  href="/kitchen-dining-bakeware/"
                  class="s-itm"
                  role="menuitem"
                  >Bakeware</a
                ><a
                  href="/cutlery-kinfe-accessories/"
                  class="s-itm"
                  role="menuitem"
                  >Cutlery &amp; Knife Accessories</a
                ><a
                  href="/food-service-equipment-supplies/"
                  class="s-itm"
                  role="menuitem"
                  >Food Service Equipment &amp; Supplies</a
                >
              </div>
              <div class="cat">
                <a href="/office-products/" class="tit" role="menuitem"
                  >OFFICE PRODUCTS</a
                ><a
                  href="/office-school-supplies/"
                  class="s-itm"
                  role="menuitem"
                  >Office &amp; School Supplies</a
                ><a href="/office-electronics/" class="s-itm" role="menuitem"
                  >Office Electronics</a
                ><a
                  href="/office-furniture-lighting/"
                  class="s-itm"
                  role="menuitem"
                  >Office Furniture &amp; Lighting</a
                >
              </div>
            </div>
            <div class="co">
              <div class="cat">
                <a href="/arts-crafts-sewing/" class="tit" role="menuitem"
                  >ARTS, CRAFT &amp; SEWING</a
                ><a href="/sewing-arts-crafts/" class="s-itm" role="menuitem"
                  >Sewing</a
                ><a
                  href="/painting-drawing-art-supplies/"
                  class="s-itm"
                  role="menuitem"
                  >Painting, Drawing &amp; Art Supplies</a
                ><a
                  href="/gift-wrapping-supplies/"
                  class="s-itm"
                  role="menuitem"
                  >Gift Wrapping Supplies</a
                >
              </div>
              <div class="cat">
                <a href="/tools-home-improvement/" class="tit" role="menuitem"
                  >TOOLS &amp; HOME IMPROVEMENT</a
                ><a href="/power-hand-tools/" class="s-itm" role="menuitem"
                  >Power &amp; Hand Tools</a
                ><a
                  href="/home-improvement-electrical-tools/"
                  class="s-itm"
                  role="menuitem"
                  >Electrical</a
                ><a
                  href="/home-improvement-appliances/"
                  class="s-itm"
                  role="menuitem"
                  >Appliances</a
                ><a href="/safety-security/" class="s-itm" role="menuitem"
                  >Safety &amp; Security</a
                ><a href="/home-tools-hardware/" class="s-itm" role="menuitem"
                  >Hardware</a
                ><a href="/kitchen-bath-fixtures/" class="s-itm" role="menuitem"
                  >Kitchen &amp; Bath Fixtures</a
                ><a href="/home-lighting/" class="s-itm" role="menuitem"
                  >Lighting</a
                >
              </div>
            </div>
          </div>
        </div>
        <a href="/electronics/" class="itm" role="menuitem"
          ><svg
            viewBox="0 0 24 24"
            class="ic -mrxs -fsh0"
            width="20"
            height="20"
          >
            <use
              xlink:href="https://www..ug/assets_he/images/i-icons.edbc85eb.svg#cat-tv"
            ></use></svg
          ><span class="text">Electronics</span></a
        >
        <div class="sub" role="menu">
          <div class="sub-w">
            <div class="co">
              <div class="cat">
                <a
                  href="/electronic-television-video/"
                  class="tit"
                  role="menuitem"
                  >TELEVISION &amp; VIDEO</a
                ><a href="/televisions/" class="s-itm" role="menuitem"
                  >Televisions</a
                ><a href="/dvd-players-recorders/" class="s-itm" role="menuitem"
                  >DVD Players</a
                ><a href="/led-lcd-tvs/" class="s-itm" role="menuitem"
                  >LED &amp; LCD TVs</a
                ><a href="/smart-tv/" class="s-itm" role="menuitem"
                  >Smart TVs</a
                >
              </div>
              <div class="cat">
                <a href="/electronics-camera-photo/" class="tit" role="menuitem"
                  >CAMERA &amp; PHOTOS</a
                ><a href="/digital-cameras/" class="s-itm" role="menuitem"
                  >Digital Cameras</a
                ><a
                  href="/electronic-camera-film-photography/"
                  class="s-itm"
                  role="menuitem"
                  >Film Photography</a
                ><a href="/photo-projectors/" class="s-itm" role="menuitem"
                  >Projectors</a
                ><a href="/video-equipments/" class="s-itm" role="menuitem"
                  >Video</a
                ><a href="/video-surveillance/" class="s-itm" role="menuitem"
                  >Video Surveillance</a
                >
              </div>
            </div>
            <div class="co">
              <div class="cat">
                <a href="/home-audio-electronics/" class="tit" role="menuitem"
                  >HOME AUDIO</a
                ><a href="/home-theatre/" class="s-itm" role="menuitem"
                  >Home Theatre Systems</a
                ><a href="/audio-speakers/" class="s-itm" role="menuitem"
                  >Speakers</a
                >
              </div>
              <div class="cat">
                <a href="/electronics-audio/" class="tit" role="menuitem"
                  >AUDIO</a
                ><a
                  href="/electronics-audio-accessories/"
                  class="s-itm"
                  role="menuitem"
                  >Accessories</a
                ><a href="/multiwireless-systems/" class="s-itm" role="menuitem"
                  >Multimedia Wireless Systems</a
                ><a
                  href="/electronics-audio-player-recorder/"
                  class="s-itm"
                  role="menuitem"
                  >Player &amp; Recorder</a
                ><a class="s-itm" role="menuitem">Portable Audio</a
                ><a href="/radios/" class="s-itm" role="menuitem">Radios</a
                ><a href="/audio-speakers/" class="s-itm" role="menuitem"
                  >Speakers</a
                ><a
                  href="/audio-stereo-components/"
                  class="s-itm"
                  role="menuitem"
                  >Stereo Components</a
                >
              </div>
              <div class="cat">
                <a href="/car-vehicle-electonics/" class="tit" role="menuitem"
                  >CAR &amp; VEHICLE ELECTRONICS</a
                ><a class="s-itm" role="menuitem">Powersports Electronics</a>
              </div>
            </div>
            <div class="co">
              <div class="cat">
                <a href="/home-office-appliances/" class="tit" role="menuitem"
                  >HOME APPLIANCES</a
                ><a
                  href="/air-quality-seasonal-appliances/"
                  class="s-itm"
                  role="menuitem"
                  >Air Quality &amp; Seasonal Appliances</a
                ><a
                  href="/home-kitchen-appliances/"
                  class="s-itm"
                  role="menuitem"
                  >Kitchen Appliances</a
                >
              </div>
              <div class="cat">
                <a href="/televisions-recorders/" class="tit" role="menuitem"
                  >TELEVISION &amp; RECORDERS</a
                ><a
                  href="/tv-recorders-accessories/"
                  class="s-itm"
                  role="menuitem"
                  >Accessories</a
                ><a
                  href="/electronics-televisions-bluray-recorders-players/"
                  class="s-itm"
                  role="menuitem"
                  >BluRay Recorders &amp; Players</a
                >
              </div>
              <div class="cat">
                <a
                  href="/electronic-accessories-supplies/"
                  class="tit"
                  role="menuitem"
                  >ACCESSORIES &amp; SUPPLIES</a
                ><a
                  href="/audio-video-accessories/"
                  class="s-itm"
                  role="menuitem"
                  >Audio &amp; Video Accessories</a
                ><a
                  href="/electonics-accessories-batteries/"
                  class="s-itm"
                  role="menuitem"
                  >Batteries</a
                ><a
                  href="/electronics-batteries-chargers-accessories/"
                  class="s-itm"
                  role="menuitem"
                  >Battery, Chargers &amp; Accessories</a
                ><a href="/electronics-cables/" class="s-itm" role="menuitem"
                  >Cables</a
                >
              </div>
            </div>
          </div>
        </div>
        <a href="/health-beauty/" class="itm" role="menuitem"
          ><svg
            viewBox="0 0 24 24"
            class="ic -mrxs -fsh0"
            width="20"
            height="20"
          >
            <use
              xlink:href="https://www..ug/assets_he/images/i-icons.edbc85eb.svg#cat-beauty"
            ></use></svg
          ><span class="text">Health &amp; Beauty</span></a
        >
        <div class="sub" role="menu">
          <div class="sub-w">
            <div class="co">
              <div class="cat">
                <a href="/womens-make-up/" class="tit" role="menuitem">MAKEUP</a
                ><a href="/eyes-makeup/" class="s-itm" role="menuitem">Eyes</a
                ><a href="/womens-face-make-up/" class="s-itm" role="menuitem"
                  >Face</a
                ><a href="/lips-make-up/" class="s-itm" role="menuitem">Lips</a
                ><a href="/makeup-sets-makeup/" class="s-itm" role="menuitem"
                  >Makeup set</a
                >
              </div>
              <div class="cat">
                <a href="/health-beauty-fragrances/" class="tit" role="menuitem"
                  >FRAGRANCES</a
                ><a href="/unisex-fragrances/" class="s-itm" role="menuitem"
                  >Unisex</a
                ><a href="/celebrity-fragrances/" class="s-itm" role="menuitem"
                  >Celebrity Fraqrances</a
                >
              </div>
            </div>
            <div class="co">
              <div class="cat">
                <a href="/hair-care-d/" class="tit" role="menuitem">HAIR CARE</a
                ><a href="/hair-accessories/" class="s-itm" role="menuitem"
                  >Hair Accessories</a
                ><a
                  href="/shampoo-conditioner-sets/"
                  class="s-itm"
                  role="menuitem"
                  >Shampoo &amp; Conditioners</a
                ><a
                  href="/extensions-wigs-accessories/"
                  class="s-itm"
                  role="menuitem"
                  >Extensions, Wigs &amp; Accessories</a
                >
              </div>
              <div class="cat">
                <a href="/personal-care/" class="tit" role="menuitem"
                  >PERSONAL CARE</a
                ><a
                  href="/antiperspirants-deodorants/"
                  class="s-itm"
                  role="menuitem"
                  >Deodorants &amp; Antiperspirants</a
                ><a href="/hair-scalp-care/" class="s-itm" role="menuitem"
                  >Hair Care</a
                ><a
                  href="/shave-hair-removal-products/"
                  class="s-itm"
                  role="menuitem"
                  >Shave &amp; Hair Removal</a
                ><a href="/skin-care-products/" class="s-itm" role="menuitem"
                  >Skin Care</a
                ><a
                  href="/mens-grooming-products/"
                  class="s-itm"
                  role="menuitem"
                  >Men's Grooming</a
                ><a
                  href="/fertility-sexual-wellness/"
                  class="s-itm"
                  role="menuitem"
                  >Sexual Wellness</a
                >
              </div>
            </div>
            <div class="co">
              <div class="cat">
                <a href="/oral-care/" class="tit" role="menuitem">ORAL CARE</a
                ><a href="/toothpaste/" class="s-itm" role="menuitem"
                  >Toothpaste</a
                ><a href="/toothbrushes/" class="s-itm" role="menuitem"
                  >Toothbrushes</a
                ><a href="/infant-dental-care/" class="s-itm" role="menuitem"
                  >Infant Dental Care</a
                >
              </div>
            </div>
          </div>
        </div>
        <a href="/category-fashion-by-/" class="itm" role="menuitem"
          ><svg
            viewBox="0 0 24 24"
            class="ic -mrxs -fsh0"
            width="20"
            height="20"
          >
            <use
              xlink:href="https://www..ug/assets_he/images/i-icons.edbc85eb.svg#cat-fashion"
            ></use></svg
          ><span class="text">Fashion</span></a
        >
        <div class="sub" role="menu">
          <div class="sub-w">
            <div class="co">
              <div class="cat">
                <a href="/womens-fashion/" class="tit" role="menuitem"
                  >WOMEN'S FASHION</a
                ><a href="/womens-clothing/" class="s-itm" role="menuitem"
                  >Clothing</a
                ><a href="/womens-shoes/" class="s-itm" role="menuitem">Shoes</a
                ><a
                  href="/womens-fashion-accessories/"
                  class="s-itm"
                  role="menuitem"
                  >Accessories</a
                ><a href="/womens-jewelry/" class="s-itm" role="menuitem"
                  >Jewelry</a
                ><a href="/womens-bags/" class="s-itm" role="menuitem"
                  >Handbags &amp; Wallets</a
                ><a
                  href="/womens-costumes-accessories/"
                  class="s-itm"
                  role="menuitem"
                  >Costumes &amp; Accessories</a
                >
              </div>
              <div class="cat">
                <a href="/fashion-sports-shop/" class="tit" role="menuitem"
                  >SPORTS SHOP</a
                ><a
                  href="/fashion-sports-shop-accessories/"
                  class="s-itm"
                  role="menuitem"
                  >Accessories</a
                >
              </div>
              <div class="cat">
                <a href="/watches-sunglasses/" class="tit" role="menuitem"
                  >WATCHES &amp; SUNGLASSES</a
                ><a href="/unisex-watches/" class="s-itm" role="menuitem"
                  >Unisex Watches</a
                ><a href="/women-watches/" class="s-itm" role="menuitem"
                  >Womens Watches</a
                ><a href="/mens-watches/" class="s-itm" role="menuitem"
                  >Mens Watches</a
                >
              </div>
            </div>
            <div class="co">
              <div class="cat">
                <a href="/mens-fashion/" class="tit" role="menuitem"
                  >MEN'S FASHION</a
                ><a href="/men-clothing/" class="s-itm" role="menuitem"
                  >Clothing</a
                ><a href="/mens-shoes/" class="s-itm" role="menuitem">Shoes</a
                ><a
                  href="/mens-fashion-accessories/"
                  class="s-itm"
                  role="menuitem"
                  >Accessories</a
                ><a href="/mens-jewelry/" class="s-itm" role="menuitem"
                  >Jewelry</a
                ><a
                  href="/mens-fashion-costumes-accessories/"
                  class="s-itm"
                  role="menuitem"
                  >Costumes &amp; Accessories</a
                ><a href="/mens-watches-d/" class="s-itm" role="menuitem"
                  >Watches</a
                >
              </div>
              <div class="cat">
                <a
                  href="/shoe-jewelry-watch-accessories/"
                  class="tit"
                  role="menuitem"
                  >SHOP JEWELRY AND WATCH ACCESSORIES</a
                ><a href="/watch-accessories/" class="s-itm" role="menuitem"
                  >Watch Accessories</a
                >
              </div>
              <div class="cat">
                <a href="/fashion-weddings/" class="tit" role="menuitem"
                  >WEDDINGS</a
                ><a href="/wedding-accessories/" class="s-itm" role="menuitem"
                  >Accessories</a
                ><a
                  href="/brides-wedding-aaparel/"
                  class="s-itm"
                  role="menuitem"
                  >Brides Apparel</a
                >
              </div>
            </div>
            <div class="co">
              <div class="cat">
                <a href="/kids-fashion/" class="tit" role="menuitem"
                  >KID'S FASHION</a
                ><a href="/kids-boys-fashion/" class="s-itm" role="menuitem"
                  >Boys' Fashion</a
                ><a href="/kids-girls-fashion/" class="s-itm" role="menuitem"
                  >Girl's Fashion</a
                ><a href="/boys-fashion/" class="s-itm" role="menuitem">Boys</a
                ><a href="/teen-girls-fashion/" class="s-itm" role="menuitem"
                  >Girls</a
                >
              </div>
              <div class="cat">
                <a href="/luggage-travel-gear/" class="tit" role="menuitem"
                  >LUGGAGE &amp; TRAVEL GEAR</a
                ><a
                  href="/luggage-non-wheeled-backpacks/"
                  class="s-itm"
                  role="menuitem"
                  >Backpacks</a
                ><a href="/luggage-gym-bags/" class="s-itm" role="menuitem"
                  >Gym Bags</a
                ><a class="s-itm" role="menuitem">Laptop Bags</a
                ><a href="/luggage/" class="s-itm" role="menuitem">Luggage</a
                ><a href="/travel-luggage-sets/" class="s-itm" role="menuitem"
                  >Luggage Sets</a
                ><a href="/messenger-bags/" class="s-itm" role="menuitem"
                  >Messenger Bags</a
                >
              </div>
            </div>
          </div>
        </div>
        <a href="/computing/" class="itm" role="menuitem"
          ><svg
            viewBox="0 0 24 24"
            class="ic -mrxs -fsh0"
            width="20"
            height="20"
          >
            <use
              xlink:href="https://www..ug/assets_he/images/i-icons.edbc85eb.svg#cat-computing"
            ></use></svg
          ><span class="text">Computing</span></a
        >
        <div class="sub" role="menu">
          <div class="sub-w">
            <div class="co">
              <div class="cat">
                <a href="/computer-accessories/" class="tit" role="menuitem"
                  >COMPUTERS</a
                ><a href="/laptops/" class="s-itm" role="menuitem"
                  >Computers &amp; Tablets</a
                >
              </div>
              <div class="cat">
                <a href="/computer-data-storage/" class="tit" role="menuitem"
                  >DATA STORAGE</a
                ><a
                  href="/external-solid-state-drives/"
                  class="s-itm"
                  role="menuitem"
                  >External Hard Drives</a
                ><a href="/flash-drives/" class="s-itm" role="menuitem"
                  >USB Flash Drives</a
                >
              </div>
              <div class="cat">
                <a href="/softwares/" class="tit" role="menuitem">SOFTWARE</a
                ><a href="/softwares/" class="s-itm" role="menuitem">Software</a
                ><a
                  href="/business-communication-softwares/"
                  class="s-itm"
                  role="menuitem"
                  >Business &amp; Office</a
                >
              </div>
            </div>
            <div class="co">
              <div class="cat">
                <a href="/printers/" class="tit" role="menuitem">PRINTERS</a
                ><a href="/printers/" class="s-itm" role="menuitem">Printers</a>
              </div>
              <div class="cat">
                <a href="/computing-accessories/" class="tit" role="menuitem"
                  >COMPUTER ACCESSORIES</a
                ><a href="/external-hd/" class="s-itm" role="menuitem"
                  >External Hard Drives</a
                ><a href="/printers/" class="s-itm" role="menuitem">Printers</a
                ><a href="/scanners/" class="s-itm" role="menuitem">Scanners</a
                ><a href="/computer-webcams/" class="s-itm" role="menuitem"
                  >Webcams</a
                ><a href="/desktop-computers/" class="s-itm" role="menuitem"
                  >Monitors</a
                ><a href="/mouse/" class="s-itm" role="menuitem">Mouse</a
                ><a
                  href="/laptop-bags-cases-sleeves/"
                  class="s-itm"
                  role="menuitem"
                  >Laptop Bags</a
                >
              </div>
            </div>
          </div>
        </div>
        <a href="/sporting-goods/" class="itm" role="menuitem"
          ><svg
            viewBox="0 0 24 24"
            class="ic -mrxs -fsh0"
            width="20"
            height="20"
          >
            <use
              xlink:href="https://www..ug/assets_he/images/i-icons.edbc85eb.svg#cat-fitness"
            ></use></svg
          ><span class="text">Sporting Goods</span></a
        >
        <div class="sub" role="menu">
          <div class="sub-w">
            <div class="co">
              <div class="cat">
                <a
                  href="/sporting-goods-outdoor-adventure/"
                  class="tit"
                  role="menuitem"
                  >OUTDOOR &amp; ADVENTURE</a
                ><a
                  href="/sporting-goods-outdoor-adventure-running/"
                  class="s-itm"
                  role="menuitem"
                  >Running</a
                >
              </div>
              <div class="cat">
                <a
                  href="/sporting-goods-outdoor-recreation/"
                  class="tit"
                  role="menuitem"
                  >OUTDOOR RECREATION</a
                ><a href="/cycling/" class="s-itm" role="menuitem">Cycling</a
                ><a href="/water-sports/" class="s-itm" role="menuitem"
                  >Water Sports</a
                ><a
                  href="/outdoor-recreation-camping-hiking/"
                  class="s-itm"
                  role="menuitem"
                  >Camping &amp; Hiking</a
                ><a href="/skate-scooters/" class="s-itm" role="menuitem"
                  >Skates, Skateboards &amp; Scooters</a
                >
              </div>
            </div>
            <div class="co">
              <div class="cat">
                <a
                  href="/sporting-goods-racquet-sports/"
                  class="tit"
                  role="menuitem"
                  >RACQUET SPORTS</a
                ><a
                  href="/sporting-goods-racquet-sports-badminton/"
                  class="s-itm"
                  role="menuitem"
                  >Badminton</a
                >
              </div>
              <div class="cat">
                <a href="/sports-fitness/" class="tit" role="menuitem"
                  >SPORTS &amp; FITNESS</a
                ><a href="/exercise-fitness/" class="s-itm" role="menuitem"
                  >Exercise &amp; Fitness</a
                ><a href="/golf/" class="s-itm" role="menuitem">Golf</a
                ><a
                  href="/sports-fitness-other-sports/"
                  class="s-itm"
                  role="menuitem"
                  >Other Sports</a
                ><a href="/swimming/" class="s-itm" role="menuitem">Swimming</a
                ><a href="/team-sports/" class="s-itm" role="menuitem"
                  >Team Sports</a
                >
              </div>
            </div>
          </div>
        </div>
        <a href="/baby-products/" class="itm" role="menuitem"
          ><svg
            viewBox="0 0 24 24"
            class="ic -mrxs -fsh0"
            width="20"
            height="20"
          >
            <use
              xlink:href="https://www..ug/assets_he/images/i-icons.edbc85eb.svg#cat-baby"
            ></use></svg
          ><span class="text">Baby Products</span></a
        >
        <div class="sub" role="menu">
          <div class="sub-w">
            <div class="co">
              <div class="cat">
                <a href="/kiddies-accessories/" class="tit" role="menuitem"
                  >APPAREL &amp; ACCESSORIES</a
                ><a href="/baby-boys-fashion/" class="s-itm" role="menuitem"
                  >Baby Boys</a
                ><a
                  href="/baby-girl-fashion-accessories/"
                  class="s-itm"
                  role="menuitem"
                  >Baby Girls</a
                >
              </div>
              <div class="cat">
                <a href="/baby-feeding-products/" class="tit" role="menuitem"
                  >FEEDING</a
                ><a href="/baby-feeding-foods/" class="s-itm" role="menuitem"
                  >Baby Food</a
                ><a href="/baby-bottle-feeding/" class="s-itm" role="menuitem"
                  >Bottle-Feeding</a
                ><a href="/baby-breastfeeding/" class="s-itm" role="menuitem"
                  >Breastfeeding</a
                ><a href="/baby-solid-feeding/" class="s-itm" role="menuitem"
                  >Solid Feeding</a
                >
              </div>
            </div>
            <div class="co">
              <div class="cat">
                <a href="/baby-bathing-skin-care/" class="tit" role="menuitem"
                  >BATHING &amp; SKIN CARE</a
                ><a href="/baby-bathroom-safety/" class="s-itm" role="menuitem"
                  >Bathroom Safety</a
                ><a href="/baby-gift-sets/" class="s-itm" role="menuitem"
                  >Gift Sets</a
                ><a
                  href="/baby-grooming-healthcare-kits/"
                  class="s-itm"
                  role="menuitem"
                  >Grooming &amp; Healthcare Kits</a
                ><a
                  href="/baby-non-slip-bath-mats/"
                  class="s-itm"
                  role="menuitem"
                  >Non-Slip Bath Mats</a
                ><a href="/baby-skincare-shampoo/" class="s-itm" role="menuitem"
                  >Shampoo</a
                ><a href="/baby-skincare/" class="s-itm" role="menuitem"
                  >Skin Care</a
                ><a
                  href="/baby-washcloths-towels/"
                  class="s-itm"
                  role="menuitem"
                  >Wash Cloths &amp; Towels</a
                >
              </div>
              <div class="cat">
                <a href="/baby-health-care/" class="tit" role="menuitem"
                  >HEALTH &amp; BABY CARE</a
                ><a href="/baby-thermometers/" class="s-itm" role="menuitem"
                  >Thermometers</a
                ><a href="/baby-toothbrushes/" class="s-itm" role="menuitem"
                  >Tooth Brushes</a
                ><a
                  href="/baby-teethers-teething-relief/"
                  class="s-itm"
                  role="menuitem"
                  >Teethers &amp; Teething Relief</a
                >
              </div>
            </div>
            <div class="co">
              <div class="cat">
                <a href="/baby-diapering/" class="tit" role="menuitem"
                  >DIAPERING</a
                ><a href="/baby-diaper-bags/" class="s-itm" role="menuitem"
                  >Diaper Bags</a
                ><a
                  href="/baby-disposable-diapers/"
                  class="s-itm"
                  role="menuitem"
                  >Disposable Diapers</a
                ><a href="/baby-cloth-diapers/" class="s-itm" role="menuitem"
                  >Cloth Diapers</a
                >
              </div>
            </div>
          </div>
        </div>
        <a href="/video-games/" class="itm" role="menuitem"
          ><svg
            viewBox="0 0 24 24"
            class="ic -mrxs -fsh0"
            width="20"
            height="20"
          >
            <use
              xlink:href="https://www..ug/assets_he/images/i-icons.edbc85eb.svg#cat-games"
            ></use></svg
          ><span class="text">Gaming</span></a
        >
        <div class="sub" role="menu">
          <div class="sub-w">
            <div class="co">
              <div class="cat">
                <a href="/pc-gaming/" class="tit" role="menuitem">PC GAMING</a
                ><a href="/gaming-pc-accessories/" class="s-itm" role="menuitem"
                  >Accessories</a
                ><a href="/pc-gaming-games/" class="s-itm" role="menuitem"
                  >Games</a
                >
              </div>
            </div>
            <div class="co">
              <div class="cat">
                <a href="/playstation-4/" class="tit" role="menuitem"
                  >PlayStation 4</a
                ><a href="/playstation4-consoles/" class="s-itm" role="menuitem"
                  >Consoles</a
                ><a href="/playstation-4-games/" class="s-itm" role="menuitem"
                  >Games</a
                >
              </div>
            </div>
            <div class="co">
              <div class="cat">
                <a href="/xbox-one/" class="tit" role="menuitem">Xbox One</a
                ><a href="/xbox-one-consoles/" class="s-itm" role="menuitem"
                  >Consoles</a
                ><a href="/xboxone-accessories/" class="s-itm" role="menuitem"
                  >Accessories</a
                ><a href="/xbox-one-games/" class="s-itm" role="menuitem"
                  >Games</a
                >
              </div>
            </div>
          </div>
        </div>
        <a href="/patio-lawn-garden/" class="itm" role="menuitem"
          ><svg
            viewBox="0 0 24 24"
            class="ic -mrxs -fsh0"
            width="20"
            height="20"
          >
            <use
              xlink:href="https://www..ug/assets_he/images/i-icons.edbc85eb.svg#cat-groceries"
            ></use></svg
          ><span class="text">Garden &amp; Outdoors</span></a
        >
        <div class="sub" role="menu">
          <div class="sub-w">
            <div class="co">
              <div class="cat">
                <a href="/gardening-lawn-care/" class="tit" role="menuitem"
                  >GARDEN &amp; LAWN CARE</a
                ><a href="/watering-equipment/" class="s-itm" role="menuitem"
                  >Watering Equipment</a
                ><a href="/weed-moss-control/" class="s-itm" role="menuitem"
                  >Weed &amp; Moss Control</a
                >
              </div>
            </div>
            <div class="co">
              <div class="cat">
                <a
                  href="/generators-portable-power/"
                  class="tit"
                  role="menuitem"
                  >GENERATORS &amp; PORTABLE POWERS</a
                ><a
                  href="/rechargeable-power-supplies/"
                  class="s-itm"
                  role="menuitem"
                  >Rechargeable Power Supplies</a
                ><a href="/solar-wind-power/" class="s-itm" role="menuitem"
                  >Solar &amp; Wind Power</a
                >
              </div>
            </div>
          </div>
        </div>
        <a class="itm" role="menuitem" tabindex="0"
          ><svg
            viewBox="0 0 24 24"
            class="ic -mrxs -fsh0"
            width="20"
            height="20"
          >
            <use
              xlink:href="https://www..ug/assets_he/images/i-icons.edbc85eb.svg#cat-othercategories"
            ></use></svg
          ><span class="text">Other categories</span></a
        >
        <div class="sub" role="menu">
          <div class="sub-w">
            <div class="co _fl">
              <div class="cat">
                <a href="https://www..ug/-mall/" class="tit" role="menuitem"
                  >Official stores</a
                ><a class="s-itm" role="menuitem">Phones &amp; Tablets</a
                ><a class="s-itm" role="menuitem">ELECTRONICS</a
                ><a class="s-itm" role="menuitem">SUPERMARKET</a>
              </div>
              <div class="cat">
                <a href="https://www..ug/-global/" class="tit" role="menuitem"
                  >Jumia Global</a
                ><a
                  href="/womens-fashion/?shipped_from=_global"
                  class="s-itm"
                  role="menuitem"
                  >Women's Fashion</a
                ><a
                  href="/mens-fashion/?shipped_from=_global"
                  class="s-itm"
                  role="menuitem"
                  >Men's Fashion</a
                ><a
                  href="/teen-girls-fashion/?shipped_from=_global"
                  class="s-itm"
                  role="menuitem"
                  >Girl's Fashion</a
                ><a
                  href="/boys-fashion/?shipped_from=_global"
                  class="s-itm"
                  role="menuitem"
                  >Boy's Fashion</a
                ><a
                  href="/luggage-travel-gear/?shipped_from=_global"
                  class="s-itm"
                  role="menuitem"
                  >Luggage</a
                ><a
                  href="/health-beauty/?shipped_from=_global"
                  class="s-itm"
                  role="menuitem"
                  >Health &amp; Beauty</a
                >
              </div>
              <div class="cat">
                <a href="/pet-supplies/" class="tit" role="menuitem"
                  >Pet Supplies</a
                >
              </div>
              <div class="cat">
                <a href="/miscellaneous/" class="tit" role="menuitem"
                  >Miscellaneous</a
                >
              </div>
              <div class="cat">
                <a href="/toys-games/" class="tit" role="menuitem"
                  >Toys &amp; Games</a
                ><a class="s-itm" role="menuitem">Toys</a
                ><a href="/kids-games/" class="s-itm" role="menuitem">Games</a
                ><a href="/outdoor-sports-toys/" class="s-itm" role="menuitem"
                  >Sports &amp; Outdoor Play</a
                >
              </div>
              <div class="cat">
                <a href="/automobile/" class="tit" role="menuitem">Automobile</a
                ><a
                  href="/car-electronics-accessories/"
                  class="s-itm"
                  role="menuitem"
                  >Car Electronics &amp; Accessories</a
                >
              </div>
              <div class="cat">
                <a href="/musical-instruments/" class="tit" role="menuitem"
                  >Musical Instruments</a
                >
              </div>
              <div class="cat">
                <a href="/books-movies-music/" class="tit" role="menuitem"
                  >Books, Movies and Music</a
                >
              </div>
              <div class="cat">
                <a href="/services/" class="tit" role="menuitem">Services</a>
              </div>
              <div class="cat">
                <a href="/industrial-scientific/" class="tit" role="menuitem"
                  >Industrial &amp; Scientific</a
                >
              </div>
              <div class="cat">
                <a href="/livestock/" class="tit" role="menuitem">Livestock</a>
              </div>
              <div class="cat">
                <a href="/wholesale/" class="tit" role="menuitem">Wholesale</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Icon from "../Icons/icon.vue";
// import CatIcon from "../Icons/category";
export default {
  name: 'Welcome',
  components: {
    // CatIcon,
    // Icon,
  },

  props: {},

  data() {
    return {
      hover: false,
      isGrocery: true,
    };
  },
  methods: {
    showGrocery() {
      this.isGrocery = true;
    },
  },
};
</script>

<style scoped>

.itm {
  position: relative;
  display: inline-block;
}

.sub {
  padding: 0;
  display: none;
  position: absolute;
  background-color: #fff;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 100;
  margin-left: 200px;
  width: 600px;
  height: 300px;
}

.itm:hover .sub {
  display: block;
}
.flyout .itm,
.flyout-w {
  width: 206px;
  position: relative;
  box-sizing: border-box;
  display: block;
}

.flyout .itm {
  height: 32px;
  align-items: center;
  display: flex;
}

.itm,
.flyout {
  padding-left: 8px;
}
.flyout {
  top: 0;
  left: 0;
  /* position: absolute;
    z-index: 50; */
  height: 384px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.05);
  flex-wrap: wrap;
  flex-direction: column;
  display: flex;
  /* overflow: hidden; */
  background-color: #fff;
  border-radius: 4px;
}

.flyout .sub-w {
  top: 0;
  height: 100%;
  width: 728px;
  display: flex;
  box-sizing: border-box;
  background-color: #fff;
  border: 1px solid #e9e9e9;
  z-index: 1000;
}
/* .sub-w {
    position: absolute;
    height: 100%;
    width: 728px;
    background-color: rgb(142, 20, 20);
    border: 1px solid #e9e9e9;
    z-index: 5000;
} */

.flyout .co {
  width: 33.3333333333%;
}

.flyout .cat {
  padding-left: 8px;
  padding-bottom: 16px;
  padding-right: 8px;
  padding-top: 4px;
}

.flyout .tit {
  text-overflow: ellipsis;
  white-space: nowrap;
  text-transform: uppercase;
  font-weight: 500;
  padding-top: 4px;
  overflow: hidden;
  display: block;
}

.itm:hover .sub-w {
  visibility: visible;
  position: absolute;
  top: 0;
  left: 0;
  margin-left: 0;
  background-color: #fff;
  display:flex;
  border: 1px solid #e9e9e9;
  z-index: 1000;
}
</style>
