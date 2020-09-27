<template>
    <div>
        <b-navbar toggleable="lg" type="light">
        <div class="container">
            <div class="col-md-8">
                <router-link to="/" class="navbar-brand router-link-exact-active"><img class="d-inline-block align-top" src="../assets/images/logo.png" width="15%"></router-link>
                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            </div>

        <b-collapse id="nav-collapse" is-nav>
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
            <router-link class="nav-link mr-3" to="/">Home</router-link>
            <router-link class="nav-link mr-3" to="/makanan">Makanan</router-link>
            <router-link class="nav-link" to="/keranjang"> 
            <b-icon-bag-fill></b-icon-bag-fill>
            <span class="badge badge-success ml-2">0</span>
            </router-link>
            </b-navbar-nav>
        </b-collapse>
        </div>
        </b-navbar>
    </div>
</template>

<script>
export default {
    name: "navbar",
};
</script>

<style></style>
