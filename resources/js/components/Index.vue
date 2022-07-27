<template>
<MainFrame>
    <div class="bg-gradient-to-r from-sky-500 to-indigo-500bg-no-repeat bg-cover bg-center h-100vh px-1">

        <div class="home-screen-main h-[517px] p-1">
            <!-- <section class=""> -->
            <!-- <Categorymenu class="w-[240px]" /> -->
            <div class="bg-white py-3 rounded-md hidden lg:block h-[516px] text-xs overflow-hidden">

                <!-- <p class="flex items-center px-4">
        <CatIcon class="h-6 w-6 mr-2" />
        Categories
    </p> -->

                <div class="flyout-w flex-shrink-0">
                    <div class="flyout" role="menu">
                        <button @click="showGrocery">groce</button>
                        <!-- <a href="/groceries/" class="itm" role="menuitem">
                <svg viewBox="0 0 24 24" class="ic -mrxs -fsh0" width="20" height="20">
                    <use xlink:href="https://www..ug/assets_he/images/i-icons.edbc85eb.svg#cat-groceries"></use>
                </svg>
                <span class="text">Supermarket</span>
            </a> -->
                        <div class="sub border-2 border-red-500" role="menu">
                            <div class="sub-w border-2 border-yellow-400">
                                <div class="co">
                                    <div class="cat">
                                        <a href="/food-cupboard-supplies/" class="tit" role="menuitem">FOOD CUPBOARD</a>
                                        <a href="/sugar-3999/" class="s-itm" role="menuitem">Sugar</a>
                                        <a href="/flours-meals/" class="s-itm" role="menuitem">Flours</a>
                                        <a href="/dried-beans-grains-rice/" class="s-itm" role="menuitem">Dried Beans, Grains &amp; Rice</a>
                                        <a href="/crisps-snacks-nuts/" class="s-itm" role="menuitem">Snacks</a>
                                        <a href="/cooking-oil/" class="s-itm" role="menuitem">Cooking Oil</a><a href="/soft-drinks/" class="s-itm" role="menuitem">Soft Drinks</a><a href="/juice-drinks/" class="s-itm" role="menuitem">Fruit Juice</a><a href="/water/" class="s-itm" role="menuitem">Water</a><a href="/hot-beverages-coffee-tea-cocoa/" class="s-itm" role="menuitem">Coffee, Tea &amp; Cocoa</a><a href="/grocery-milk-cream/" class="s-itm" role="menuitem">Milk &amp; Cream</a><a href="/pasta-1593/" class="s-itm" role="menuitem">Pasta</a><a href="/breakfast-foods/" class="s-itm" role="menuitem">Breakfast Foods</a><a href="/cooking-spices/" class="s-itm" role="menuitem">Spices</a>
                                    </div>
                                </div>
                                <div class="co">
                                    <div class="cat">
                                        <a href="/beers-wine-spirits/" class="tit" role="menuitem">BEERS, WINES &amp; SPIRITS</a><a href="/vodka/" class="s-itm" role="menuitem">Vodka</a><a href="/red-wine/" class="s-itm" role="menuitem">Red White</a><a href="/liqueor/" class="s-itm" role="menuitem">Liquor</a><a href="/beers/" class="s-itm" role="menuitem">Beers</a><a href="/white-wine/" class="s-itm" role="menuitem">White Wine</a><a href="/whiskey/" class="s-itm" role="menuitem">Whiskey</a><a href="/champagne-sparkling-wine/" class="s-itm" role="menuitem">Champagne</a>
                                    </div>
                                    <div class="cat">
                                        <a href="/household-supplies/" class="tit" role="menuitem">CLEANING</a><a href="/laundry-supplies/" class="s-itm" role="menuitem">Laundry</a><a href="/household-air-fresheners/" class="s-itm" role="menuitem">Household Air Fresheners</a><a href="/household-toilet-cleaners/" class="s-itm" role="menuitem">Toilet Cleaners</a><a href="/papers-rolls/" class="s-itm" role="menuitem">Toilet Paper,Wipes &amp; Kitchen Towels</a><a href="/household-bathroom-toilet-cleaners/" class="s-itm" role="menuitem">Household Cleaning</a>
                                    </div>
                                </div>
                                <div class="co">
                                    <div class="cat">
                                        <a href="/baby-products/" class="tit" role="menuitem">BABY PRODUCTS</a><a href="/baby-disposable-diapers/" class="s-itm" role="menuitem">Disposable Diapers</a><a href="/baby-wipes-refills/" class="s-itm" role="menuitem">Wipes &amp; Refills</a><a href="/baby-feeding-products/" class="s-itm" role="menuitem">Feeding</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <a class="itm" role="menuitem" tabindex="0">
                            <svg viewBox="0 0 24 24" class="ic -mrxs -fsh0" width="20" height="20">
                                <use xlink:href="https://www..ug/assets_he/images/i-icons.edbc85eb.svg#cat-othercategories"></use>
                            </svg>
                            <span class="text">Other categories</span></a>
                        <div class="sub" role="menu">
                            <div class="sub-w">
                                <div class="co flex">
                                    <div class="cat">
                                        <a href="https://www..ug/-mall/" class="tit" role="menuitem">Official stores</a>
                                        <a class="s-itm" role="menuitem">Phones &amp; Tablets</a><a class="s-itm" role="menuitem">ELECTRONICS</a><a class="s-itm" role="menuitem">SUPERMARKET</a>
                                    </div>
                                    <div class="cat">
                                        <a href="https://www..ug/-global/" class="tit" role="menuitem">Jumia Global</a><a href="/womens-fashion/?shipped_from=_global" class="s-itm" role="menuitem">Women's Fashion</a><a href="/mens-fashion/?shipped_from=_global" class="s-itm" role="menuitem">Men's Fashion</a><a href="/teen-girls-fashion/?shipped_from=_global" class="s-itm" role="menuitem">Girl's Fashion</a><a href="/boys-fashion/?shipped_from=_global" class="s-itm" role="menuitem">Boy's Fashion</a><a href="/luggage-travel-gear/?shipped_from=_global" class="s-itm" role="menuitem">Luggage</a><a href="/health-beauty/?shipped_from=_global" class="s-itm" role="menuitem">Health &amp; Beauty</a>
                                    </div>
                                    <div class="cat">
                                        <a href="/pet-supplies/" class="tit" role="menuitem">Pet Supplies</a>
                                    </div>
                                    <div class="cat">
                                        <a href="/miscellaneous/" class="tit" role="menuitem">Miscellaneous</a>
                                    </div>
                                    <div class="cat">
                                        <a href="/toys-games/" class="tit" role="menuitem">Toys &amp; Games</a><a class="s-itm" role="menuitem">Toys</a><a href="/kids-games/" class="s-itm" role="menuitem">Games</a><a href="/outdoor-sports-toys/" class="s-itm" role="menuitem">Sports &amp; Outdoor Play</a>
                                    </div>
                                    <div class="cat">
                                        <a href="/automobile/" class="tit" role="menuitem">Automobile</a><a href="/car-electronics-accessories/" class="s-itm" role="menuitem">Car Electronics &amp; Accessories</a>
                                    </div>
                                    <div class="cat">
                                        <a href="/musical-instruments/" class="tit" role="menuitem">Musical Instruments</a>
                                    </div>
                                    <div class="cat">
                                        <a href="/books-movies-music/" class="tit" role="menuitem">Books, Movies and Music</a>
                                    </div>
                                    <div class="cat">
                                        <a href="/services/" class="tit" role="menuitem">Services</a>
                                    </div>
                                    <div class="cat">
                                        <a href="/industrial-scientific/" class="tit" role="menuitem">Industrial &amp; Scientific</a>
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

            <!-- slider section -->
            <div class="w-full basis-3/5 lg:basis-3/5 lg:space-y-4 md:block md:w-full sm:w-full h-[476px] relative box-border m-0 p-0">
                <div class="hidden md:block">
                    <div class="hidden lg:block justify-between sm:px-0 px-6 font-bold py-3 sm:py-0">
                        <a href="#" class="hover:text-red-500 hover:font-bold">LIVE</a>
                        <a href="#" class="hover:text-red-500 hover:font-bold">Flash Deals</a>
                        <a href="#" class="hover:text-red-500 hover:font-bold">Stories You'll Love</a>
                        <a href="#" class="hover:text-red-500 hover:font-bold">New user Zone</a>
                    </div>
                </div>

                <div class="h-[270px]">
                    <Sliders />
                </div>


                <div class="absolute hidden md:block sm:hidden box-border w-full h-[190px] m-h-[169px]">
                    <div class=" w-full flex items-center py-4 px-[12px] h-full overflow-hidden
                    bg-gradient-to-r from-yellow-500 to-red-500 rounded-lg">
                        <div class="w-1/4 space-y-2">
                            <h5 class="font-bold text-white">Welcome newcommers</h5>
                            <p class="text-white">
                                Exclusive prices for new users: act now!
                            </p>
                            <button class="bg-red-500 text-white py-4 px-2">
                                Get your coupon
                            </button>
                        </div>

                        <div class="flex w-3/4 space-x-1">
                            <div class="rounded-lg h-40 py-0 w-28 bg-white ">
                                <img src="https://ae04.alicdn.com/kf/S75592416283e4801a9044766f51a8bb0B.jpg_120x120Q90.jpg_.webp" alt="" srcset="" />

                                <div class="mx-auto px-4 py-1">
                                    <p class="font-bold text-white bg-red-500 rounded-lg text-sm px-2">
                                        Ush 500
                                    </p>
                                    <p class="w-full text-gray-600 line-through text-sm font-medium">
                                        Ush 500
                                    </p>
                                </div>
                            </div>
                            <div class="rounded-lg h-40 py-0 w-28 bg-white">
                                <img src="https://ae04.alicdn.com/kf/S75592416283e4801a9044766f51a8bb0B.jpg_120x120Q90.jpg_.webp" alt="" srcset="" />

                                <div class="mx-auto px-4 py-1">
                                    <p class="font-bold text-white bg-red-500 rounded-lg text-sm px-2">
                                        Ush 500
                                    </p>
                                    <p class="w-full text-gray-600 line-through text-sm font-medium">
                                        Ush 500
                                    </p>
                                </div>
                            </div>
                            <div class="rounded-lg h-40 py-0 w-28 bg-white">
                                <img src="https://ae04.alicdn.com/kf/S75592416283e4801a9044766f51a8bb0B.jpg_120x120Q90.jpg_.webp" alt="" srcset="" />

                                <div class="mx-auto px-4 py-1">
                                    <p class="font-bold text-white bg-red-500 rounded-lg text-sm px-2">
                                        Ush 500
                                    </p>
                                    <p class="w-full text-gray-600 line-through text-sm font-medium">
                                        Ush 500
                                    </p>
                                </div>
                            </div>
                            <div class="rounded-lg h-40 py-0 w-28 bg-white">
                                <img src="https://ae04.alicdn.com/kf/S75592416283e4801a9044766f51a8bb0B.jpg_120x120Q90.jpg_.webp" alt="" srcset="" />

                                <div class="mx-auto px-4 py-1">
                                    <p class="font-bold text-white bg-red-500 rounded-lg text-sm px-2">
                                        Ush 500
                                    </p>
                                    <p class="w-full text-gray-600 line-through text-sm font-medium">
                                        Ush 500
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div> -->

            <!-- welcome profile section -->
           <div class="welcome">
                <div class="w-full bg-white rounded-lg overflow-hidden">
                    <div class="mx-auto bg-gray-300 rounded-full h-16 w-16 bg-[url('https://ae01.alicdn.com/kf/Hf768b4fa794e44bfb7cc86e4a528a035h.png')]"></div>
                    <p class="font-bold text-lg text-center py-2">Welcome to LaraExpress</p>
                    <div class="flex justify-around items-center mt-4">
                        <button class="text-white font-bold bg-gradient-to-r from-red-500 to-yellow-400 px-8 py-1 rounded-full">Join</button>
                        <button class="text-black font-bold bg-gray-200 px-8 py-1 rounded-full">Sign In</button>
                    </div>

                    <div class="rounded-lg bg-yellow-300 h-[270px] my-8 mx-4 p-3 py-6 space-y-4 bg-[url('https://ae01.alicdn.com/kf/H4d1fc82a600f4c51b3a3b4c7a5edb3a6G.jpg_Q90.jpg_.webp')]">
                        <div>
                            <p class="text-sm text-white">Exclusive Offers</p>
                            <h3 class="text-xl font-bold text-white">Just for new LaraExpress users</h3>
                        </div>
                        <div class="flex">
                            <div class="relative rounded-lg h-auto py-2 w-28 bg-white border-2 border-blue-500">
                                <img src="https://ae01.alicdn.com/kf/H4d1fc82a600f4c51b3a3b4c7a5edb3a6G.jpg_Q90.jpg_.webp" alt="" class="absolute inset-0 rounded-lg" />

                                <div class="relative top-14 mx-auto px-4 py-1 z-50">
                                    <p class="w-full font-bold text-white bg-red-500 rounded-lg text-xs text-center">Ush 20,000</p>
                                </div>
                            </div>
                            <div class="relative rounded-lg h-auto py-2 w-28 bg-white border-2 border-blue-500">
                                <img src="https://ae01.alicdn.com/kf/H4d1fc82a600f4c51b3a3b4c7a5edb3a6G.jpg_Q90.jpg_.webp" alt="" class="absolute inset-0 rounded-lg" />
                                <div class="relative top-14 mx-auto px-4 py-1 z-50">
                                    <p class="w-full font-bold text-white bg-red-500 rounded-lg text-xs text-center">Ush 20,000</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <!-- </section> -->
        </div>

        <!-- begin product section -->
        <div class="product-section">
            <div class="grid grid-cols-4 gap-3 max-w-screen-xl mx-auto p-1">
                <div class="bg-white rounded-md">
                    <a href="https://jumia.nexup.xyz/flash-sale">
                        <div class="servicesdzs flex flex-row sm:flex-row content-center items-center p-1 justify-start">
                            <img src="https://jumia.laraup.com/upload/images/services/jumiaone_2.png" alt="Airtime &amp; Bills">
                            <span class="servicesdz">Airtime &amp; Bills</span></div>
                    </a>
                </div>
                <div class="bg-white rounded-md p-2">2</div>
                <div class="bg-white rounded-md p-2">3</div>
                <div class="bg-white rounded-md p-2">4</div>
            </div>

            <FlashDeals />

            <div class="grid  md:grid-cols-2 lg:grid-cols-2 max-w-screen-xl mx-auto rounded-md  mt-1 px-1 gap-2 bg-white">

                <div class="shadow rounded-md py-1">
                    <a title="j01" href="#">
                        <img width="" src="http://jumia.laraup.com/upload/images/banner/7299_DB1.jpg" class="w-full rounded-md">
                        <p class="text-sm" style="text-align: center;color: #333;"></p>
                    </a>
                </div>

                <div class="shadow rounded-md py-1 ">
                    <a title="j01" href="#">
                        <img width="" src="http://jumia.laraup.com/upload/images/banner/7299_DB1.jpg" class="w-full rounded-md">
                        <p style="text-align: center;color: #333;font-size: 14px;"></p>
                    </a>
                </div>

            </div>

            <div class="showall space-y-4">
                <CategoryProducts />
            </div>
        </div>

        <footer class="pb-4 bg-[#323232] text-[#c7c7c7] block box-border text-xs -bg-gy75 -gy3 space-y-5">

            <div class="-bg-gy8 -mbm">
                <div class="row -pvl">
                    <div class="col4 basis-1/4 max-w-1/4 min-w-1/4 w-1/4">
                        <h2 class="font-bold text-lg my-4 text-gray-100">LARAEXPRESS</h2>
                    </div>
                    <div class="col7 -df -d-co -j-bet">

                        <div>
                            <div class="f-t -pbs">New to Jumia?</div>
                            Subscribe to our newsletter to get updates on our latest offers!
                        </div>

                        <form method="post" id="nl-ft-f" action="/newsletter/subscription/default/" class="nl-form _ftr -ptm">

                            <div class="-df -i-start">

                                <div class="nl-fi-w -mrs -fg1">
                                    <label class="nl-lbl -vh-sr" for="fi-nl-ft-email">E-mail</label>

                                    <div class="relative text-gray focus-within:text-gray-200">
                                        <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                                            <button type="submit" class="p-1 focus:outline-none focus:shadow-outline">
                                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6">
                                                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                                </svg>
                                            </button>
                                        </span>
                                        <input type="search" name="q" class="nl-fi" placeholder="Enter email address." autocomplete="off">
                                    </div>
                                </div>

                                <div class="flex box-border text-white">
                                    <button name="gender" value="male" class="nl-btn border-2 border-gray-50">Male</button>
                                    <button name="gender" value="female" class="nl-btn  _sqr -phm">Female</button>
                                </div>

                            </div>

                            <input name="csrfToken" value="a10e77fe7afee70dbc307036052c4d89" type="hidden">

                        </form>

                    </div>

                    <div class="col4 -mla">
                        <div class="-df"><svg viewBox="0 0 40 40" class="ic -fsh0" width="40" height="40">
                                <use xlink:href="https://www.jumia.ug/assets_he/images/i-shop-jumia.85ab1fc3.svg#app"></use>
                            </svg>
                            <div class="-plm">
                                <div class="f-t -pbs">DOWNLOAD JUMIA FREE APP</div>Get access to exclusive offers!
                            </div>
                        </div>
                        <div class="-df -ptm">
                            <a href="https://itunes.apple.com/us/app/jumia-online-shopping/id925015459?mt=8" title="Get it on the App Store" class="brd-btn _sqr ic-link -paxs -dif -mrs" target="_blank" rel="nofollow noopener">
                                <svg viewBox="0 0 88 24" class="ic" width="88" height="22">
                                    <use xlink:href="https://www.jumia.ug/assets_he/images/i-global.cd8c5f0c.svg#appstore">

                                    </use>
                                </svg></a>
                            <a href="https://play.google.com/store/apps/details?id=com.jumia.android&amp;hl=en" title="Get it on Google Play" class="brd-btn _sqr ic-link -paxs -dif" target="_blank" rel="nofollow noopener">
                                <svg viewBox="0 0 93 23" class="ic" width="93" height="22">
                                    <use xlink:href="https://www.jumia.ug/assets_he/images/i-global.cd8c5f0c.svg#googleplay"></use>
                                </svg></a></div>
                    </div>
                </div>
            </div>

            <div class="row2 -pbl w-full mx-auto flex flex-wrap">

                <div class="col4 -df -d-co -pvs">
                    <span class="f-t -pbm">LET US HELP YOU</span>
                    <ul class="-lsn">
                        <li><a class="_link -pbxs" href="https://www.jumia.ug/faq/">Help Center</a></li>
                        <li><a class="_link -pbxs" href="https://www.jumia.ug/sp-contact/">Contact us</a></li>
                        <li><a class="_link -pbxs" href="https://www.jumia.ug/mlp-jumia-anniversary-2022/">How to buy on Jumia</a></li>
                        <li><a class="_link -pbxs" href="https://www.jumia.ug/payment-methods/">Payment Methods</a></li>
                        <li><a class="_link -pbxs" href="https://www.jumia.ug/shipping/">Delivery</a></li>
                        <li><a class="_link -pbxs" href="https://www.jumia.ug/delivery-timeline/">Delivery Timelines</a></li>
                        <li><a class="_link -pbxs" href="https://www.jumia.ug/returns-refunds/">Return Policy</a></li>
                        <li><a class="_link -pbxs" href="https://docs.google.com/forms/d/1ZGmkgTJQuFr5HL71cszUGg-kWlgGJBjb_mS_yyLWlEg/">Report a Product</a></li>
                    </ul>
                </div>

                <div class="col4 -df -d-co -pvs">
                    <span class="f-t -pbm">ABOUT JUMIA UGANDA</span>
                    <ul class="-lsn">
                        <li><a class="_link -pbxs" href="https://www.jumia.ug/about-us/">About us</a></li>
                        <li><a class="_link -pbxs" href="https://www.jumia.ug/careers/">Jumia Careers</a></li>
                        <li><a class="_link -pbxs" href="https://www.jumia.ug/ipr-protection-policy/">IPR Protection Policy</a></li>
                        <li><a class="_link -pbxs" href="https://www.jumia.ug/terms-and-conditions/">Terms and Conditions</a></li>
                        <li><a class="_link -pbxs" href="https://www.jumia.ug/sp-Dispute-Resolution-Policy/">Dispute Resolution Policy</a></li>
                        <li><a class="_link -pbxs" href="https://www.jumia.ug/sp-Privacy/">Privacy policy</a></li>
                        <li><a class="_link -pbxs" href="https://www.jumia.ug/sp-Cookie/">Cookie Notice</a></li>
                        <li><a class="_link -pbxs" href="https://www.jumia.ug/mlp-jumia-free-delivery/">Free Delivery</a></li>
                        <li><a class="_link -pbxs" href="https://www.jumia.ug/flash-sales/">Flash Sales</a></li>
                    </ul>
                </div>
                <div class="col4 -df -d-co -pvs">
                    <span class="f-t -pbm">MAKE MONEY WITH US</span>
                    <ul class="-lsn">
                        <li><a class="_link -pbxs" href="/sell-on-jumia/">Sell on LaraExpress</a></li>
                        <li><a class="_link -pbxs" href="/jforce/">Become a Sales Consultant</a></li>
                        <li><a class="_link -pbxs" href="#">Become a Logistics Service Partner</a></li>
                        <li><a class="_link -pbxs" href="#">Become a LaraExpress Delivery Agent</a></li>
                    </ul>
                </div>
                <div class="col4 row2 -c-start -pvs"><span class="f-t col16 -pbm">LaraExpress INTERNATIONAL</span>
                    <ul class="col5 -df -d-co -lsn">
                        <li><a class="_link -pbxs" href="#">Algerie</a></li>
                        <li><a class="_link -pbxs" href="#">Côte d'Ivoire</a></li>
                        <li><a class="_link -pbxs" href="#">Egypt</a></li>
                        <li><a class="_link -pbxs" href="#">Ghana</a></li>
                        <li><a class="_link -pbxs" href="#">Kenya</a></li>
                    </ul>
                </div>
            </div>

            <div class="row -pbl">
                <div class="col4 row">
                    <div class="f-t col16 -pbm">FOLLOW US</div>
                    <div class="col16 -phn -fs0"><a href="https://www.facebook.com/JumiaUG/" title="Facebook Jumia Uganda" class="ic-link -pas" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" class="ic" width="26" height="26">
                                <use xlink:href="https://www.jumia.ug/assets_he/images/i-icons.edbc85eb.svg#soc-facebook"></use>
                            </svg></a><a href="https://twitter.com/JumiaUG/" title="Twitter Jumia Uganda" class="ic-link -pas" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" class="ic" width="26" height="26">
                                <use xlink:href="https://www.jumia.ug/assets_he/images/i-icons.edbc85eb.svg#soc-twitter"></use>
                            </svg></a><a href="https://www.instagram.com/jumiaug/" title="Instagram Jumia Uganda" class="ic-link -pas" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" class="ic" width="26" height="26">
                                <use xlink:href="https://www.jumia.ug/assets_he/images/i-icons.edbc85eb.svg#soc-instagram"></use>
                            </svg></a><a href="https://www.youtube.com/channel/UC4q9zJvYtaJUaTUGKV1CvVg" title="Youtube Jumia Uganda" class="ic-link -pas" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" class="ic" width="26" height="26">
                                <use xlink:href="https://www.jumia.ug/assets_he/images/i-icons.edbc85eb.svg#soc-youtube"></use>
                            </svg></a><a href="https://www.linkedin.com/company/jumia-ug" title="Linkedin Jumia Uganda" class="ic-link -pas" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" class="ic" width="26" height="26">
                                <use xlink:href="https://www.jumia.ug/assets_he/images/i-icons.edbc85eb.svg#soc-linkedin"></use>
                            </svg></a></div>
                </div>
                <div class="col12 row">
                    <div class="f-t col16 -pbm">PAYMENT METHODS</div>
                    <div class="col16 -phn -df -fw-w"><a href="/payment-methods/" title="Payment on Delivery" class="ic-link -pas"><svg viewBox="0 0 24 24" class="ic" width="24" height="24">
                                <use xlink:href="https://www.jumia.ug/assets_he/images/i-global.cd8c5f0c.svg#pay-cashondelivery"></use>
                            </svg></a><a href="/payment-methods/" title="MTN MoMo" class="ic-link -pas"><svg viewBox="0 0 30 24" class="ic" width="30" height="24">
                                <use xlink:href="https://www.jumia.ug/assets_he/images/i-global.cd8c5f0c.svg#pay-mtnmomo"></use>
                            </svg></a><a href="/payment-methods/" title="Airtelmomo" class="ic-link -pas"><svg viewBox="0 0 24 24" class="ic" width="24" height="24">
                                <use xlink:href="https://www.jumia.ug/assets_he/images/i-global.cd8c5f0c.svg#pay-airtelmomo"></use>
                            </svg></a><a href="/payment-methods/" title="Master Card" class="ic-link -pas"><svg viewBox="0 0 36 24" class="ic" width="36" height="24">
                                <use xlink:href="https://www.jumia.ug/assets_he/images/i-global.cd8c5f0c.svg#pay-mastercard"></use>
                            </svg></a><a href="/payment-methods/" title="Visa" class="ic-link -pas"><svg viewBox="0 0 31 24" class="ic" width="31" height="24">
                                <use xlink:href="https://www.jumia.ug/assets_he/images/i-global.cd8c5f0c.svg#pay-visa"></use>
                            </svg></a></div>
                </div>
            </div>
            <div class="vb row -i-ctr -j-ctr _foot _gy7 -hr  -gy3 -mtl">
                <div class="col3 -df -j-start"></div>
                <div class="col10 -df -j-ctr -fs0">
                    <a class="vent-link" title="Jumia Food" href="#" rel="nofollow noopener" target="_blank">
                        <svg viewBox="0 0 66 24" class="ic" width="66" height="24">
                            <use xlink:href="#"></use>
                        </svg></a>
                    <a class="vent-link" title="Jumia Prime" href="#" rel="nofollow noopener" target="_blank">
                        <svg viewBox="0 0 77 24" class="ic" width="77" height="24">
                            <use xlink:href="#"></use>
                        </svg></a></div>
                <div class="col3 -df -j-end -wt -mla">

                </div>
            </div>
        </footer>

    </div>
