<template>
    <div align = "center" class="align-middle">
    <StudentNavbar/>
    <br/>
    <br/>   
    <h1 class="text-dark">Informacije o smestaju i restoranu</h1>
    <br/>

    <div>
    <b-card no-body class="overflow-hidden" style="max-width: 900px;">
        <b-row no-gutters>
        <b-col md="6">
            <b-card-img src="https://www.google.com/maps/d/thumbnail?mid=1Yz6IdKjOLF0xl_SeDjN_v5jIsPg" class="rounded-0"></b-card-img>
        </b-col>
        <b-col md="6">
            <b-card-body title="Moj smestaj i restoran">
            <b-card-text>
                <br/>
                <div align = "left" class="align-left">
                    <b>Moj Smestaj</b>
                </div>
                <div align = "left" class="align-left">
                    Hotel Metropol
                </div>
                <div align = "left" class="align-left">
                    Bulevar Kralja Aleksandra 50
                </div>
                <star-rating  round-start-rating = 'false' fixed-points='2'  increment='0.5' rating='0' show-rating='0' star-size = '20'></star-rating>
                <div>
                    <input type="username" class="form-control" placeholder="Komentar" @keypress="posalji">
                </div>
            </b-card-text>
            <hr class="my-2" />
            <b-card-text>
                <br/>
                <div align = "left" class="align-left">
                    <b>Moj Restoran</b>
                </div>
                <div align = "left" class="align-left">
                    Menza Karaburma
                </div>
                <div align = "left" class="align-left">
                    Mije Popovica 7b
                </div>
                <star-rating  round-start-rating = 'false' fixed-points='2'  increment='0.5' rating='0' show-rating='0' star-size = '20'></star-rating>
                <div>
                    <input type="username" class="form-control" placeholder="Komentar" @keypress="posalji">
                </div>
            </b-card-text>

            </b-card-body>
        </b-col>
        </b-row>
    </b-card>
    </div>

    </div>
</template>

<script>
import StudentNavbar from './StudentNavbar'
export default {
    name: "StudentGames",
    components: {
        StudentNavbar
    },
    methods:{
        posalji(e){
            if (!e) e = window.event;
            var keyCode = e.keyCode || e.which;
            if (keyCode == '13'){
                this.$alert("Uspesno ste ostavili komentar.", "Uspesno", "success");
            }
        }
    }
}
</script>

