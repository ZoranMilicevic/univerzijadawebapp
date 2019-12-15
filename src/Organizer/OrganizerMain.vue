<template>
    <div>
        <OrganiserNavbar></OrganiserNavbar>
        <router-view></router-view>
    </div>
</template>

<script>
import OrganiserNavbar from './OgraniserNavbar'
export default {
    name: "OrganizatorMain",
    components: {
        OrganiserNavbar
    }

}
</script>