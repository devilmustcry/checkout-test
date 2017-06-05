<template>
  <div class="">
    <div class="field">
      <p class="control">
        <a class="button is-primary">Cart</a>
        <div class="box">
          <li v-for="product in chosenProduct">Name : {{product.name}} Price : {{product.price}} <a class="button is-danger" v-on:click="removeProduct(product.id)">Remove</a></li> 
        </div>
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'chosenProduct'
    ])
  },
  methods: {
    ...mapActions([
      'removeProduct'
    ])
  }
}
</script>

<style>
.dropdown {
  box-shadow: 0 0 8px #777;
  display: none;
  left: 0;
  position: absolute;
  top: 100%;
  z-index: 1000;
}

.dropdown.is-open {
  display: block
}
</style>
