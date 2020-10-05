<template>
    <div class="card shadow card-makanan" style="width: 18rem;">
    <img :src="'./img-produk/'+ product.gambar" class="card-img-top" :alt="product.nama">
    <div class="card-body">
        <div class="text-center">
        <h5 class="card-title">{{ product.nama }}</h5>
        <p class="card-text">Harga: Rp. {{ product.harga }}</p>
        <router-link :to="'/makanan/'+product.id" class="btn btn-success"><b-icon-cart-fill></b-icon-cart-fill> Pesan Sekarang</router-link>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    name: 'CardMakanan',
    props: ['product']
}
</script>
