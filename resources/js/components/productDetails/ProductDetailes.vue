<template>
<MainFrame>
    <div>
        <!-- <div class="container breadcrumbs hidden-xs hidden-sm">
        <div class="container">
          <ul class="breadcrumb-cate">
              <li><a href="https://jumia.laraup.com"><i class="fa fa-home"></i> </a></li>
              <li><a href="https://jumia.laraup.com/category/phones-telecommunications">Phones &amp; Telecommunications</a></li>
                            <li><a href="https://jumia.laraup.com/category/mobile-phones">Mobile Phones</a></li>
                                          <li><a href="https://jumia.laraup.com/category/android-phones">Android Phones</a></li>
                            <li>Oppo A74 5G, 6.5", 128GB + 6GB RAM (Dual SIM), 5000mAh, Blue</li>
          </ul>
      </div>
    </div> -->

        <div class="w-full space-x-4 max-w-screen-xl mx-auto py-2">
            <!-- <div class="breadcrumbs space-y-1">
                <nav class="flex" aria-label="Breadcrumb">
                    <ol class="inline-flex items-center space-x-1 md:space-x-3">
                        <li class="inline-flex items-center">
                            <a href="#" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                                <svg class="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                                </svg>
                                Home
                            </a>
                        </li>
                        <li>
                            <div class="flex items-center">
                                <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                                </svg>
                                <a href="#" class="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white">Projects</a>
                            </div>
                        </li>
                        <li aria-current="page">
                            <div class="flex items-center">
                                <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                                </svg>
                                <span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">Flowbite</span>
                            </div>
                        </li>
                    </ol>
                </nav>
            </div> -->
            <div class="flex flex-wrap overflow-hidden sm:-mx-px md:-mx-px lg:-mx-1 xl:-mx-1 justify-between h-auto w-auto">
                <div class="my-0 w-1/2 px-1 h-auto flex-auto overflow-hidden sm:my-px sm:px-px sm:w-full space-x-2 md:my-px md:px-px md:w-1/2 lg:my-1 lg:px-1 lg:m-2 m-2 lg:w-1/2 bg-white rounded-sm">
                    <div class="home md:items-center mx-auto md:container md:px-4 flex flex-col gap-x-12 gap-y-0 md:flex-row">
                        <div class="flex-1 relative">

                            <div class="large-image  class-honizol hidden">

                                <img class="product-image-zoom" ref="largeImage" src="https://jumia.laraup.com/upload/images/product/61dcf28427ca8.jpg" data-zoom-image="https://jumia.laraup.com/upload/images/product/61dcf28427ca8.jpg" title="image">
                            </div>
                            <img src="https://jumia.laraup.com/upload/images/product/61dcf28427ca8.jpg" class="object-cover md:rounded-lg" alt="">
                            <button class="md:hidden absolute top-1/3 left-6 rounded-full w-14 h-14 bg-white"><i class="fas fa-chevron-left text-black text-xl hover:text-orange"></i></button><button class="md:hidden absolute top-1/3 right-4 rounded-full w-14 h-14 bg-white"><i class="fas fa-chevron-right text-black text-xl hover:text-orange"></i></button>

                            <div id="thumb-slider" ref="thumbSlider" class="md:flex gap-x-4 mt-4">
                                <div class="flex-1 rounded-lg overflow-hidden hover:opacity-60 cursor-pointer border-4 border-transparent">
                                    <img src="https://jumia.laraup.com/upload/images/product/61dcf28427ca8.jpg" alt=""></div>
                                <div class="flex-1 rounded-lg overflow-hidden hover:opacity-60 cursor-pointer border-4 border-transparent">
                                    <img src="https://thirsty-curran-9a11c0.netlify.app/img/image-product-3-thumbnail.c6ec7433.jpg" alt=""></div>
                                <div class="flex-1 rounded-lg overflow-hidden hover:opacity-60 cursor-pointer border-4 border-transparent">
                                    <img src="https://jumia.laraup.com/upload/images/product/61dcf28427ca8.jpg" alt=""></div>
                                <div class="flex-1 rounded-lg overflow-hidden hover:opacity-60 cursor-pointer border-4 border-transparent active">
                                    <img src="https://jumia.laraup.com/upload/images/product/61dcf28427ca8.jpg" alt=""></div>
                            </div>
                        </div>
                        <div class="flex-1 px-6 flex flex-col gap-y-4 md:justify-center pb-4">
                            <div class="product-title">
                                <h4 class="text-orange relative uppercase font-normal tracking-wide text-gray-800 text-sm m-0"> sneaker company </h4>
                            </div>
                            <div class="product-brand py-[1] text-xs">
                                Brand: <a class="_more" href="/mukwano/">
                                    Mukwano</a> | <a class="_more" href="/bar-soap-detergent/mukwano/">Similar products from Mukwano</a>
                            </div>

                            <div class="box-review p-0 border-b border-b-white">

                                <div class="rating hidden-xs hidden-sm">
                                    <div class="rating-box inline-block align-middle">
                                        <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span><span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span><span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span><span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span><span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span>
                                        <a class="reviews_button" href="#tab-review">(0 ratings)</a> / <a class="write_review_button" onclick="$('a[href=\'#tab-review\']').trigger('click'); return false;">Write a review</a>
                                    </div>
                                </div>

                            </div>

                            <div class="w-full md:w-52 flex flex-wrap gap-x-4 gap-y-4 items-center">
                                <span class="font-medium text-2xl text-black">UGX 125.00</span>
                            </div>
                            <div class="product-discount-price items-center flex ">
                                <span dir="ltr" class="price text-sm line-through items-left text-gray-500">UGX 6,800</span>
                                <span data-disc="18%" class="discount ml-2 min-w-[40] bg-[#f68b1e] text-orange-200 p-1 rounded-sm">18%</span></div>

                            <div class="flex flex-col md:flex-row gap-y-4 gap-x-2 space-y-1">
                                <!-- <div class="bg-light-grayish-blue flex rounded-md p-4 md:w-1/3 justify-between items-center">
                                    <button class="text-orange text-sm font-bold"> - </button>
                                    <span class="font-bold text-black">0</span>
                                    <button class="text-orange text-sm font-bold"> + </button>
                                </div> -->
                                <button class="bg-[#f68b1e] flex flex-1 py-2 justify-center text-white items-center rounded-md gap-x-2 shadow-md hover:opacity-60 hover:shadow-2xl">
                                    <ShoppingCartIcon class="h-6 w-6 " />
                                    <!-- <i class="fas fa-shopping-cart text-white text-xl"></i> -->
                                    <span class="text-white font-bold">Add to Cart</span></button>
                            </div>

                            <div class="border-b-2 my-1"></div>
                        </div>
                    </div>

                </div>

                <div class="my-1 w-full h-auto overflow-hidden flex-none sm:my-px sm:px-px sm:w-full md:my-px md:px-px md:w-2/6
                lg:my-0 lg:px-0 lg:w-2/6 rounded-sm items-center p-2 shadow-sm">
                    <!-- <div class="col4"> -->
                    <div class="card -mbs -fs12 block relative mt-0 p-2 overflow-auto bg-white">
                        <h2 class="text-sm uppercase font-normal p-2 mb-0 box-border border-2">Delivery &amp; Returns</h2>
                        <div class="-hr">
                            <div class="-df -pas">
                                <div class="-df -d-co -c-bet">
                                    <img class="-fw hidden-xs" src="https://jumia.laraup.com/upload/images/ex.png">
                                    <p style="color: #282828;">Express delivery in main cities.&nbsp;</p>
                                </div>
                            </div>
                        </div>
                        <div class="box-border relative block">
                            <div class="select2-container w-full">
                                <h3 class="font-normal text-xl">Choose your location</h3>

                                <div class="mb-4 ">
                                    <select onchange="get_city(this.value)" class=" w-full select2-dropdownl select2-selection--single" id="state" data-select2-id="state" tabindex="-1" aria-hidden="true">
                                        <option value="337">Bagar Hat</option>
                                        <option value="338">Bandarban</option>
                                        <option value="339">Barguna</option>
                                        <option value="340">Barisal</option>
                                        <option value="341">Bhola</option>
                                        <option value="342">Bogora</option>
                                        <option value="343">Brahman Bariya</option>
                                        <option value="344">Chandpur</option>
                                        <option value="345">Chattagam</option>
                                        <option value="346">Chittagong Division</option>
                                        <option value="347">Chuadanga</option>
                                        <option value="348">Dhaka</option>
                                        <option value="349">Dinajpur</option>
                                        <option value="350">Faridpur</option>
                                        <option value="351">Feni</option>
                                        <option value="352">Gaybanda</option>
                                        <option value="353">Gazipur</option>
                                        <option value="354">Gopalganj</option>
                                        <option value="355">Habiganj</option>
                                        <option value="356">Jaipur Hat</option>
                                        <option value="357">Jamalpur</option>
                                        <option value="358">Jessor</option>
                                        <option value="359">Jhalakati</option>
                                        <option value="360">Jhanaydah</option>
                                        <option value="361">Khagrachhari</option>
                                        <option value="362">Khulna</option>
                                        <option value="363">Kishorganj</option>
                                        <option value="364">Koks Bazar</option>
                                        <option value="365">Komilla</option>
                                        <option value="366">Kurigram</option>
                                        <option value="367">Kushtiya</option>
                                        <option value="368">Lakshmipur</option>
                                        <option value="369">Lalmanir Hat</option>
                                        <option value="370">Madaripur</option>
                                        <option value="371">Magura</option>
                                        <option value="372">Maimansingh</option>
                                        <option value="373">Manikganj</option>
                                        <option value="374">Maulvi Bazar</option>
                                        <option value="375">Meherpur</option>
                                        <option value="376">Munshiganj</option>
                                        <option value="377">Naral</option>
                                        <option value="378">Narayanganj</option>
                                        <option value="379">Narsingdi</option>
                                        <option value="380">Nator</option>
                                        <option value="381">Naugaon</option>
                                        <option value="382">Nawabganj</option>
                                        <option value="383">Netrakona</option>
                                        <option value="384">Nilphamari</option>
                                        <option value="385">Noakhali</option>
                                        <option value="386">Pabna</option>
                                        <option value="387">Panchagarh</option>
                                        <option value="388">Patuakhali</option>
                                        <option value="389">Pirojpur</option>
                                        <option value="390">Rajbari</option>
                                        <option value="391">Rajshahi</option>
                                        <option value="392">Rangamati</option>
                                        <option value="393">Rangpur</option>
                                        <option value="394">Satkhira</option>
                                        <option value="395">Shariatpur</option>
                                        <option value="396">Sherpur</option>
                                        <option value="397">Silhat</option>
                                        <option value="398">Sirajganj</option>
                                        <option value="399">Sunamganj</option>
                                        <option value="400">Tangayal</option>
                                        <option value="401">Thakurgaon</option>
                                    </select>
                                    <!-- <span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="1" style="width: 320px;">
                                    <span class="selection">
                                        <span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-state-container"><span class="select2-selection__rendered" id="select2-state-container" role="textbox" aria-readonly="true" title="Bagar Hat">Bagar Hat</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                                    <div style="height: 5px;">
                                    </div> -->
                                    <select onchange="get_shipping_cost(this.value, 35)" class="w-full select2 select2-hidden-accessible" id="show_city" data-select2-id="show_city" tabindex="-1" aria-hidden="true">
                                        <option value="" data-select2-id="4">Select first state</option>
                                    </select>
                                    <span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="3" style="width: 320px;">
                                        <span class="selection">
                                            <span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-show_city-container"><span class="select2-selection__rendered" id="select2-show_city-container" role="textbox" aria-readonly="true" title="Select first state">Select first state</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                                </div>

                                <div class="border-b-2">
                                    <div class="show_shipping_cost">
                                        <div class="flex px-1 py-2 text-sm">
                                            <img class="h-12 w-12 box-border border-2 text-black font-bold" src="https://jumia.laraup.com/upload/images/i1.png">
                                            <div class="flex flex-wrap grow content-between text-sm">
                                                <div class="-df -fw">
                                                    <b class="-fs14 -m -prs" style="float: left;">Door Delivery</b>
                                                </div>
                                                <div>
                                                    <div class="markup -ptxs">Shipping <em>$50.00</em></div>
                                                    <div class="markup -ptxs">Delivery by <em>8</em> when you order within next <em>20hrs 8mins</em></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex px-1 py-2 text-sm justify-between">
                                            <img class="h-12 w-12 box-border border-2 space-x-1 text-black font-bold" src="https://jumia.laraup.com/upload/images/i2.png">
                                            <div class="flex flex-wrap grow content-between text-sm">
                                                <div class="-df -fw">
                                                    <b class="-fs14 -m -prs" style="float: left;">Pickup Station</b>
                                                </div>
                                                <div>
                                                    <div class="markup -ptxs">Shipping <em>$55.00</em></div>
                                                    <div class="markup -ptxs">Pickup by <em>8</em> when you order within next <em>20hrs 8mins</em></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="flex px-1 py-2 text-sm">
                                <img class="h-12 w-12 box-border border-2 text-black font-bold" src="https://jumia.laraup.com/upload/images/i3.png">
                                <div class="">
                                    <b class="-fs14 -m -prs" style="float: left;">Return Policy</b><br>
                                    <p class="-ptxs">Easy Return, Quick Refund.<a class="_more -mlxs -di" target="_blank" rel="noopener" href="#">See more</a></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="mt-2 box-border border-2 text-sm  ">
                        <section class="shadow-sm rounded-sm bg-white p-2">
                            <a href="#" class="-pas flex uppercase justify-between border-b-2 cursor-pointer">
                                <h3 class="-m font-bold">Seller Information</h3>
                                <i class="fa fa-chevron-right" aria-hidden="true"></i>
                            </a>
                            <div class="-hr box-border block">
                                <p class="font-bold px-2 py-2 text-black box-border">HOTLancer</p>
                                <div class="flex  justify-between font-normal py-3 p-[10px] border-b-2 border-b-sky-50 items-center box-border text-base">
                                    <div class="block text-sm items-left w-2/3 justify-between  box-border">
                                        <p><bdo dir="ltr" class="-m -prxs">86% </bdo>Seller Score</p>
                                        <p data-followers=""><span class="-m"> 17 </span><span>Followers</span></p>
                                    </div>
                                    <a class="inline-block px-6 py-2.5 bg-blue-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                                     active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" href="https://jumia.laraup.com/shop/hotlancer">
                                        Follow
                                    </a>
                                </div>
                            </div>
                            <div class="-pas p-2 overflow-auto box-border text-sm">
                                <h3 class="flex mt-1 -i-ctr p-0 font-bold text-sm">
                                    Seller Performance
                                </h3>
                                <div class="flex items-center text-left w-full">
                                    <StarIcon class="h-6 w-6 bg-red-600 p-1 mr-1 rounded-full" aria-hidden="false" />
                                    <p>Order Fulfillment Rate:&nbsp;<span class="font-bold uppercase text-sm">Excellent</span></p>
                                </div>
                                <div class="flex items-center text-left w-full">
                                    <StarIcon class="h-6 w-6 bg-red-600 p-1 mr-1 rounded-full" aria-hidden="false" />
                                    <p>Quality Score:&nbsp;<span class="font-bold uppercase text-sm">Good</span></p>
                                </div>
                                <div class="flex items-center text-left w-full">
                                    <StarIcon class="h-6 w-6 bg-red-600 p-1 mr-1 rounded-full" aria-hidden="false" />
                                    <p>Customer Rating:&nbsp;<span class="font-bold uppercase text-sm">Good</span></p>
                                </div>
                            </div>
                        </section>
                    </div>
                    <!-- </div> -->
                </div>
            </div>

            <div class="row">
                <div class="col-md-9 col-xs-12">
                    <div class="description data_more_less action_disabled" id="description">
                        <h2 class="h2description">Description</h2>
                        <div class="data_more_less_inner" data-height="200" data-increase-by="400" style="max-height: 200px;">
                            <div class="data_more_less_body">
                                <h3><strong>Tailored clothes available as in chain stores. Everything is perfect.</strong></h3>
                                <p>These settings don’t provide big changes but only some small css changes in spaces or borders for example.</p>
                                <p>Because we have many types of elements we created Live Editor for you so you can see live changes. I ordered on Friday evening and on Monday at 12:30 the package was with me. I have never encountered such a fast order processing.</p>
                                <ul>
                                    <li>Study history up to 30 days</li>
                                    <li>Up to 5 users simultaneously</li>
                                    <li>Has HEALTH certificate</li>
                                </ul>
                            </div>
                        </div>
                        <a href="#" class="action_more more_less_action btn">Show More</a>
                        <a href="#" class="action_less more_less_action btn">Show Less</a>
                    </div>

                </div>
                <div class="col-md-3 col-xs-12 col4 sticky-content">
                    <nav class="s-menu _sep hidden-xs hidden-sm" data-hash-nav="">
                        <a href="#description" class="m-itm _wic" data-toggle="tab"><i class="fa fa-file-text-o" aria-hidden="true"></i> Product details</a>
                        <a href="#specification" class="m-itm _wic" data-toggle="tab"><i class="fa fa-th-list" aria-hidden="true"></i> Specifications</a>
                        <a href="#feedback" class="m-itm _wic" data-visible="false"><i class="fa fa-commenting-o" aria-hidden="true"></i> Customer Feedback</a>
                    </nav>
                    <div style="background: #fff;display: inline-block;margin-top: 1em;" class="hidden-xs hidden-sm moduletable module so-extraslider-ltr best-seller best-seller-custom">

                        <div class="modcontent">
                            <div id="so_extra_slider" class="so-extraslider buttom-type1 preset00-1 preset01-1 preset02-1 preset03-1 preset04-1 button-type1">
                                <div class="extraslider-inner ">
                                    <div class="item ">
                                        <div class="item-wrap style1 ">
                                            <div class="item-wrap-inner">
                                                <div class="media-left">
                                                    <div class="item-image">
                                                        <div class="item-img-info product-image-container ">
                                                            <div class="box-label">
                                                            </div>
                                                            <img src="https://jumia.laraup.com/upload/images/product/61d41381102be.jpg" alt="Raw denim short with sequins">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="media-body">
                                                    <div class="item-info">
                                                        <!-- Begin title -->
                                                        <div class="item-title">
                                                            <a href="#" target="_self">
                                                                Raw denim short with sequins
                                                            </a>
                                                        </div>

                                                        <div class="price  price-left" style="font-size: 12px;">
                                                            <!-- Begin ratting -->
                                                            <div>
                                                                <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span><span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span><span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span><span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span><span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span>
                                                            </div>

                                                            <span class="price-new">$1</span>
                                                            <span class="price-old">$100.00</span>
                                                        </div>
                                                        <div class="price-sale price-right">
                                                            <span class="discount">
                                                                -99%
                                                                <strong>OFF</strong>
                                                            </span>
                                                        </div>
                                                    </div>

                                                </div>
                                                <!-- End item-info -->
                                            </div>
                                            <button id="btn" type="button" style="height: 49px;margin: 15px auto;width: 90%;display: flex;justify-content: center;align-items: center;background: #124d9d;" class="cart addToCartBtn btn btn-mega btn-lg"><i class="fa fa-shopping-cart" aria-hidden="true"></i><span>Add to cart</span></button>
                                            <!-- End item-wrap-inner -->
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card -df -d-co -i-ctr -mtm -pas hidden-xs hidden-sm">
                        <span class="-pbxs">Questions about this product?</span>
                        <button class="btn _def _ti -mts">
                            <!-- WhatsApp order -->
                            <form class="whatsapp-form">
                                <input class="validate" id="wa_email" name="email" required="" type="hidden" value="Raw denim short with sequins" placeholder="Item">
                                <input class="validate" id="wa_url" name="url" required="" type="hidden" value="https://jumia.laraup.com/product/raw-denim-short-with-sequins">
                                <a class="whatsapp send_form" href="javascript:void" type="submit" title="Order via WhatsApp"><i class="fa fa-whatsapp" aria-hidden="true"></i> Chat</a>
                            </form>
                            <!-- End WhatsApp order -->
                        </button>
                    </div>
                </div>
            </div>

        </div>

    </div>
