<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Univerzijada 2020</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
        <li class="nav-item">
             <router-link class = "nav-link" to = '#'>Pregled</router-link>
        </li>
        <li class="nav-item">
            <router-link class = "nav-link" to = '/organiserRequests'>Studentski zahtevi</router-link>
        </li>
        <li>
            <router-link class = "nav-link" to = '#'>Rezervisanje hala</router-link>
        </li>
    </ul>
  </div>

    <div class="navbar-collapse collapse w-300 order-3">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Nalog
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <router-link class="dropdown-item" to="/organiserInformation">Informacije</router-link>
                <router-link class="dropdown-item" to="/organiserChangePass">Promena lozinke</router-link>
                <div class="dropdown-divider"></div>
                <router-link class="dropdown-item" to="/">Odjava</router-link>
                </div>
            </li>
        </ul>
    </div>
</nav>
</template>

<script>
export default {
    name: "OrganiserNavbar"
}
</script>

<style>

</style>