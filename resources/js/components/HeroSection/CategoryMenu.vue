<template>
<div class="bg-white py-3 rounded-md hidden lg:block">
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

    <ul class="space-y-1 mt-4 text-xs cursor-pointer">
        <li v-for="item in items" :key="item" class="flex items-center hover:text-red-500 hover:font-bold hover:shadow-lg py-2 categories">
            <Icon class="h-6 w-6 mr-2 text-gray-400" />
            <a href="" class="">{{item.title}}</a>

            <div class="subMenu h-96">
                <div class="content bg-white w-full">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="grid grid-cols-4">

                                <div class="col-sm-12 static-menu">
                                    <div class="menu">
                                        <ul>
                                            <li>
                                                <a href="https://jumia.laraup.com/category/home-improvement-tools/tools-1" class="main-menu">Tools
                                                </a>
                                                <ul>
                                                    <li><a href="https://jumia.laraup.com/category/home-improvement-tools/tools-1/measurement-analysis-tools"> Measurement &amp; Analysis Tools</a></li>
                                                    <li><a href="https://jumia.laraup.com/category/home-improvement-tools/tools-1/hand-tools"> Hand Tools</a></li>
                                                    <li><a href="https://jumia.laraup.com/category/home-improvement-tools/tools-1/power-tools"> Power Tools</a></li>
                                                    <li><a href="https://jumia.laraup.com/category/home-improvement-tools/tools-1/garden-tools"> Garden Tools</a></li>
                                                    <li><a href="https://jumia.laraup.com/category/home-improvement-tools/tools-1/tool-sets"> Tool Sets</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="col-sm-12 static-menu">
                                    <div class="menu">
                                        <ul>
                                            <li>
                                                <a href="https://jumia.laraup.com/category/home-improvement-tools/indoor-lighting" class="main-menu">Indoor Lighting
                                                </a>
                                                <ul>
                                                    <li><a href="https://jumia.laraup.com/category/home-improvement-tools/indoor-lighting/ceiling-lights"> Ceiling Lights</a></li>
                                                    <li><a href="https://jumia.laraup.com/category/home-improvement-tools/indoor-lighting/pendant-lights"> Pendant Lights</a></li>
                                                    <li><a href="https://jumia.laraup.com/category/home-improvement-tools/indoor-lighting/downlights"> Downlights</a></li>
                                                    <li><a href="https://jumia.laraup.com/category/home-improvement-tools/indoor-lighting/chandeliers"> Chandeliers</a></li>
                                                    <li><a href="https://jumia.laraup.com/category/home-improvement-tools/indoor-lighting/wall-lamps"> Wall Lamps</a></li>
                                                    <li><a href="https://jumia.laraup.com/category/home-improvement-tools/indoor-lighting/night-lights"> Night Lights</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="row">
                                <div class="col-sm-12 static-menu">
                                    <div class="menu">
                                        <ul>
                                            <li>
                                                <a href="https://jumia.laraup.com/category/home-improvement-tools/toolss" class="main-menu">Tools
                                                </a>
                                                <ul>
                                                    <li><a href="https://jumia.laraup.com/category/home-improvement-tools/toolss/welding-equipment"> Welding Equipment</a></li>
                                                    <li><a href="https://jumia.laraup.com/category/home-improvement-tools/toolss/welding-soldering-supplies"> Welding &amp; Soldering Supplies</a></li>
                                                    <li><a href="https://jumia.laraup.com/category/home-improvement-tools/toolss/machine-tools-accessories"> Machine Tools &amp; Accessories</a></li>
                                                    <li><a href="https://jumia.laraup.com/category/home-improvement-tools/toolss/woodworking-machinery"> Woodworking Machinery</a></li>
                                                    <li><a href="https://jumia.laraup.com/category/home-improvement-tools/toolss/tool-storage-items"> Tool Storage Items</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="col-sm-12 static-menu">
                                    <div class="menu">
                                        <ul>
                                            <li>
                                                <a href="https://jumia.laraup.com/category/home-improvement-tools/led-lighting" class="main-menu">LED Lighting
                                                </a>
                                                <ul>
                                                    <li><a href="https://jumia.laraup.com/category/home-improvement-tools/led-lighting/led-strips"> LED Strips</a></li>
                                                    <li><a href="https://jumia.laraup.com/category/home-improvement-tools/led-lighting/led-downlights"> LED Downlights</a></li>
                                                    <li><a href="https://jumia.laraup.com/category/home-improvement-tools/led-lighting/led-panel-lights"> LED Panel Lights</a></li>
                                                    <li><a href="https://jumia.laraup.com/category/home-improvement-tools/led-lighting/led-spotlights"> LED Spotlights</a></li>
                                                    <li><a href="https://jumia.laraup.com/category/home-improvement-tools/led-lighting/led-bar-lights"> LED Bar Lights</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                        <div class="col-md-4">
                            <div class="row"> </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
        <li class="flex items-center hover:text-red-500 hover:font-bold  hover:shadow-lg py-2 px-4">
            <Icon class="h-6 w-6 mr-2 text-gray-400" />
            <a href="" class="">Men's Fashion</a>
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
        <li class="flex items-center hover:text-red-500 hover:font-bold hover:shadow-lg py-2 px-4">
            <Icon class="h-6 w-6 mr-2 text-gray-400" />
            <a href="" class="">Outdoor Fun & Sports</a>
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

    data(){
        return{
            items: [
    {
       title: 'name'
      },
      {
       title:'hoverMe',
       child : [
       {childTitle : 'ChildTitle1'},
        {childTitle : 'ChildTitle2'},
         {childTitle : 'ChildTitle3'},
         
       ] ,
       },
       { 
        title: 'name3'}
    ]
        }
    }

};
</script>
<style scoped>

.categories{
  padding-left: 1rem/* 16px */;
    padding-right: 1rem/* 16px */;
  position: relative;
}

.subMenu{
  display: none;
  position:absolute;
  background-color:#fff;
  height:100%;
  width:768px;
  top: 0;
  left: 100%;
}

li.subMenu.content {
	display: none;
	padding: 10px 15px;
	background: #fff;
	border: 1px solid #e6e6e6;
    color:#000;
	border-radius: 2px;
	margin-top: 5px;
}

.categories:hover .subMenu {
  display: block;
  z-index: 998;
}

</style>
