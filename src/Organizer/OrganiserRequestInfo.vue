<template>
    <div align = "center" class="align-middle">
        <OrganiserNavbar/>
            <br/>
            <br/>   
            <h1 class="text-dark">Zahtev za promenu smestaja/restorana</h1>
            <br/>
            <br/>   
            <br/>
            <table class="w-25 p-3 table bg-light text-dark table-striped table-bordered" >
            <tbody>
                <tr>
                <th scope="row">Ime i prezime:</th>
                <td>Zoran Milicevic</td>
                </tr>
                <tr>
                <th scope="row">Tip:</th>
                <td>Restoran</td>
                </tr>
                <tr>
                <th scope="row">Naziv:</th>
                <td>Menza Karaburma</td>
                </tr>
                <tr>
                <th scope="row">Razlog:</th>
                <td>Bezukusna hrana</td>
                </tr>
            </tbody>
            </table>
            <br/>
            <br/>
            <table class="w-25 p-3">
            <tbody>
                <tr>
                <th scope="row">
                    <input type="username" class="form-control" placeholder="Razlog odbijanja" >
                </th>
                <td>
                    <div class="dropdown">
                    <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="width: 180px;">
                        {{name}}
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" @click="studenjak">Menza Studenjak</a>
                        <a class="dropdown-item" @click="mirijevo">Kafana Mirijevo</a>
                        <a class="dropdown-item" @click="diplo">Diplomatique</a>
                    </div>
                    </div>
                </td>
                </tr>


                <tr>
                <th scope="row">
                    <button align="center" type="submit" class="btn btn-danger" @click="odbij">Odbij zahtev</button>
                </th>
                <td>
                    <button type="submit" class="btn btn-success" @click="prihvati">Odobri zahtev</button>
                </td>
                </tr>
            </tbody>
            </table>
    </div>
</template>


<script>
import OrganiserNavbar from './OgraniserNavbar'

export default {
    name: "OrganiserRequestsInfo",
    components: {
        OrganiserNavbar
    },
    data(){
        return{
            name:'Odaberite zamenu',
            flag: false
        }
    },

    methods:{
        studenjak(){
            this.name = 'Menza Studenjak'
            this.flag = true
        },
        mirijevo(){
            this.name='Kafana Mirijevo'
            this.flag = true
        },
        diplo(){
            this.name = 'Diplomatique'
            this.flag = true
        },

        prihvati(){
            if(this.flag)
                this.$alert("Uspesno ste odobrili zahtev.", "Uspesno", "success");
            else
                 this.$alert("Niste odabrali zamenu!", "Greska", "warning");
        },
        odbij(){
            this.$alert("Uspesno ste odbili zahtev", "Uspesno", "success");
        }

    }

}
</script>

<style>

</style>