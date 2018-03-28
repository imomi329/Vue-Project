<template>
    <div>
        <p>hello {{world}}</p>
        <p v-text="'hello ' + world"></p>
        <p>{{`hello ${world}`}}</p>
        <p v-text="`hello ${world}`"></p>
        <button @click="world='ziksang'">改变wrold值</button>
     </div>
</template>

<script>
/* eslint-disable */
export default {
    data () {
        return {
            world : "world"
        }
    }
}
</script>

作者：混元霹雳手ziksang
链接：https://juejin.im/post/58d4a19e5c497d0057e9afc0
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。