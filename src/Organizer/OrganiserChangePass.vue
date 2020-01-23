<template>
    <div>
    <OrganiserNavbar/>
        <div align = "center" class="align-middle">
            <br/>
            <br/>   
            <h1 class="text-dark">Promena lozinke</h1>
            <br/>
            <br/>   
            <br/>
            <form v-on:submit="changePass">
                <div align="center">
                    <div class="form-group w-25">
                        <input type="password" class="form-control" placeholder="Stara lozinka" v-model="oldPass" required="true" oninput = "this.setCustomValidity('')" oninvalid="this.setCustomValidity('Ovo polje ne sme biti prazno')" />
                    </div>
                        
                    <div class="form-group w-25">
                        <input type="password" class="form-control" placeholder="Nova Lozinka" v-model="newPass" required="true" oninput = "this.setCustomValidity('')" oninvalid="this.setCustomValidity('Ovo polje ne sme biti prazno')" />
                    </div>

                    <button type="submit" class="btn btn-primary">Promeni lozinku</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import OrganiserNavbar from './OgraniserNavbar'
export default {
    name: "OrganiserChangePass",
    components: {
        OrganiserNavbar
    },
    data(){
        return {
            newPass: '',
            oldPass: '',
            allUsers: [],

        }
    },
    methods: {
        changePass(){
            var currentUser = JSON.parse(localStorage.getItem('currentUser'));
            if(currentUser.password !== this.oldPass){
                this.$alert("Stara lozinka nije ispravna.", "Neuspesno", "warning");
                return;
            }
            else{
                currentUser.password = this.newPass;
                this.allUsers = localStorage.getItem('users')
                var withuotRemovedUser = this.allUsers.slice(this.allUsers.indexOf(currentUser), 1)
                var withhUser = [...withuotRemovedUser, currentUser]

                localStorage.setItem('currentUser', JSON.stringify(currentUser))
                localStorage.setItem('users', JSON.stringify(withhUser))

                this.$alert("Lozinka uspesno promenjena.", "Uspesno", "success");
            }
          

        }
    }
}
</script>

<style>

</style>