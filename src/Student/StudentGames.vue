<template>
    <div align = "center" class="align-middle">
    <StudentNavbar/>
        <br/>
        <br/>   
        <h1 class="text-dark">Moje utakmice</h1>
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
                <tr>
                <th scope="row">20.06.2020</th>
                <td>16:30</td>
                <td>Arena</td>
                </tr>
                <tr>
                <th scope="row">22.06.2020 </th>
                <td>18:00</td>
                <td>Pionir</td>

                </tr>
                <tr>
                <th scope="row">08.07.2020</th>
                <td>19:00</td>
                <td>Marakana</td>

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
    }
   
}
</script>