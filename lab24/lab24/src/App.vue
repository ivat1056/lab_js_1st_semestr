<template>
  <div id="app">
    <div class="region" v-bind:style="[colorStyle, sizeStyle]"></div>
    <br><br>
    <input type="text" v-model="color" />
    <br><br>
    <input type="number" v-model="width" />
    <br><br>
    <input type="number" v-model="height" />
  </div>
</template>

<script>
export default {
   data() {
    return {
            color: 'red',
            width: 75,
            height: 75
     }
  },
    computed:{
        colorStyle(){
            return { 'background-color': this.color }
        },
        sizeStyle(){
            return {
                height: this.height + 'px', 
                width: this.width + 'px'
            }
        }
    }
};
</script>