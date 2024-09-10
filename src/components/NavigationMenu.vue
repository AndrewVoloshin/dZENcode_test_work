<template>
    <div class="fixed-top d-flex justify-content-center nav-menu ">
        <nav class="w-100">
            <ul class="nav flex-column align-items-center text-center">
                <li class="w-100">
                    <RouterLink class="nav-link"
                                to="/">Home</RouterLink>
                </li>
                <li class=" w-100">
                    <RouterLink class="nav-link"
                                to="/order">Order</RouterLink>
                </li>
                <li class="w-100">
                    <a class="nav-link"
                       href="#">Link</a>
                </li>
                <li class="w-100">
                    <RouterLink class="nav-link"
                                to="/products">Products</RouterLink>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>

</script>

<style scoped>
.nav-menu {
    top: 56px;
    width: 200px;
    height: 100vh;
    background: #eff3f6;
    box-shadow: 0.5rem 0 1rem rgba(0, 0, 0, 0.15);
    z-index: 1000;
}

.nav-link {
    display: block;
    width: 100%;
    padding: 10px;
}

.nav-link:hover {
    background-color: #f8f9fa;
}
</style>