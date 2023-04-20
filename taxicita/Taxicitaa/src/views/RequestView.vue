<script>
import AppHeader from "@/components/global/AppHeader.vue";
import DriverComponent from '@/components/Driver.vue';
import PassengerComponent from '@/components/Passenger.vue';

export default {
  name: "request",
  data() {
    return {
      userRole : sessionStorage.getItem("role"),
    };
  },
  components: {
    AppHeader,
    DriverComponent,
    PassengerComponent
  },
  methods: {
    
  },
};

</script>

<template>

  <div class="request">

    <App-header />
    <section v-if="userRole == 0">
      <driver-component />
    </section>

    <div v-else class="container-fluid">
      <passenger-component />
    </div>

    

  </div>
  
</template>