<template>
    <div class="container">
        <h1 style="color:red;">Class 01-06-01</h1>
        <h2 style="color:red;">修飾賦</h2>
        <br>
        <h3>
            我們用jquery的時候經常會遇到這種場景，當我們一個layer層彈出來的時候，內部是一個超過整個屏幕長度的滾動，<br>
            當我們滑動layer的時候會導致裡面的滾動也會一起滾動起來，這個是一件很操蛋的事，<br>
            在網上也有著很多相關解決的辦法，vue可以通過修飾符來解決這個問題index.html文件中加一個視口度適配，更好的來查看效果<br><br>
        </h3>
        <div>
            <my-button @click.native="buttonClick"></my-button>
            <ul>
                <li v-for="item in list" :key="item">
                    <h1>{{item}}</h1>
                </li>
            </ul>
            <div @touchmove.prevent class="layer"></div>
        </div>
        <br><br>
        <h3>
            我們可以嘗試一下如果我們去掉.native的話<br>你會發現組件無法alert (原生點擊)的彈框，這是為什麼呢？<br>
            正常的情況在一個單個組件內部自己使用v-on事件，ok都不會有問題，<br>如果在一個組件上定義一個指令事件，必須要用.native，在這裡大家一定要注意<br><br>
        </h3>
        <br><br>
        <div class="form-group">
            <router-link to="/sample0161">
                <button class="btn btn-large btn-block btn-success full-width">####推薦很實用的demo</button>
            </router-link>
        </div>
        <div class="form-group">
            <router-link to="/sample01">
                <button class="btn btn-large btn-block btn-primary full-width">上一頁</button>
            </router-link>
        </div>
     </div>
</template>

<script>
/* eslint-disable */
import myButton from './myButton.vue'
export default {
    components : {
         myButton
     },
     methods : {
         buttonClick () {
             alert("原生點擊")
         }
     },
    data () {
        return {
            list : [1,2,3,4,5,6,7,8,9,10]
        }
    }
}
</script>

<style>
body,html {width:100%;height:100%}
h1{margin-top:10rem;}
.layer{width:100%;height:100%;position:fixed;top:0;left:0;z-index:99;background:rgba(0,0,0,.5)}
</style>

作者：混元霹雳手ziksang
链接：https://juejin.im/post/58d4a19e5c497d0057e9afc0
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。