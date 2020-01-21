<template>
     <div align = "center" class="align-middle">
    <StudentNavbar/>
        <br/>
        <br/>
        <h1 v-bind="username" class="text-dark">Informacije o korisniku {{this.curUser.username}}</h1>
        <br/>
        <br/>
        <br/>
        <form class="form-group w-25">
                <table class="table table-borderless">
                    <tr>   
                        <td> <b>Ime:</b> </td>
                        <td><input type="text" class="form-control" v-model="name" v-bind:readonly="readonlyFlag" />  </td>
                    </tr>

                    <tr>   
                        <td><b>Prezime: </b> </td>
                        <td><input type="text" class="form-control" v-model="surname"  v-bind:readonly="readonlyFlag" />  </td>
                    </tr>

                    <tr>   
                        <td><b>Telefon: </b>  </td>
                        <td><input type="text" class="form-control" v-model="telephone" v-bind:readonly="readonlyFlag" />  </td>
                    </tr>

                    <tr>
                        <td><b>Adresa:</b>  </td>
                        <td><input type="text" class="form-control" v-model="address" v-bind:readonly="readonlyFlag" />  </td>
                    </tr>

                </table>

                 <button type="submit" class="btn btn-primary" @click="izmeniInformacije">{{this.buttonText}}</button>
        </form>
    </div>
</template>

<script>
import StudentNavbar from './StudentNavbar'
export default {
    name: "StudentInformation",
    components: {
        StudentNavbar
    },
    data(){
        return{
            allUsers: JSON.parse(localStorage.getItem('users')),
            curUser: JSON.parse(localStorage.getItem('currentUser')),
            username: JSON.parse(localStorage.getItem('currentUser')).username,
            name: JSON.parse(localStorage.getItem('currentUser')).name,
            surname: JSON.parse(localStorage.getItem('currentUser')).surname,
            telephone: JSON.parse(localStorage.getItem('currentUser')).telephone,
            address: JSON.parse(localStorage.getItem('currentUser')).address,
            readonlyFlag: true,
            buttonText: 'Izmeni informacije'
        }
    },
    methods:{
        izmeniInformacije(){
            if(this.readonlyFlag == true){
                this.readonlyFlag = false;
                this.buttonText = "Posalji izmene"
            }
            else{
                this.readonlyFlag = true;
                this.buttonText = "Izmeni informacije"

                var withuotRemovedUser = this.allUsers.slice(this.allUsers.indexOf(this.curUser), 1)

                this.curUser.name = this.name;
                this.curUser.surname = this.surname;
                this.curUser.telephone = this.telephone;
                this.curUser.address = this.address;

                var withhUser = [...withuotRemovedUser, this.curUser]

                localStorage.setItem('currentUser', JSON.stringify(this.curUser))
                localStorage.setItem('users', JSON.stringify(withhUser))

                this.$alert("Informacije su uspesno promenjene.", "Uspesno", "success");
                
            }
        }
    },
}
</script>