</MainFrame>
<!-- <Header /> -->
</template>

<script>
import MainFrame from './MainFrame.vue'
import Header from "./Header";
import Categorymenu from "../components/HeroSection/CategoryMenu.vue";
import Sliders from "../components/HeroSection/HomeSliders";
import JoinAccount from '../components/HeroSection/JoinAccount.vue'
import CategoryProducts from '../components/productsSection/CategoryProductsCarousel.vue'
import FlashDeals from '../components/productsSection/FlashDealsProductsCarousel.vue'
export default {
    name: "Welcome",
    components: {
        MainFrame,
        Header,
        Sliders,
        Categorymenu,
        JoinAccount,
        CategoryProducts,
        FlashDeals
    },

    props: {},
    data() {
        return {
            hover: false,
            isGrocery: false,
        };
    },
    methods: {
        showGrocery() {
            this.isGrocery = true;
        },
    }
};
</script>

<style scoped>
nav.vertical {
    position: fixed;
    bottom: 30px;
    z-index: 9999;
}

.nl-btn {
    @apply px-2 py-1 bg-transparent rounded-sm shadow-sm cursor-pointer uppercase font-medium m-0 overflow-visible;
}

.brd-btn {
    border: 1px solid #fff;
    @apply rounded-sm cursor-pointer uppercase;
}

