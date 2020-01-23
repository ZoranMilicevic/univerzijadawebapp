<template>
    <div>
    <StudentNavbar/>
        <div align = "center" class="align-middle">
            <br/>
            <br/>   
            <h1 class="text-dark">Zahtev za promenu smestaja/restorana</h1>
            <br/>
            <br/>   
            <br/>


            <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" checked>
            <h4 class= "text-dark">Smestaj</h4>
            </div>
            <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
            
            <h4 class= "text-dark">Restoran</h4>
            </div>


            <br/>
            <br/>   
            <form v-on:submit="sendRequest">
                <div align="center">
                    <div class="form-group w-25">
                        <input type="username" class="form-control" placeholder="Razlog" v-model="reason"  required="true" oninput = "this.setCustomValidity('')" oninvalid="this.setCustomValidity('Ovo polje ne sme biti prazno')" />
                    </div>
                    <button type="submit" class="btn btn-primary">Posalji zahtev</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import StudentNavbar from './StudentNavbar'
export default {
    name: "StudentReqest",
    components: {
        StudentNavbar
    },
    methods:{
        sendRequest(){
            this.$alert("Zahtev uspesno poslat.", "Uspesno", "success");
        }
    }
   
}
</script>