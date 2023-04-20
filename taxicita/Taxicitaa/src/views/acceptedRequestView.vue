<script>
import AppHeader from "@/components/global/AppHeader.vue";
import { requestService } from "../services/request-service.js";

export default {
  name: "acceptedRequest",
  data() {
    return {
      requestId: "",
      user_id: sessionStorage.getItem("user_id"),
      passenger: [],
    };
  },
  components: {
    AppHeader,
    requestService,
  },
  methods: {},
  mounted() {
    this.requestId = this.$route.params.id;
    var formInputs = {
      user_id: this.user_id,
      requestt_id: this.requestId,
    };
    requestService
      .getAcceptedRequestUser(formInputs)
      .then((data) => {
        this.passenger = data;
        // console.log(this.passenger);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<template>
  <div class="acceptedRequest">
    <App-header />

    <div class="container-fluid">
        <div class="row mt-5">
            <div class="col-6 m-auto d-flex flex-column align-items-center">
              <h1 class="fw-bold mb-md-3 d-flex flex-column align-items-center" style="font-size: 60px">
                Request accepted <span style="color: rgba(99, 134, 123, 1)">successfully</span>
              </h1>
              <p class="fw-bold text-center mt-3">
                A <span style="color: rgba(99, 134, 123, 1)">lorem</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, repellendus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, doloribus?
              </p>
            </div>
          </div>
      
          
      
          <div class="row d-flex justify-content-center mt-5">
            <div class="col-4">
              <div class="card shadow-lg">
                <div class="card-body">
                    <h2 class="card-title text-center mb-4"><strong>Status : <span class="text-success">Accepted <i class="fas fa-check"></i></span></strong></h2>
                  <div class="d-flex flex-column align-items-center mb-3">
                    <a href="#">
                      <img
                        src="../assets/images/myphoto2.jpg"
                        alt=""
                        style="height: 80px"
                        class="rounded-circle border me-2 mb-2"
                      />
                    </a>
      
                    <div class="text-center">
                      <a href="" class="text-dark mb-0">
                        <strong>{{passenger[0].first_name + ' ' + passenger[0].last_name}}</strong>
                      </a>
      
                      <a href="" class="d-block text-muted" style="margin-top: -6px">
                        <small>Passenger</small>
                      </a>
                    </div>
                  </div>
      
                  <p
                    class="card-text border-bottom pb-2 mt-2 fs-8 d-flex align-items-center"
                  >
                    <i class="fas fa-location-dot me-3 fs-5"></i>
                    <span>
                      <strong class="d-flex flex-column">Full location</strong>
                      <span>{{ passenger[1][0].location }}</span>
                    </span>
                  </p>
                  <p
                    class="card-text border-bottom pb-2 fs-8 d-flex align-items-center"
                  >
                    <i class="fas fa-right-from-bracket me-3 fs-5"></i>
                    <span>
                      <strong class="d-flex flex-column">Destination</strong>
                      <span>{{ passenger[1][0].destination }}</span>
                    </span>
                  </p>
                  <p class="card-text pb-3 fs-8 d-flex align-items-center">
                    <i class="fas fa-phone me-3 fs-5"></i>
                    <span>
                      <strong class="d-flex flex-column">Phone</strong>
                      <span>Lorem ipsum dolor sit amet.</span>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
    </div>
  </div>
</template>
