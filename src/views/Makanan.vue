<template>
    <div>
        <Navbar />
        <div class="container mt-3">
            <div class="row justify-content-center">
                <div class="col-md-4">
                <h3 class="ml-2">Daftar <span class="text-ufood">Makanan</span></h3>
                </div>
            <div class="col-md-6 ml-auto">
                <!-- <b-nav-form class="float-right mr-2">
                    <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                    <b-button variant="btn-success" class="btn-success my-2 my-sm-0" size="sm" type="submit">Search</b-button>
                </b-nav-form> -->
                <b-input-group  size="sm" class="mb-2 mr-sm-2 mb-sm-0">
                <b-input v-model="search" @keyup="searchMakanan" id="inline-form-input-search" placeholder="cari makanan kesukaanmu.."></b-input>
                <b-input-group-prepend is-text>
                    <b-icon icon="search"></b-icon>
                </b-input-group-prepend>    
                </b-input-group>
            </div>
            </div>
        <div class="col-md-12 justify-content-center">
        <hr />
        </div>
        <div class="row mt-5 justify-content-center">
            <div class="col-md-3 mx-3 mr-5 my-3" v-for="product in products" :key="product.id">
            <CardMakanan :product="product" />
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import CardMakanan from '@/components/CardMakanan.vue'
import axios from 'axios'
export default {
    name: "Makanan",
    components: {
    Navbar,
    CardMakanan
    },
    data(){
        return{
        products: {},
        search:''
        }
    },
    methods:{
        setProduct(data){
        this.products = data
        },
        searchMakanan() {
        axios.get('http://localhost:3000/products?q='+ this.search)
        .then((response)=>this.setProduct(response.data))
        .catch((error)=>console.log("Gagal: ", error))
        }
    },
    mounted(){
        axios.get('http://localhost:3000/products')
        .then((response)=>this.setProduct(response.data))
        .catch((error)=>console.log("Gagal: ", error))
    }
}
</script>

