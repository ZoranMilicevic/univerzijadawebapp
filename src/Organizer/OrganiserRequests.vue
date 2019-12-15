<template>
    <div align = "center" class="align-middle">
    <OrganiserNavbar/>
        <div class="form-group w-25">
            
        </div>
    </div>

</template>

<script>
export default {
    name: "OrganiserRequests",
    data(){
        studentRequests: JSON.parse(localStorage.getItem('studentRequests'))
    }
}
</script>