.-phm {
    @apply px-4
}

.-pbm {
    @apply text-xs bg-[#323232] pb-4;
}

.-pbl {
    @apply py-4 mx-auto max-w-7xl w-full flex box-border text-white;
}

.-pbxs {
    @apply pb-1 normal-case inline-block bg-transparent box-border text-xs;
}

.-bg-gy8 {
    @apply mb-4 box-border bg-[#282828] text-xs text-[#c7c7c7];
}

.-pvl {
    @apply py-6 mx-auto max-w-7xl w-full flex-wrap box-border text-xs text-[#c7c7c7];
}

.-mla {
    @apply ml-auto px-2 box-border
}

.col4 {
    @apply px-0 box-border text-xs text-[#c7c7c7];
}

.col16 {
    flex-basis: 100%;
    max-width: 100%;
    min-width: 100%;
    width: 100%;
}

.col7 {
    flex-basis: 43.75%;
    max-width: 43.75%;
    min-width: 43.75%;
    width: 43.75%;
}

.col10 {
    flex-basis: 62.5%;
    max-width: 62.5%;
    min-width: 62.5%;
    width: 62.5%;
}

.f-t {
    @apply text-white uppercase font-bold;
}

.home-screen-main {
    @apply flex justify-between w-full lg:space-x-4 max-w-screen-xl mx-auto my-4;
}

.row {
    @apply p-4 max-w-7xl w-full mx-auto flex;
}

.-d-co {
    @apply flex flex-col justify-between basis-[25%] max-w-[25%] min-w-[25%] w-[25%] px-1 box-border text-xs;
}

.nl-form {
    @apply pt-4 box-border text-xs text-[#c7c7c7];
}

.nl-fi-w {
    @apply mr-2 grow pb-5 relative box-border text-xs
}

.-vh-sr {
    @apply z-[-1] absolute box-border text-xs text-[#c7c7c7];
}

.nl-fi {
    @apply py-2 text-sm border-2 text-white bg-white leading-5 rounded-md pl-10 w-full shadow focus:outline-none focus:bg-white m-0 overflow-visible focus:text-gray-900 box-border;
}

.-i-start {
    @apply flex flex box-border text-xs text-[#c7c7c7];
}

.-df {
    @apply flex;
}

.welcome {
    @apply w-1/5 hidden lg:block h-[516px] right-0;
}

.-gy3 {
    color: #c7c7cd;
}

#jm .-pbl,
#jm .-pvl {
    padding-bottom: 24px;
    margin-left: auto;
    margin-right: auto;
}

#jm .-lsn,
.dtls .smry {
    list-style: none;
}

a {
    text-decoration: none;
}

ul {
    @apply m-0 p-0 box-border block
}

.-phn {
    @apply px-0 flex flex-wrap;
}

li {
    display: list-item;
    text-align: -webkit-match-parent;
}

.-mtl {
    margin-top: 24px;
}

.-i-ctr {
    align-items: center;
    justify-content: center;
}

.flyout-w {
    width: 206px;
    position: relative;
    box-sizing: border-box;
}

.itm,
.flyout {
    padding-left: 8px;
}
.flyout {
    width: 100%;
    top: 0;
    left: 0;
    position: absolute;
    z-index: 50;
    height: 384px;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.05);
    flex-wrap: wrap;
    flex-direction: column;
    display: flex;
    overflow: hidden;
    background-color: #fff;
    border-radius: 4px;
}

.sub-w {
    height: 100%;
    width: 728px;
    /* display: flex; */
    box-sizing: border-box;
    background-color: rgb(142, 20, 20);
    border: 1px solid #e9e9e9;
    /* visibility: visible; */
    display: block;
    z-index: 1000;
}

 .sub {
    position: absolute;
    left: 230px;
    transition: all 0s 0.2s;
    padding: 0;
    width: 0;
    height: 516px;
    box-shadow: inset 1px 0 1px 0 #ededed;
    order: 99;
    background-color: rgb(86, 61, 230);
    visibility: visible;
    /* opacity: 0; */
    color: #282828;
    box-sizing: border-box;
}

.flyout .co{
    width: 33.3333333333%;
}

.flyout .cat{
    padding-left: 8px;
    padding-bottom: 16px;
    padding-right: 8px;
    padding-top: 4px;
}

.flyout .tit{
text-overflow: ellipsis;
white-space: nowrap;
text-transform: uppercase;
font-weight: 500;
padding-top: 4px;
overflow: hidden;
display: block;
}
</style>
