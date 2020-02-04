<template>
  <div class="hello">
    <h1>vuex中的state值{{ this.$store.state.count }}</h1>
    <h2>vuex中的getters值{{ this.$store.getters.getstate }}</h2>
    <button @click="addcount">+</button>
    <button @click="reducecount">-</button>
    <h3>我是mapstatecount=>{{ count1 }}</h3>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState, mapActions, mapGetters } from "vuex";
export default Vue.extend({
  computed: {
    ...mapState({
      count1: function(state) {
        return this.$store.state.count; //相当于展开运算符，简化vuex一长串写法
      }
    })
  },
  methods: {
    addcount() {
      var somebody = "我是后加的";
      // this.$store.commit('add')//vue是不建议我们这样写的
      this.$store.dispatch("addactions", somebody); //效果是一样的。代码是在冗余
    },
    reducecount() {
      this.$store.dispatch("redactions");
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
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
