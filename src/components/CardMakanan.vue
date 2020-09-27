<template>
    <div class="card shadow card-makanan" style="width: 18rem;">
    <img :src="'./img-produk/'+ product.gambar" class="card-img-top" :alt="product.nama">
    <div class="card-body">
        <div class="text-center">
        <h5 class="card-title">{{ product.nama }}</h5>
        <p class="card-text">Harga: Rp. {{ product.harga }}</p>
        <a href="#" class="btn btn-success"><b-icon-cart-fill></b-icon-cart-fill> Pesan Sekarang</a>
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
