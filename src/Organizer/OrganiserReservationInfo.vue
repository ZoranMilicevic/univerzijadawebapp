<template>
    <div>
    <OrganiserNavbar/>
        <div align = "center" class="align-middle">
            <br/>
            <br/>   
            <h1 class="text-dark">Rezervacija hale za utakmicu</h1>
            <br/>
            <br/>
            <br/>
            <table class="w-25 p-3 table bg-light text-dark table-striped table-bordered" >
            <tbody>
                <tr>
                <th scope="row">Utakmica:</th>
                <td>Srbija - Nemacka</td>
                </tr>
                <tr>
                <th scope="row">Datum:</th>
                <td>24.06.2020</td>
                </tr>
                <tr>
                <th scope="row">Vreme:</th>
                <td>20:00</td>
                </tr>
            </tbody>
            </table>
            <div class="dropdown">
            <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="width: 180px;">
                {{name}}
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" @click="arena">Arena</a>
                <a class="dropdown-item" @click="marakana">Marakana</a>
                <a class="dropdown-item" @click="pionir">Pionir</a>
            </div>
            </div>
            <br/>
            <br/>
            <button type="submit" class="btn btn-success" style="width: 180px; height: 60px;" @click="rezervisi">Rezervisi</button>
            <br/>
            <br/>
             <button type="submit" class="btn btn-danger" style="width: 180px; height: 60px;" @click="posalji">Posalji zahtev za dodelu nove hale</button>
        </div>


    </div>
</template>

<script>
import OrganiserNavbar from './OgraniserNavbar'
export default {
    name: "OrganiserReservationInfo",
    data(){
        return{
            name:'Odaberite halu',
            flag: false
        }
    },
    components: {
        OrganiserNavbar
    },
    methods:{
        arena(){
            this.name = 'Arena'
            this.flag = true
        },
        marakana(){
            this.name='Marakana'
            this.flag = true
        },
        pionir(){
            this.name = 'Pionir'
            this.flag = true
        },
        rezervisi(){
            if(this.flag)
                this.$alert("Uspesno ste se rezervisali halu.", "Uspesno", "success");
            else
                 this.$alert("Niste odabrali halu!", "Greska", "warning");
        },
        posalji(){
            this.$alert("Uspesno ste poslali zahtev", "Uspesno", "success");
        }

    }
   
}
</script>

<style>

</style>