</MainFrame>
</template>

<script>
import {
    StarIcon,
    ShoppingCartIcon
} from '@heroicons/vue/solid'
import MainFrame from '../MainFrame.vue'
// import ma

export default {
    components: {
        StarIcon,
        MainFrame,
        ShoppingCartIcon
    },

    data() {

    },
    mounted() {
        this.image();

    },
    methods: {
        image() {
            const _ = require('lodash');
            const $ = require('jquery');
            const magnificPopup = require('magnific-popup');
            var largeImage = this.$refs.largeImage;
            $('.large-image').magnificPopup({
                items: [{
                    src: 'https://jumia.laraup.com/upload/images/product/61dcf28427ca8.jpg'
                }, ],
                gallery: {
                    enabled: true,
                    preload: [0, 2]
                },
                type: 'image',
                mainClass: 'mfp-fade',
                callbacks: {
                    open: function () {

                        // var getIndex = this.$refs.thumbSlider;

                        var activeIndex = parseInt($('#thumb-slider .img.active').attr('data-index'));
                        var magnificPopup = $.magnificPopup.instance;
                        magnificPopup.goTo(activeIndex);
                    }
                }
            })

        }
    }
}
</script>

<style scoped>
.select2-dropdown {
    @apply absolute block w-auto box-border bg-white border-solid border-2 border-gray-600 z-50 float-left;
}

.breadcrumbs {
    margin-top: 0;
    margin-bottom: 0px;
    color: #253237;
    text-align: left;
    background: #e9ecef;
}

.breadcrumbs .breadcrumb-cate li a {
    display: block;
    text-decoration: none;
    color: #66696a;
    font-weight: normal;
    text-transform: capitalize;
}
</style>
