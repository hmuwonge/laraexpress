<template>
<div class="bg-white py-3 rounded-md hidden lg:block h-[516px] text-xs overflow-hidden">
    <!-- <div>
  <div v-for="item in items" :key="item" class="categories" >
  <p>{{item.title}}</p>
  <div class="subMenu">
    <div v-for="childItem in item.child" :key="childItem ">
    <p class="text"> {{childItem.childTitle}}</p> </div>
  </div>
  </div>
</div>  -->

    <p class="flex items-center px-4">
        <CatIcon class="h-6 w-6 mr-2" />
        Categories
    </p>

    <ul class="my-3 pb-0 text-xs cursor-pointer">
        <!-- <li v-for="item in items" :key="item" class="flex items-center hover:text-red-500 hover:font-bold hover:shadow-lg py-2 categories">
            <Icon class="h-6 w-6 mr-2 text-xs text-gray-400" />
            <a href="" class="">{{item.title}}</a>

        </li> -->
        <li class=" items-center hover:text-red-500 hover:font-bold  hover:shadow-lg py-2 px-4 categories">
            <div class="cat-name flex">
                <Icon class="h-4 w-4 mr-2 text-gray-400" />
                <a href="" class="">Men's Fashion</a>
            </div>

            <div class="sub-cate" data-path="c-women-content" data-role="first-menu-main">
                <div class="sub-cate-main">
                    <div class="sub-cate-content">
                        <div class="sub-cate-row">
                            <dl class="sub-cate-items" data-role="two-menu">
                                <dt>
                                    <a href="//www.aliexpress.com/af/category/100003109.html">Women's Fashion</a>
                                </dt>
                                <dd>
                                    <a href="//www.aliexpress.com/category/200003482/dresses.html">Dresses</a>
                                    <a href="//www.aliexpress.com/category/100003127/t-shirts.html">Tees</a>
                                    <a href="//www.aliexpress.com/category/200001648/blouses-shirts.html">Blouses &amp; Shirts</a>
                                    <a href="//www.aliexpress.com/category/100003141/hoodies-sweatshirts.html">Hoodies &amp; Sweatshirts</a>
                                    <a href="//www.aliexpress.com/category/200118011/women-sets.html">Women's Sets</a>
                                    <a href="//www.aliexpress.com/category/200000782/suits-sets.html">Suits &amp; Blazers</a>
                                    <a href="//www.aliexpress.com/category/200215336/bodysuits.html">Bodysuits</a>
                                    <a href="//www.aliexpress.com/category/200000792/camis.html">Tanks &amp; Camis</a>
                                    <a href="//www.aliexpress.com/category/200000775/jackets-coats.html">Coats &amp; Jackets</a>
                                    <a href="//www.aliexpress.com/category/200000783/sweaters.html">Sweaters</a>
                                </dd>
                            </dl>
                            <dl class="sub-cate-items" data-role="two-menu">
                                <dt>
                                    <a href="//www.aliexpress.com/category/205895301/swimsuit.html">Swimwear</a>
                                </dt>
                                <dd>
                                    <a href="//www.aliexpress.com/category/205895901/bikini-set.html">Bikini Sets</a>
                                    <a href="//www.aliexpress.com/category/205896401/cover-up.html">Cover-Ups</a>
                                </dd>
                            </dl>
                            <dl class="sub-cate-items" data-role="two-menu">
                                <dt>
                                    <a href="//www.aliexpress.com/wholesale?catId=0&amp;initiative_id=SB_20220209182614&amp;SearchText=Muslim+Fashion">Muslim Fashion</a>
                                </dt>
                                <dd>
                                    <a href="//www.aliexpress.com/wholesale?catId=0&amp;initiative_id=SB_20220209182656&amp;SearchText=Abaya">Abaya</a>
                                    <a href="//www.aliexpress.com/wholesale?catId=0&amp;initiative_id=SB_20220209182640&amp;SearchText=Women%27s+Hijabs">Women's Hijabs</a>
                                    <a href="//www.aliexpress.com/wholesale?catId=0&amp;initiative_id=SB_20220209183010&amp;SearchText=women+Muslim+Sets">Muslim Sets</a>
                                    <a href="//www.aliexpress.com/wholesale?catId=0&amp;initiative_id=SB_20220209182732&amp;SearchText=women+Prayer+Hats">Prayer Hats</a>
                                    <a href="//www.aliexpress.com/wholesale?catId=0&amp;initiative_id=SB_20220209182757&amp;SearchText=muslim+Dresses">Dresses</a>
                                </dd>
                            </dl>
                        </div>

                        <div class="sub-cate-row">
                            <dl class="sub-cate-items" data-role="two-menu">
                                <dt>
                                    <a href="//www.aliexpress.com/category/200118010/bottoms.html">Bottoms</a>
                                </dt>
                                <dd>
                                    <a href="//www.aliexpress.com/category/200001089/leggings.html">Leggings</a>
                                    <a href="//www.aliexpress.com/category/205876401/skirt.html">Skirts</a>
                                    <a href="//www.aliexpress.com/category/100003163/shorts.html">Shorts</a>
                                    <a href="//www.aliexpress.com/category/205874801/jeans.html">Jeans</a>
                                    <a href="//www.aliexpress.com/category/205927403/pants-capris.html">Pants &amp; Capris</a>
                                </dd>
                            </dl>
                            <dl class="sub-cate-items" data-role="two-menu">
                                <dt>
                                    <a href="//campaign.aliexpress.com/wow/gcp/ae/channel/ae/accelerate/tupr?wh_weex=true&amp;_immersiveMode=true&amp;wx_navbar_hidden=true&amp;wx_navbar_transparent=true&amp;ignoreNavigationBar=true&amp;wx_statusbar_hidden=true&amp;wh_pid=ae/channel/ae/plus_size_clothes/Dresses_">Plus Size Clothes</a>
                                </dt>
                                <dd>
                                    <a href="//campaign.aliexpress.com/wow/gcp/ae/channel/ae/accelerate/tupr?wh_weex=true&amp;_immersiveMode=true&amp;wx_navbar_hidden=true&amp;wx_navbar_transparent=true&amp;ignoreNavigationBar=true&amp;wx_statusbar_hidden=true&amp;wh_pid=ae/channel/ae/plus_size_clothes/Dresses_">Plus Size Dresses</a>
                                </dd>
                                <dd>
                                    <a href="//campaign.aliexpress.com/wow/gcp/ae/channel/ae/accelerate/tupr?wh_weex=true&amp;_immersiveMode=true&amp;wx_navbar_hidden=true&amp;wx_navbar_transparent=true&amp;ignoreNavigationBar=true&amp;wx_statusbar_hidden=true&amp;wh_pid=ae/channel/ae/plus_size_clothes/T_Shirts_">Plus Size T-Shirts</a>
                                </dd>
                                <dd>
                                    <a href="//campaign.aliexpress.com/wow/gcp/ae/channel/ae/accelerate/tupr?wh_weex=true&amp;_immersiveMode=true&amp;wx_navbar_hidden=true&amp;wx_navbar_transparent=true&amp;ignoreNavigationBar=true&amp;wx_statusbar_hidden=true&amp;wh_pid=ae/channel/ae/plus_size_clothes/Sets_">Plus Size Sets</a>
                                </dd>
                                <dd>
                                    <a href="//campaign.aliexpress.com/wow/gcp/ae/channel/ae/accelerate/tupr?wh_weex=true&amp;_immersiveMode=true&amp;wx_navbar_hidden=true&amp;wx_navbar_transparent=true&amp;ignoreNavigationBar=true&amp;wx_statusbar_hidden=true&amp;wh_pid=ae/channel/ae/plus_size_clothes/Pants_">Plus Size Pants &amp; Capris</a>
                                </dd>
                                <dd>
                                    <a href="//campaign.aliexpress.com/wow/gcp/ae/channel/ae/accelerate/tupr?wh_weex=true&amp;_immersiveMode=true&amp;wx_navbar_hidden=true&amp;wx_navbar_transparent=true&amp;ignoreNavigationBar=true&amp;wx_statusbar_hidden=true&amp;wh_pid=ae/channel/ae/plus_size_clothes/Outwear_">Plus Size Outerwear</a>
                                </dd>
                                <dd>
                                    <a href="//campaign.aliexpress.com/wow/gcp/ae/channel/ae/accelerate/tupr?wh_weex=true&amp;_immersiveMode=true&amp;wx_navbar_hidden=true&amp;wx_navbar_transparent=true&amp;ignoreNavigationBar=true&amp;wx_statusbar_hidden=true&amp;wh_pid=ae/channel/ae/plus_size_clothes/Blouses_Shirts_">Plus Size Blouses &amp; Shirts</a>
                                </dd>
                            </dl>
                            <dl class="sub-cate-items" data-role="two-menu">
                                <dt>
                                    <a href="//www.aliexpress.com/category/100003235/weddings-events.html">Weddings &amp; Events</a>
                                </dt>
                                <dd>
                                    <a href="//www.aliexpress.com/category/100003269/wedding-dresses.html">Wedding Dresses</a>
                                    <a href="//www.aliexpress.com/category/100005791/prom-dresses.html">Prom Dresses</a>
                                    <a href="//www.aliexpress.com/category/100005792/evening-dresses.html">Evening Dresses</a>
                                    <a href="//www.aliexpress.com/category/200001263/africa-clothing.html">Africa Clothing</a>
                                    <a href="//www.aliexpress.com/category/200001270/costumes-accessories.html">Cosplay Costumes</a>
                                </dd>
                            </dl>
                        </div>

                        <div class="sub-cate-row">
                            <dl class="sub-cate-items" data-role="two-menu">
                                <dt>
                                    <a href="//www.aliexpress.com/category/200000773/women-intimates.html">Women's Underwear</a>
                                </dt>
                                <dd>
                                    <a href="//www.aliexpress.com/category/200001989/pajama-sets.html">Pajama Sets</a>
                                    <a href="//www.aliexpress.com/category/100005805/bras.html">Bras</a>
                                    <a href="//www.aliexpress.com/category/200001040/panties.html">Panties</a>
                                    <a href="//www.aliexpress.com/category/200000781/women-socks-hosiery.html">Women's Socks</a>
                                    <a href="//www.aliexpress.com/category/100005813/bra-brief-sets.html">Bra &amp; Brief Sets</a>
                                    <a href="//www.aliexpress.com/category/200001041/shapers.html">Shapewear</a>
                                </dd>
                            </dl>
                            <dl class="sub-cate-items" data-role="two-menu">
                                <dt>
                                    <a href="//www.aliexpress.com/category/200000724/women-accessories.html">Accessories</a>
                                </dt>
                                <dd>
                                    <a href="//www.aliexpress.com/category/200001996/women-hair-accessories.html">Hair Accessories</a>
                                    <a href="//www.aliexpress.com/category/200000750/women-sunglasses.html">Sunglasses</a>
                                    <a href="//www.aliexpress.com/category/205780711/women-blue-light-blocking-glasses.html">Blue Light Blocking Glasses</a>
                                    <a href="//www.aliexpress.com/category/200001010/women-baseball-caps.html">Baseball Caps</a>
                                    <a href="//www.aliexpress.com/category/200001014/women-bucket-hats.html">Bucket Hats</a>
                                    <a href="//www.aliexpress.com/category/200003450/women-belts.html">Belts</a>
                                </dd>
                            </dl>
                        </div>
                        <ul class="clearfix bottom-show-list">
                            <li>
                                <a href="//campaign.aliexpress.com/wow/gcp/route/aliexpress/upr_100000224_ae/channel/ae/accelerate/upr_bypass?wh_pid=ae/daily/ae/summer_sale/Women_Clothing&amp;wh_weex=true&amp;_immersiveMode=true&amp;wx_navbar_hidden=true&amp;wx_navbar_transparent=true&amp;ignoreNavigationBar=true&amp;wx_statusbar_hidden=true">
                                    <span class="activity-name">Summer Sale</span>
                                    <span class="activity-pic">
                                        <img data-src="//ae01.alicdn.com/kf/H0d2ea6c0397e4424b2b4488948b079e5T.png" src="//ae01.alicdn.com/kf/H0d2ea6c0397e4424b2b4488948b079e5T.png">
                                    </span>
                                </a>
                            </li>
                            <li class="hidden-sm">
                                <a href="//www.aliexpress.com/category/205895301/swimsuit.html?spm=a2g0o.category_nav.1.16.445048b6Wrlg7U">
                                    <span class="activity-name">Beach Style</span>
                                    <span class="activity-pic">
                                        <img data-src="//ae01.alicdn.com/kf/Haac6171d3b7147e3a96d544369372d1dq.png" src="//ae01.alicdn.com/kf/Haac6171d3b7147e3a96d544369372d1dq.png">
                                    </span>
                                </a>
                            </li>
                            <li class="hidden-sm">
                                <a href="//www.aliexpress.com/category/200001989/pajama-sets.html?spm=a2g0o.productlist.0.0.2f8363e66FQRMb">
                                    <span class="activity-name">Sleep &amp; Lounge</span>
                                    <span class="activity-pic">
                                        <img data-src="//ae01.alicdn.com/kf/H96d67a421477440fa80ba8cfc1fa2a0dN.png" src="//ae01.alicdn.com/kf/H96d67a421477440fa80ba8cfc1fa2a0dN.png">
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div class="sub-cate-row scp-cate-brand">
                        <ul class="sub-brand-list">

                            <li class="sup-brand-item">
                                <a href="//simplee.aliexpress.com/store/1192351"><img title="Simplee Apparel" data-src="//ae01.alicdn.com/kf/S8ab2530d778e437bbb2648599bc037adC.jpg" src="//ae01.alicdn.com/kf/S8ab2530d778e437bbb2648599bc037adC.jpg"> </a>
                            </li>

                            <li class="sup-brand-item">
                                <a href="//amii.aliexpress.com/store/3032003"><img title="Amii Official Store" data-src="//ae01.alicdn.com/kf/A067fad44077b465cb7066fb20e1cc0b26.jpg" src="//ae01.alicdn.com/kf/A067fad44077b465cb7066fb20e1cc0b26.jpg"> </a>
                            </li>

                            <li class="sup-brand-item">
                                <a href="//www.aliexpress.com/store/1394859"><img title="ADYCE Official Store" data-src="//ae01.alicdn.com/kf/S8073e1c4632349ebabaf83f9d72121efl.jpg" src="//ae01.alicdn.com/kf/S8073e1c4632349ebabaf83f9d72121efl.jpg"> </a>
                            </li>

                            <li class="sup-brand-item">
                                <a href="//www.aliexpress.com/store/4545026"><img title="Trendyol Women Official Store" data-src="//ae01.alicdn.com/kf/HTB1jTRDUSzqK1RjSZFLq6An2XXaG.jpg" src="//ae01.alicdn.com/kf/HTB1jTRDUSzqK1RjSZFLq6An2XXaG.jpg"> </a>
                            </li>

                            <li class="sup-brand-item">
                                <a href="//www.aliexpress.com/store/237327"><img title="Ocstrade Official Store" data-src="//ae01.alicdn.com/kf/Sa1bfde2eb1e7402bb45dc99b71bf065eJ.jpg" src="//ae01.alicdn.com/kf/Sa1bfde2eb1e7402bb45dc99b71bf065eJ.jpg"> </a>
                            </li>

                            <li class="sup-brand-item">
                                <a href="//www.aliexpress.com/store/2348022"><img title="EDOLYNSA Official Store" data-src="//ae01.alicdn.com/kf/Hf9edc782569e433287ad61b5fa883d456/200x100.jpg" src="//ae01.alicdn.com/kf/Hf9edc782569e433287ad61b5fa883d456/200x100.jpg"> </a>
                            </li>

                            <li class="sup-brand-item">
                                <a href="//lovelichao.aliexpress.com/store/910608012"><img title="LOVE LICHAO Official Store" data-src="//ae01.alicdn.com/kf/S228d0c7d6402405f9661fa397088d8bae.png" src="//ae01.alicdn.com/kf/S228d0c7d6402405f9661fa397088d8bae.png"> </a>
                            </li>

                            <li class="sup-brand-item">
                                <a href="//www.aliexpress.com/store/607691"><img title="MISS ORD Official Store" data-src="//ae01.alicdn.com/kf/S8708691f8539463e82f13b0cf761e7bc8.jpg" src="//ae01.alicdn.com/kf/S8708691f8539463e82f13b0cf761e7bc8.jpg"> </a>
                            </li>

                            <li class="sup-brand-item">
                                <a href="//www.aliexpress.com/store/507889"><img title="LOVE&amp;LEMONADE Official Store" data-src="//ae01.alicdn.com/kf/H4cfdfba261df4b0096ac85e5c0a2dfe3Z/200x100.jpg" src="//ae01.alicdn.com/kf/H4cfdfba261df4b0096ac85e5c0a2dfe3Z/200x100.jpg"> </a>
                            </li>

                            <li class="sup-brand-item">
                                <a href="//www.aliexpress.com/store/1102059458"><img title="Lovelywholesale Official Store" data-src="//ae01.alicdn.com/kf/S9108c3548f224a1bbaab44c365c28ce6f/200x100.jpg" src="//ae01.alicdn.com/kf/S9108c3548f224a1bbaab44c365c28ce6f/200x100.jpg"> </a>
                            </li>

                            <li class="sup-brand-item">
                                <a href="//www.aliexpress.com/store/1100177096?spm=a2g0o.store_pc_home.pcShopHead_2001723167640.0"><img title="A21 Official Store" data-src="//ae01.alicdn.com/kf/S7b302cc740684df59fbac45f178bd8abR.jpg" src="//ae01.alicdn.com/kf/S7b302cc740684df59fbac45f178bd8abR.jpg"> </a>
                            </li>

                            <li class="sup-brand-item">
                                <a href="//www.aliexpress.com/store/1100012094"><img title="Yissang Official Store" data-src="//ae01.alicdn.com/kf/Sce4b9b87c34840c1aa4c74201663e5d5y.jpg" src="//ae01.alicdn.com/kf/Sce4b9b87c34840c1aa4c74201663e5d5y.jpg"> </a>
                            </li>

                            <li class="sup-brand-item">
                                <a href="//www.aliexpress.com/store/1267707"><img title="SIMPLEE Pluses Store" data-src="//ae01.alicdn.com/kf/A9e2d6066e16943328e15aa2316bdfb23u.jpg" src="//ae01.alicdn.com/kf/A9e2d6066e16943328e15aa2316bdfb23u.jpg"> </a>
                            </li>

                            <li class="sup-brand-item">
                                <a href="//wotwoypluss.aliexpress.com/store/912654982"><img title="WO.T.WO.Y wotwoy-plus-curve Store" data-src="//ae01.alicdn.com/kf/Sa2772a2e802c4a2ca38bf3bc3a0d600e9.jpg" src="//ae01.alicdn.com/kf/Sa2772a2e802c4a2ca38bf3bc3a0d600e9.jpg"> </a>
                            </li>

                        </ul>
                    </div>

                </div>
                <!--ams-region-end 514-->

                <!--gop region end regionId biz/ru_c_women_content version 20220518.153202.945-->
            </div>

        </li>
        <li class="flex items-center hover:text-red-500 hover:font-bold hover:shadow-lg py-2 px-4">
            <Icon class="h-6 w-6 mr-2 text-gray-400" />
            <a href="" class="">Phones & Telecommunication</a>
        </li>
        <li class="flex items-center hover:text-red-500 hover:font-bold hover:shadow-lg py-2 px-4">
            <Icon class="h-6 w-6 mr-2 text-gray-400" />
            <a href="" class="">Computer, Office & Security</a>
        </li>
        <li class="flex items-center hover:text-red-500 hover:font-bold hover:shadow-lg py-2 px-4">
            <Icon class="h-6 w-6 mr-2 text-gray-400" />
            <a href="" class="">Consumer Electronics</a>
        </li>
        <li class="flex items-center hover:text-red-500 hover:font-bold hover:shadow-lg py-2 px-4">
            <Icon class="h-6 w-6 mr-2 text-gray-400" />
            <a href="" class="">Home, Pet & Appliances</a>
        </li>

        <li class="flex items-center hover:text-red-500 hover:font-bold hover:shadow-lg py-2 px-4">
            <Icon class="h-6 w-6 mr-2 text-gray-400" />
            <a href="" class="">Bags & Shoes</a>
        </li>

        <li class="flex items-center hover:text-red-500 hover:font-bold hover:shadow-lg py-2 px-4">
            <Icon class="h-6 w-6 mr-2 text-gray-400" />
            <a href="" class="">toys, Kids & Babies</a>
        </li>

        <li class="flex items-center hover:text-red-500 hover:font-bold hover:shadow-lg py-2 px-4">
            <Icon class="h-6 w-6 mr-2 text-gray-400" />
            <a href="" class="">Outdoor Fun & Sports</a>
        </li>

    </ul>

