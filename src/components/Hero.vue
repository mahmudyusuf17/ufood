<template>
    <div class="hero">
        <!-- desktop -->
        <div class="d-none d-md-block">
            <div class="row mt-6 justify-content-center">
                <div class="col-md-4">
                    <div class="d-flex h-100">
                        <div class="justify-content-center align-self-center">
                        <h2><strong>Pilih Disini,</strong><br>Makanan Kesukaanmu.</h2>
                        <p>Apapun pilihan kamu, aku dukung. <br> Yuk pesan sekarang</p>
                        <b-button variant="btn-success" class="btn-success my-2 my-sm-0" size="md" type="submit" to="/pesan"><b-icon-arrow-right></b-icon-arrow-right> Pesan</b-button>
                    </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <img src="../assets/images/hero.png" alt="hero" width="100%">
                </div>
            </div>
        </div>

        <!-- mobile -->
        <div class="d-sm-block d-md-none">
            <div class="row mt-4">
                <div class="col-md-6">
                    <img src="../assets/images/hero.png" alt="hero" width="100%">
                </div>
                <div class="col-md-4">
                    <div class="d-flex h-100 text-center">
                        <div class="justify-content-center align-self-center">
                        <h2 class="mt-4"><strong>Pilih Disini,</strong><br>Makanan Kesukaanmu.</h2>
                        <p>Apapun pilihan kamu, aku dukung. <br> Yuk pesan sekarang</p>
                        <b-button variant="btn-success" class="btn-success my-2 my-sm-0 mb-5" size="md" type="submit" to="/makanan"><b-icon-arrow-right></b-icon-arrow-right> Pesan</b-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
    name: 'Hero'
}
</script>
