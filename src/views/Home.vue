<template>
  <div class="home">
    <Navbar />
    <div class="container">
      <Hero />
      <div class="row mt-5 justify-content-center">
        <div class="col-md-6">
          <h3>Pesanan <span class="text-ufood">Favorit</span></h3>
        </div>
        <div class="col-md-4">
          <router-link to="/makanan" class="btn btn-success btn-sm float-right">Lihat semua <b-icon-arrow-right></b-icon-arrow-right></router-link>
        </div>
      <div class="col-md-10 justify-content-center">
      <hr />
      </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-md-3 mx-3 mr-5 mb-3" v-for="product in products" :key="product.id">
          <CardMakanan :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Hero from '@/components/Hero.vue'
import CardMakanan from '@/components/CardMakanan.vue'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    Navbar,
    Hero,
    CardMakanan,
  },
  data(){
    return{
      products: {}
    }
  },
  methods:{
    setProduct(data){
      this.products = data
    }
  },
  mounted(){
    axios.get('http://localhost:3000/best-products')
      .then((response)=>this.setProduct(response.data))
      .catch((error)=>console.log("Gagal: ", error))
  }
}
</script>
