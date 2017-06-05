<template>
  <div class="">
    <button v-on:click="toggleDropdown()">
      Cart
    </button>
    <ul>
      <li v-for="product in products">
        Name : {{product.name}} Price : {{product.price}}
      </li>
    </ul>
    <div class="box dropdown">
      DROP
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      products: [{ 'name': 'test', 'price': 0 }]
    }
  },
  methods: {
    toggleDropdown () {
      document.querySelector('dropdown').classList.toggle('is-open')
    }
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
