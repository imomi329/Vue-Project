<template>
    <div class="container">
        <h1 style="color:red;">Class 01-03</h1>
        <h2 style="color:red;">纯html</h2>
        <br>
        <h3>
            我們在解析的不是文件而是一個html格式的時候，<br>
            放在v-text中 或者 {}*2 就會被當作一個準本解析，<br>
            所以此時握們要用v-html指令進行解析，<br>
            在1.0中支持{}*3這種格式，為了防止xss攻擊，去除了這個功能<br><br>
            應用場景 ： 當我們在跟前後台對接口數據時，後台會返回一個html格式，<br>
            一班是後台操作介面編譯得樣式文本，此時我們就要用v-html來進行解析<br><br>
        </h3>

        <div>
            <p v-html='html'></p>
        </div>

        <br><br>
        <h3>
            此時在界面我們就能看到顯示紅色的字，就是被成功解析了
        </h3>
        <br><br>
        <div class="form-group">
            <router-link to="/sample01">
                <button class="btn btn-large btn-block btn-primary full-width">上一頁</button>
            </router-link>
        </div>
     </div>
</template>

<script>
/* eslint-disable */
export default {
    data () {
        return {
            html : `<span style='color : red;'>显示红色的字你就解析成功了</span>`
        }
    }
}
</script>

作者：混元霹雳手ziksang
链接：https://juejin.im/post/58d4a19e5c497d0057e9afc0
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。