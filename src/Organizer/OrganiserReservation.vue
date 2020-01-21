<template>
    <div>
    <OrganiserNavbar/>
        <div align = "center" class="align-middle">
            <br/>
            <br/>   
            <h1 class="text-dark">Utakmice kojima jos nisu dodeljene hale</h1>
            <br/>
            <br/>
            <br/>
            <table class="w-50 p-3 table bg-light text-dark table-striped table-bordered" >
            <thead class="thead-dark">
                <tr>
                <th scope="col">Utakmica</th>
                <th scope="col">Datum</th>
                <th scope="col">Vreme</th>
                <th scope="col">Rezervisi</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">Srbija-Nemacka</th>
                <td>20.06.2020</td>
                <td>17:30</td>
                <td><button type="submit" class="btn btn-success" @click="reserve">Rezervisi</button></td>
                </tr>
                <tr>
                <th scope="row">Svedska-Norvseka</th>
                <td>24.06.2020</td>
                <td>18:00</td>
                <td><button type="submit" class="btn btn-success">Rezervisi</button></td>
                </tr>
                <tr>
                <th scope="row">Italija-Francuska</th>
                <td>27.07.2020</td>
                <td>20:00</td>
                <td><button type="submit" class="btn btn-success">Rezervisi</button></td>
                </tr>
            </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import OrganiserNavbar from './OgraniserNavbar'
import router from '../router/index.js'
export default {
    name: "OrganiserReservation",
    components: {
        OrganiserNavbar
    },
    methods: {
        reserve(){
            router.push('/organiserReservationInfo')
        }
    },
   
}
</script>

<style>

</style>