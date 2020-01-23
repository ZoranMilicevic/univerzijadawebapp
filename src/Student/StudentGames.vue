<template>
    <div align = "center" class="align-middle">
    <StudentNavbar/>
        <br/>
        <br/>   
        <h1 class="text-dark">Moje utakmice</h1>
        <br/>

        <table class="table table-borderless w-75">
        <tbody>
            <tr>
                <th scope="row"><label class="text-dark lb-lg"></label></th>
                <td><label class="text-dark lb-sm">Datum od</label></td>
                <td><label class="text-dark lb-sm">Datum do</label></td>
                <td><label class="text-dark lb-sm">Vreme od</label></td>
                <td><label class="text-dark lb-sm">Vreme do</label></td>
                <td><label class="text-dark lb-sm">Hala</label></td>
            </tr>
            <tr>
            <th scope="row"><label class="text-dark lb-lg">Filter</label></th>
            <td><input type="date" class="form-control" placeholder="Datum od" v-model="oldPass" /></td>
            <td><input type="date" class="form-control" placeholder="Datum do" v-model="oldPass" /></td>
            <td><input type="time" class="form-control" placeholder="Vreme od" v-model="oldPass" /></td>
            <td><input type="time" class="form-control" placeholder="Vreme do" v-model="oldPass" /></td>
            <td><input type="username" class="form-control" placeholder="Hala" v-model="hala" /></td>
            </tr>
        </tbody>
        </table>

        <button type="submit" class="btn btn-success" @click="primeni">Primeni</button>

        <br/>
        <br/>   
        <br/>
        <table class="w-50 p-3 table bg-light text-dark table-striped table-bordered" >
            <thead class="thead-dark">
                <tr>
                <th scope="col">Datum</th>
                <th scope="col">Vreme</th>
                <th scope="col">Hala</th>
                </tr>
            </thead>
            <tbody>
                <tr v-bind:key="game.datum" v-for="game in gamesToShow">
                    <td>{{game.datum}}</td>
                    <td>{{game.vreme}}</td>
                    <td>{{game.hala}}</td>
                </tr>
            </tbody>
            </table>
    </div>

</template>


<script>
import StudentNavbar from './StudentNavbar'
export default {
    name: "StudentGames",
    components: {
        StudentNavbar
    },
    data(){
        return{
            allGames: [
                {datum: "20.06.2020", vreme: "16:30", hala: "Arena"},
                {datum: "22.06.2020", vreme: "18:00", hala: "Pionir"},
                {datum: "08.07.2020", vreme: "19:00", hala: "Marakana"},
            ],
            gamesToShow: [
                {datum: "20.06.2020", vreme: "16:30", hala: "Arena"},
                {datum: "22.06.2020", vreme: "18:00", hala: "Pionir"},
                {datum: "08.07.2020", vreme: "19:00", hala: "Marakana"},
            ],
            hala: ''
        }
    },
    methods:{
        primeni(){
            if(this.hala != '')
                this.gamesToShow = this.allGames.filter(game => game.hala == this.hala);
            else 
                this.gamesToShow = this.allGames
        }
    }
    
   
}
</script>

<style >
.lb-lg{
  font-size: 28px;
}

.lb-sm{
  font-size: 20px;
}
</style>