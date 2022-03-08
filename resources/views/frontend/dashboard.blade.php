<html>
<head>

</head>

<body>
<div id="app">
    <router-view></router-view>
    {{-- <Welcome></Welcome> --}}
</div>

<script src="{{mix('/web-assets/js/app.js')}}" defer></script>
<script>
    import Welcome from "../../js/components/Welcome";
    export default ({
        components:{
            Welcome
        }
    })
</script>
</body>
</html>


