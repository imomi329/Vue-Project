<template>
    <div class="container">
        <h1 style="color:red;">Class 01-06</h1>
        <h2 style="color:red;">修飾賦</h2>
        <br>
        <h3>
            修飾符（Modifiers）是以半角句號 . <br>指明的特殊後綴，用於指出一個指令應該以特殊方式綁定。<br><br>
            應用場景：對於壹些特殊的指令操作時需要，<br>比方說對組件加事件，組織元素的默認行為，組織冒泡...等等一系列，<br>
            官方文檔有詳細解說每一個修飾賦的具體用途<br><br>
            首先我們對components文件夾中創建一個myButton組件<br><br>
        </h3>
        <div>
            <my-button @click.native="buttonClick"></my-button>
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
     }
}
</script>

作者：混元霹雳手ziksang
链接：https://juejin.im/post/58d4a19e5c497d0057e9afc0
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。