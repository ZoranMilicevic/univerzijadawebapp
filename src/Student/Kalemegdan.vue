<template>
    <div>
    <StudentNavbar/>
    <br/>
     <div >
       <label class="pl-4 align-center text-dark lb-lg">Kalemegdan</label>
     </div>
      
     <p class="text-justify pl-5 pr-5 text-dark bg-light" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac turpis egestas maecenas pharetra convallis. Ultricies leo integer malesuada nunc vel risus commodo viverra maecenas. Accumsan sit amet nulla facilisi morbi tempus iaculis. Sit amet purus gravida quis blandit turpis. Gravida rutrum quisque non tellus orci ac auctor augue. Pulvinar proin gravida hendrerit lectus. Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus. Et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut. Et magnis dis parturient montes. Sit amet porttitor eget dolor morbi non arcu risus. Netus et malesuada fames ac turpis egestas maecenas. Morbi leo urna molestie at elementum eu facilisis sed. Diam quis enim lobortis scelerisque. Etiam non quam lacus suspendisse faucibus interdum posuere. Ut etiam sit amet nisl purus in mollis nunc. Fermentum et sollicitudin ac orci phasellus. Scelerisque eu ultrices vitae auctor. Sodales ut etiam sit amet nisl purus.
Sed lectus vestibulum mattis ullamcorper velit sed. At erat pellentesque adipiscing commodo elit at imperdiet dui accumsan. Et netus et malesuada fames. Venenatis a condimentum vitae sapien pellentesque habitant morbi tristique. Euismod nisi porta lorem mollis aliquam. Faucibus vitae aliquet nec ullamcorper sit amet risus. Odio tempor orci dapibus ultrices in iaculis nunc sed augue. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Sit amet purus gravida quis blandit. Ornare quam viverra orci sagittis eu volutpat odio. Sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Arcu dui vivamus arcu felis bibendum ut tristique et. Morbi tristique senectus et netus et malesuada fames ac. Tellus cras adipiscing enim eu turpis egestas. Ornare lectus sit amet est placerat in egestas erat imperdiet. Neque convallis a cras semper auctor neque vitae. Velit dignissim sodales ut eu sem integer vitae.</p>
    
    <table class="table table-borderless">
        <tbody>
            <th scope="row"><img src="../assets/kale1.jpg"></th>
            <td><img src="../assets/kale2.jpg"></td>
            <td><img src="../assets/kale3.jpg"></td>
            <td><img src="../assets/kale5.jpg"></td>
        </tbody>
    </table>

    <button type="submit" class="btn btn-success align-right" @click="like">Like(120)</button>
    </div>
</template>

<script>
import StudentNavbar from './StudentNavbar'
export default {
    name: "Kalemegdan",
    components: {
        StudentNavbar
    },
    methods:{
        like(){
            this.$alert("Lajkovano", "Uspesno", "success");
        }
    }
   
}
</script>

<style>
.lb-lg{
  font-size: 48px;
}
</style>