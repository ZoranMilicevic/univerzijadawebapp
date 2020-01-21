<template>
    <div>
        <HeaderLogin/>
        <br/>
        <br/>
        <br/>
        <div align = "center" class="align-middle">
            <form>
                <div class="form-group w-25">
                    <input type="username" class="form-control" placeholder="Korisnicko ime" v-model="username">
                </div>

                <div class="form-group w-25">
                    <input type="password" class="form-control" placeholder="Lozinka" v-model="password">
                </div>

                <button type="submit" class="btn btn-primary" @click="login">Prijavi se</button>
            </form>
        </div>
    </div>
</template>

<script>
import users from '../data/users.js';
import router from '../router/index.js'
import HeaderLogin from './HeaderLogin'

export default {
    name: 'login',
    components: {
        HeaderLogin
    },
    data(){
        return{
            username: '',
            password: '',
            users: users,
        }
    },
    methods: {
        login(){
            var user = this.users.filter(user => user.username == this.username & user.password == this.password);
            //localStorage.clear();
            if(user.length != 0){
                localStorage.setItem('currentUser', JSON.stringify(user[0]))
                if(user[0].isAdmin == true){
                    router.push('/organizerMain')
                }
                else {
                    router.push('/studentMain')
                }
                this.$alert("Uspesno ste se prijavili na sistem.", "Uspesno", "success");
            }
            else{
                this.$alert("Korisnicko ime ili lozinka nisu ispravni.", "Neuspesno", "warning");
            } 
            
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

<style>

</style>