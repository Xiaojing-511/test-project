<!--
 * @Author: your name
 * @Date: 2021-06-08 19:56:11
 * @LastEditTime: 2021-06-14 12:07:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /test-project/src/components/HelloWorld.vue
-->
<template>
  <div class="hello">
    hello......
    <button @click="goTest">test></button>
  </div>
</template>

<script>
import { onMounted } from 'vue';
import { useRoute,useRouter } from 'vue-router'
export default {
  name: 'HelloWorld',
  setup(){
    const route = useRoute();
    const router = useRouter();
    const routeMsg = {
      from : route.query.from,
      msg: 'hello'
    };
    onMounted(()=>{
      console.log(route.params,route.query);
    })
    const goTest = ()=>{
      router.push({path:'/test',query:{from1: '111',from: routeMsg.from,msg:routeMsg.msg,id:'qqqqq'}});
    }
    return {
      goTest
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
