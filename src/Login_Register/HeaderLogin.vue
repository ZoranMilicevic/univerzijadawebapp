<template>
    <div>
        <br/>
        <br/>
        <h1 class = "text-dark">Univerzijada 2020</h1>
        <div id="nav">
            <router-link to="/">Prijava na sistem</router-link> |
            <router-link to="/register">Registracija na sistem</router-link>
        </div>
    </div>
</template>


<script>
export default {
  name: "HeaderLogin"
}
</script>

<style scoped>
  .header {
    background: #333;
    color: #fff;
    text-align: center;
    padding: 10px;
  }
  .header a {
    color: #fff;
    padding-right: 5px;
    text-decoration: none;
  }
</style>