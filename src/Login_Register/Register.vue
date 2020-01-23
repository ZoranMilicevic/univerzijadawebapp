<template>
    <div>
        <HeaderLogin/>
        <form v-on:submit="registerUser">
            <div align="center">
                <div class="form-group w-25">
                    <input type="username" class="form-control" placeholder="Ime" v-model="name" required="true" oninput = "this.setCustomValidity('')" oninvalid="this.setCustomValidity('Ovo polje ne sme biti prazno')" />
                </div>

                <div class="form-group w-25">
                    <input type="username" class="form-control" placeholder="Prezime" v-model="surname" required="true" oninput = "this.setCustomValidity('')" oninvalid="this.setCustomValidity('Ovo polje ne sme biti prazno')" />
                </div>

                <div class="form-group w-25">
                        <input type="text" class="form-control" placeholder="Kontakt telefon" v-model="telephone" required="true" oninput = "this.setCustomValidity('')" oninvalid="this.setCustomValidity('Ovo polje ne sme biti prazno')" />
                </div>

                <div class="form-group w-25">
                    <input type="text" class="form-control" placeholder="Adresa" v-model="address" required="true" oninput = "this.setCustomValidity('')" oninvalid="this.setCustomValidity('Ovo polje ne sme biti prazno')" />
                </div>

                <div class="form-group w-25">
                    <input type="username" class="form-control" placeholder="Korisnicko ime" v-model="username" required="true" oninput = "this.setCustomValidity('')" oninvalid="this.setCustomValidity('Ovo polje ne sme biti prazno')" />
                </div>
                    
                <div class="form-group w-25">
                    <input type="password" class="form-control" placeholder="Lozinka" v-model="password"  required="true" oninput = "this.setCustomValidity('')" oninvalid="this.setCustomValidity('Ovo polje ne sme biti prazno')" />
                </div>

                <button type="submit" class="btn btn-primary">Registruj se</button>
            </div>
        </form>
    </div>
</template>

<script>
import router from '../router/index.js'
import HeaderLogin from './HeaderLogin'
export default {
    name: 'register',
    components: {
        HeaderLogin
    },

    data(){
        return{
            name:'',
            surname:'',
            telephone:'',
            address: '',
            username:'',
            password:'',
            users:[]
        }
    },

    methods: {
        registerUser(){
            var id = this.users.length;

            const newUser = {
                id: id,
                name: this.name,
                surname: this.surname,
                telephone: this.telephone,
                address: this.address,
                username: this.username,
                password: this.password,
                isAdmin: false
            }

            this.users = [...this.users, newUser]
            localStorage.setItem('users', JSON.stringify(this.users))

            this.$alert("Uspesno ste se registrovali na sistem.", "Cestitamo", "success");
            router.push('/');
        }
    },
    beforeMount: function(){
        if(localStorage.getItem('users')==null){
            localStorage.setItem('users', JSON.stringify(this.users))
        }
        else {
            this.users = JSON.parse(localStorage.getItem('users'));
        }
    }
}
</script>
