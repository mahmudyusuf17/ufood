<template>
    <div class="detail-makanan">
        <Navbar />
        <div class="container">
            <div class="row mt-3 justify-content-center">
                <div class="col-md-10">
                    <b-breadcrumb>
                        <b-breadcrumb-item>
                            <router-link to="/" class="text-dark">
                            <b-icon variant="text-ufood" icon="house-fill" scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon>
                            Home
                            </router-link>
                        </b-breadcrumb-item>
                        <b-breadcrumb-item><router-link to="/makanan" class="text-dark">Makanan</router-link></b-breadcrumb-item>
                        <b-breadcrumb-item active>DetailMakanan</b-breadcrumb-item>
                    </b-breadcrumb>
                </div>
            </div>
            <div class="row mt-3 justify-content-center">
                <div class="col-md-6">
                    <img class="image-round shadow" :src="'../img-produk/'+product.gambar" width="100%">
                </div>
                <div class="col-md-4">
                    <h2><strong>{{ product.nama }}</strong></h2>
                    <p class="mt-3">Harga: <strong>Rp.{{ product.harga }}</strong></p><hr>
                    <b-form v-on:submit.prevent>
                    <b-form-group
                        label="Jumlah Pesanan"
                        label-for="jml-pesanan"
                    >
                        <b-form-input
                        v-model="pesan.jumlah_pemesanan"
                        min="1"
                        type="number"
                        required
                        ></b-form-input>
                    </b-form-group>
                    <b-form-group
                        label="Keterangan"
                        label-for="keterangan"
                    >
                        <b-form-textarea
                        v-model="pesan.keterangan"
                        placeholder="keterangan seperti: pedas, tambah nasi,..."
                        rows="3"
                        max-rows="6"
                        ></b-form-textarea>
                    </b-form-group>
                    <b-button type="reset" size="sm" variant="danger" class="mr-1 float-right"> <b-icon-x-circle-fill></b-icon-x-circle-fill> Reset</b-button>
                    <b-button type="submit" variant="success" size="sm" class="mr-1 float-right" @click="pemesanan"><b-icon-cart-fill></b-icon-cart-fill> Pesan</b-button>
                    </b-form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import axios from 'axios'

export default {
    name: 'DetailMakanan',
    components : {
        Navbar,
    },
    data(){
    return{
        product: {},
        pesan: {},
    }
    },
    methods:{
        setProduct(data){
            this.product = data;
        },
        
        pemesanan(){
            if(this.pesan.jumlah_pemesanan){
                this.pesan.products = this.product;
                axios
                .post("http://localhost:3000/keranjangs", this.pesan)
                .then(() => {
                    this.$router.push({path: "/keranjang"})
                    this.$toast.success('Berhasil Masuk Keranjang', {
                        type: 'success',
                        position: 'top',
                        duration: 3000,
                        dismissble: true
                    })
                })
                .catch((err) => console.log(err))
            }else{
                this.$toast.error('Masukan Jumlah Pesanan', {
                    type: 'error',
                    position: 'top',
                    duration: 3000,
                    dismissble: true
                    })
            }
        }
    },
    mounted(){
        axios
        .get('http://localhost:3000/products/'+ this.$route.params.id)
        .then((response)=>this.setProduct(response.data))
        .catch((error)=>console.log("Gagal: ", error))
    },
}
</script>