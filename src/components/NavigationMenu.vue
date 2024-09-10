<template>

    <div class="col-2 fixed-top d-flex justify-content-center"
         style="height: 100vh; top: 70px;">
        <ul class="nav flex-column align-items-center text-center w-100">
            <li class="nav-item w-100">
                <RouterLink class="nav-link"
                            to="/">Home</RouterLink>
            </li>
            <li class="nav-item w-100">
                <RouterLink class="nav-link"
                            to="/about">About</RouterLink>
            </li>
            <li class="nav-item w-100">
                <a class="nav-link"
                   href="#">Link</a>
            </li>
            <li class="nav-item w-100">
                <RouterLink class="nav-link"
                            to="/products">Products</RouterLink>
            </li>
        </ul>
    </div>


</template>

<script>
export default {
    name: "NavigationMenu",
};
</script>

<style scoped>
.sidebar {
    height: 100vh;
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