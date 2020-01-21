<template>
    <div>
        <OrganiserNavbar/>
        <router-view></router-view>
    </div>
</template>

<script>
import OrganiserNavbar from './OgraniserNavbar'
import router from '../router/index.js'
export default {
    name: "OrganizatorMain",
    components: {
        OrganiserNavbar
    },
    methods:{
        beforeCreate: function(){
            router.push('/organiserRequests')
        },
        created: function(){
            router.push('/organiserRequests')
        },
        beforeMount: function(){
            router.push('/organiserRequests')
        },
        mounted: function(){
            router.push('/organiserRequests')
        },
        beforeUpdate: function(){
            router.push('/organiserRequests')
        },
    }
}
</script>