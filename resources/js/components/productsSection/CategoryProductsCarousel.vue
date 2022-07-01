<template>
<div class="max-w-screen-xl mx-auto rounded-md  space-x-2 px-1">
    <div class="row">
        <div class="grid col-lg-12 col-md-12 col-sm-12 col-xs-12 my-2" style="background:#17a8d6;display: block;display: flex;justify-content: space-between;align-items: center;padding: 10px;">
            <h4 class="hidden-xs" style="color:rgb(0, 0, 0);margin-bottom: 0;">What's on your wrist | Watches from 200/=</h4>
            <div class="col -df -j-end -fsh0">
                <a href="#" class="-df -i-ctr -upp -m -mls -pvxs" style="color:rgb(0, 0, 0);">See All <i class="fa fa-chevron-right" aria-hidden="true"></i></a>
            </div>
        </div>

        <carousel :items-to-show="2" :settings="settings" :breakpoints="breakpoints">
            <slide v-for="slide in 10" :key="slide">
                <div class="carousel__item hover:shadow-sm rounded-sm text-gray-300 my-1">
                    <div class="owl2-item cloned mr-1 brder-2 border-green-300">
                        <div class="item-inner product-thumb trg transition product-layout">
                            <div class="product-item-container">
                                <div class="left-block ">
                                    <div class="image product-image-container">
                                        <div class="box-label">
                                            <!-- <p class="officialstore">Fashion &amp; Style</p> -->
                                             <span class="label-sale off">-50%</span>
                                        </div>
                                        <a class="lt-image" href="http://jumia.laraup.com/product/fashion-style-bodycon-vest-dress-maroon">
                                            <img height="200" src="http://jumia.laraup.com/upload/images/product/61da8225302c7.jpg" class="img-1 img-responsive border-2 border-yellow-300">
                                        </a>
                                        <img src="http://jumia.laraup.com/upload/images/img_type/5.png" class="officialstores border-2 border-yellow-300">
                                    </div>
                                </div>
                                <div class="right-block">
                                    <div class="caption">
                                        <h4 style="height: 40px;font-size: 1em;line-height: 20px;text-overflow: ellipsis;border-bottom: 0;
                                        overflow: hidden;margin-bottom: 3px;">
                                        <a style="color: black;float: left;text-align: left;" 
                                        href="http://jumia.laraup.com/product/fashion-style-bodycon-vest-dress-maroon">Fashion &amp; Style Bodycon Vest Dress - Mar...</a></h4>
                                        <div class="row total-price clearfix" style="visibility: visible; display: block;">
                                            <div class="col-md-12 price" style="min-height: 40px;text-align: left;display: block;line-height: 20px;padding: 0;top: 0px;">
                                                <span class="price-new" style="font-size: 1em;color: #75757a;">$ 750</span><br>
                                                <span class="price-old" style="margin: 0;">$ 1499.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </slide>

            <template #addons>
                <navigation />
                <!-- <pagination /> -->
            </template>
        </carousel>
        <!-- <div class="col-md-12 col-sm-12 col-xs-12" style="overflow: hidden;padding: 0;">
            <div class="clearfix module horizontal">
                <div class="products-category">
                    <div class="category-slider-inner products-list yt-content-slider releate-products grid owl2-carousel owl2-theme owl2-responsive-1200 owl2-loaded" data-rtl="yes" data-autoplay="yes" data-pagination="no" data-delay="4" data-speed="0.6" data-margin="5" data-items_column0="6" data-items_column1="6" data-items_column2="5" data-items_column3="3" data-items_column4="2" data-arrows="yes" data-lazyload="yes" data-loop="yes" data-hoverpause="yes">

                        <div class="owl2-stage-outer">
                            <div class="owl2-stage" style="transform: translate3d(-1405px, 0px, 0px); transition: all 0.6s ease 0s; width: 4449.17px;">
                        
                                <div class="owl2-item cloned" style="width: 229.167px; margin-right: 5px;">
                                    <div class="item-inner product-thumb trg transition product-layout">
                                        <div class="product-item-container">
                                            <div class="left-block ">
                                                <div class="image product-image-container">
                                                    <div class="box-label">
                                                        <p class="officialstore">Fashion &amp; Style</p> <span class="label-sale">-50%</span>
                                                    </div>
                                                    <a class="lt-image" href="http://jumia.laraup.com/product/fashion-style-bodycon-vest-dress-maroon">
                                                        <img height="200" src="http://jumia.laraup.com/upload/images/product/61da8225302c7.jpg" class="img-1 img-responsive">
                                                    </a>
                                                    <img class="officialstores" src="http://jumia.laraup.com/upload/images/img_type/5.png">
                                                </div>
                                            </div>
                                            <div class="right-block">
                                                <div class="caption">
                                                    <h4 style="height: 40px;font-size: 1em;line-height: 20px;text-overflow: ellipsis;border-bottom: 0;overflow: hidden;margin-bottom: 3px;"><a style="color: black;float: left;text-align: left;" href="http://jumia.laraup.com/product/fashion-style-bodycon-vest-dress-maroon">Fashion &amp; Style Bodycon Vest Dress - Mar...</a></h4>
                                                    <div class="row total-price clearfix" style="visibility: hidden; display: block;">
                                                        <div class="col-md-12 price" style="min-height: 40px;text-align: left;display: block;line-height: 20px;padding: 0;top: 0px;">
                                                            <span class="price-new" style="font-size: 1em;color: #75757a;">$ 750</span><br>
                                                            <span class="price-old" style="margin: 0;">$ 1499.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                                               
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div> -->
    </div>
</div>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import {
    Carousel,
    Slide,
    Pagination,
    Navigation
} from "vue3-carousel";

