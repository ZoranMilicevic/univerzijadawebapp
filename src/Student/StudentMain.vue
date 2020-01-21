<template>
    <div>
        <StudentNavbar/>
        <router-view></router-view>
    </div>
</template>

<script>
import StudentNavbar from './StudentNavbar'
export default {
    name: "StudentMain",
    components: {
        StudentNavbar
    }
}
</script>