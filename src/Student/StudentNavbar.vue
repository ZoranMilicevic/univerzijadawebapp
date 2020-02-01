<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Univerzijada 2020</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
        <li class="nav-item">
             <router-link class = "nav-link" to = '/studentGames' selected>Moje utakmice</router-link>
        </li>
        <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Smestaj i restoran
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <router-link class="dropdown-item" to="/studentAccomodation" >Informacije o smestaju i restoranu</router-link>
                <router-link class="dropdown-item" to="/studentReqest">Zahtev za promenu</router-link>
                </div>
        </li>
        <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Turisticki sadrzaj
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <router-link class="dropdown-item" to="/kalemegdan">Kalemegdan</router-link>
                <router-link class="dropdown-item" to="/kalemegdan">Hram Svetog Save</router-link>
                <router-link class="dropdown-item" to="/kalemegdan">Ada Ciganlija</router-link>
                </div>
        </li>
        <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Moji podaci
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <router-link class="dropdown-item" to="/studentInfo">Informacije</router-link>
                <router-link class="dropdown-item" to="/studentChangePass">Promena lozinke</router-link>
                </div>
        </li>
    </ul>
  </div>

    <div class="navbar-collapse collapse w-300 order-3">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <router-link class = "nav-link" to = '/'>Odjava</router-link>
            </li>

        </ul>
    </div>
</nav>
</template>

<script>
export default {
    name: "StudentNavbar"
}
</script>

<style>

</style>