</div>
</template>

<script>
import Icon from '../Icons/icon.vue'
import CatIcon from '../Icons/category'
export default {
    name: "Welcome",
    components: {
        CatIcon,
        Icon,
    },

    props: {},

    data() {
        return {
            items: [{
                    title: 'name'
                },
                {
                    title: 'hoverMe',
                    child: [{
                            childTitle: 'ChildTitle1'
                        },
                        {
                            childTitle: 'ChildTitle2'
                        },
                        {
                            childTitle: 'ChildTitle3'
                        },

                    ],
                },
                {
                    title: 'name3'
                }
            ]
        }
    }

};
</script>

<style scoped>
.categories {
    padding-left: 1rem
        /* 16px */
    ;
    padding-right: 1rem
        /* 16px */
    ;
    position: relative;
}

.subMenu {
    display: none;
    position: absolute;
    background-color: #fff;
    height: 100%;
    width: 768px;
    top: 0;
    left: 100%;
}


.categories:hover .subMenu {
    display: block;
    z-index: 998;
}

.categories .sub-cate {
    border-color: transparent;
    border-radius: 8px;
    box-shadow: 0 1px 10px rgba(0, 0, 0, .12);
}

.sub-cate {
    top: 0;
}

.categories .sub-cate {
    display: none;
    position: absolute;
    top: -1px;
    left: 238px;
    margin-left: 0;
    background-color: #fff;
    border: 1px solid #e9e9e9;
    z-index: 99;
}

.categories:hover .sub-cate{
    display: block;
    position: absolute;
    top: -1px;
    left: 238px;
    margin-left: 0;
    background-color: #fff;
    border: 1px solid #e9e9e9;
    z-index: 998;
}
</style>