export default {
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },
    data: () => ({
        // carousel settings
        settings: {
            itemsToShow: 2,
            snapAlign: "center",
        },
        // breakpoints are mobile first
        // any settings not specified will fallback to the carousel settings
        breakpoints: {
            // 700px and up
            768: {
                itemsToShow: 3,
                snapAlign: "center",
            },
            // 1024 and up
            1024: {
                itemsToShow: 6,
                snapAlign: "start",
            },
        },
    }),
}
</script>

<style>
.carousel__item {
    min-height: 200px;
    width: 100%;
    /* background-color: var(--vc-clr-primary); */
    /* color: var(--vc-clr-white); */
    font-size: 14px;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.carousel__slide {
    padding: 10px;
    border: 1px solid var(--vc-clr-primary);
    background-color: #fff;
}

.carousel__prev,
.carousel__next {
    box-sizing: content-box;
    border: 5px solid white;
}

.carousel__prev--in-active,
.carousel__next--in-active {
    display: none;
}

.off {
	position: absolute;
	top: 0;
	left: 0;
	font-size: 0;
	width: 61px;
	height: 24px;
	z-index: 1;
    background:blue;
    color: #fff;
	/* background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHoAAAAwCAYAAADemm7uAAAAAXNSR0IArs4c6QAABStJREFUeF7tXD1s1DAU/t4xUFR+BsTEghCUnwUWBGJihYWtYqQTUyshBsQGYkEMSAxIbMBY3cBSjisLIAZg6BUQDDAgipAQGz9CRQhilOTiOI5ztu9yd0l5XdJrfbHj956/73vPMUH7EbO7jkA0ZgDsA2g/hNgKECAAUHiNfomv4eegew3/nPw9vMZfUNrHHxF0r2p7/b6V7S95LG0e1PmInktpJ+dHm4+okeN8JtNpmk9pj659CvoLbxGP6/SOCWxcfwkQ5wCsi63SHbBspD2E+lCqwxQaXfm+qX1p/Wn9JOPUJ7eoP9nONl4BCNWp1flR5i6ZjzH2F1lTzE4dADAP0B4ZqaqnqB6qRrSvJ0eRW+DJVewvt2K5RrQhUjORl6xslna+856xR3bl7Rp69xWAzsf+mBhDi2bpjV0PjjzZ4vHJw5lWBPllw/JuWilMkWO8b8G4ZFQr/fmMK7cCJfNTj/5IzO09CgRPINDIYG8uchmjnThIxkkVLqPPpw4jRs7juoLYOQGJ2T03AXEmdVjN41V804mGMfKSO/UROWPEsGjUOSyvCUY7rGwk5qaeAXQ4x6ariJlrhRNI9VEWRts5QWjorxDYYozojIfrDNzANh08yxw5XeJgjeiEYKiAWcBuC+/Vx0pTNA8qm654fyRmp4SUvUWsrbK6VjXaKHR7eZiZEl+HvEQZOlrMTYk8NlkiTCZPXFm3FonGCClTt2vjYh2NbkSXhRUW9sc6WiYM4wxhyfPeS0ebI9qVbbpGtGOEJQsJ6+gsCdElmyl/YckTMEbrueJBc/mV1dFlY/QgGSgr63ZdaQycQBIaLaNlyhPIZEZN+nNQO6G8CstP+aoU6+hslU5PFpmqRK4cZEw6uph1s47O5v4dIkeC6yAr2xB0O2O0F0bXVkd/i5duX53JOjrdPVGPevRb1tG5Qk2vTJVrRNtzz6PV0Y3HBRHtyjZZR8udOJXOdYt5xmgvjHbIrVdTR18vH6MHYZuso+MlsrAWULBHzaoGxFnW0b0welj171HraDSO945o1tFrQUd/x6bVbYzRXhjtyrrte7hGWI+ep8XOqfIxWmKMibjY2HxZ+8gdq2X/AyeAmKF25zbr6LWto8Nk2HZaXPrMOlqN6qIM4RByz3l2re1vVyvS/dajBZ7T4tKR8FaM0V4YXTsdfYHaS1diQ5ed62YdnW4XMkXiMOrfRh2ND/i1eR89evQrNTTXo81vi9ZbR0ckLPEB1tFrEaOB19i48yA1m39TQ/O+7jQpYn3/uyY6uoHj1Oq0VT5XPkazjh49Rmd3zz6m+51jqpEV1s17xtxOdHCN6LHVo7+D/hyi1st3eUMbWbctg5VUUbgeXZl6dHhoSIAT1O4s6kZmHZ07E8TxTJFeZ7SMqx4diAvUXo40s9nQrKPTecllxlxXtjHvIwea1OpMFxmZdbR+jIfxdCT11KWS3i0rtR4tXmBy4ig1n67aDe2b442YNb8fLQ/e0TNTmarYUN/HXsDk+mmbkRmjvTHalXUPvR4dsuGLuLd8WTlaqFdADyHXzTp6uDoatIoA09TqLPS0rPZPrkfXqx69AoiTtLD80sfIKRnrm22yjh6Rjv4C0DX8/nODHrz66WtkxmhvjB51PZreA7iKH5vvJOXGfozcI6KT5Gkfe7i4Hj0YRguE9eOHENSkhc6tfg1rToFyPXq89WjCJwRoQaCFiQ0PXOSSrwNwPVrVvL75hKi981mg3wCsAPiIACtoYAWB+IiGeEN3X732NZxv+3+7xCfUGdHzEAAAAABJRU5ErkJggg==) no-repeat; */
	background-size: 100% 100%;
}

</style>
