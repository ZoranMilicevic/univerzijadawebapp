<template>
    <div align = "center" class="align-middle">
    <OrganiserNavbar/>
        <br/>
        <br/>   
        <h1 class="text-dark">Zahtevi za promenu smestaja/restorana</h1>
        <br/>
        <br/>   
        <br/>
        <table class="w-50 p-3 table bg-light text-dark table-striped table-bordered" >
            <thead class="thead-dark">
                <tr>
                <th scope="col">Ime i prezime</th>
                <th scope="col">Tip</th>
                <th scope="col">Naziv</th>
                <th scope="col">Razlog</th>
                <th scope="col">Datum</th>
                <th scope="col">Detaljnije</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">Zoran Milicevic</th>
                <td>Restoran</td>
                <td>Menza Karaburma</td>
                <td>Bezukusna hrana</td>
                <td>22.06.2020</td>
                <td><button type="submit" class="btn btn-success" @click="approveDisap">Detaljnije</button></td>
                </tr>
                <tr>
                <th scope="row">Petar Petrovic</th>
                <td>Smestaj</td>
                <td>Hotel Metropol</td>
                <td>Daleko od drugova</td>
                <td>22.07.2020</td>
                <td><button type="submit" class="btn btn-success">Detaljnije</button></td>
                </tr>
                <tr>
                <th scope="row">Milica Savic</th>
                <td>Restoran</td>
                <td>Menza Studenjak</td>
                <td>Ne sluze vegeterijansku hranu</td>
                <td>11.07.2020</td>
                <td><button type="submit" class="btn btn-success">Detaljnije</button></td>
                </tr>
            </tbody>
            </table>
    </div>

</template>

<script>
import OrganiserNavbar from './OgraniserNavbar'
import router from '../router/index.js'
export default {
    name: "OrganiserRequests",
    components: {
        OrganiserNavbar
    },
    methods: {
        approveDisap(){
            router.push('/organiserRequestInfo')
        }
    },
}
</script>