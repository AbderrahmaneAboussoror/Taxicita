<template>
  <div class="driverComponent">
    <div class="container">
      <div class="row d-flex justify-content-center mt-5">
        <div class="col-md-7 d-flex flex-column align-items-center">
          <h1 class="text-dark fw-bold text-center" style="font-size: 60px">
            Take a
            <span style="color: rgba(99, 134, 123, 1)">request</span> and get
            your <span style="color: rgba(255, 221, 40, 1)">stars</span> for the
            month !
          </h1>
          <p class="mt-3 fs-5">
            All the requests of passengers here are in the same city as yours.
          </p>
        </div>
      </div>

      <div class="row mt-5 d-flex justify-content-evenly">
        <div class="col-3">
          <form action="">
            <div class="form-outline">
              <select name="" id="" class="form-select"></select>
              <label class="form-label" for="form3Example1"
                >Per destination</label
              >
            </div>
          </form>
        </div>
        <div class="col-3">
          <form action="">
            <div class="form-outline">
              <select name="" id="" class="form-select"></select>
              <label class="form-label" for="form3Example1">Per location</label>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div class="container-fluid">
      <div class="row mt-5 px-5">
        <!-- single card -->
        <div
          class="col-8 col-md-2"
          style="margin-top: 70px"
          v-for="request in requests[0]"
        >
          <div class="card">
            <div
              class="d-flex flex-column align-items-center"
              style="margin-top: -60px"
            >
              <a href="#">
                <img
                  src="../assets/images/myphoto2.jpg"
                  alt=""
                  style="
                    height: 140px;
                    border: 9px solid rgba(223, 223, 223, 1);
                    "
                    class="rounded-circle me-2 mb-1"
                />
              </a>

              <div class="text-center">
                <a href="" class="text-dark mb-0">
                  <strong>{{
                    request.user.first_name + " " + request.user.last_name
                  }}</strong>
                </a>
              </div>
            </div>
            <div class="card-body text-dark">
              <p class="card-text border-top pt-3 d-flex align-items-baseline">
                <i class="fas fa-location-dot me-2"></i>
                <span class="d-flex flex-column align-items-start">
                  <span class="fw-bold">Full location</span>
                  <span class="text-muted" style="font-size: 14px"
                    >{{ request.city }} - {{ request.location }}</span
                  >
                </span>
              </p>

              <p class="card-text border-top pt-3 d-flex align-items-baseline">
                <i class="fas fa-arrow-trend-up me-2"></i>
                <span class="d-flex flex-column align-items-start">
                  <span class="fw-bold">Destination</span>
                  <span class="text-muted" style="font-size: 14px"
                    >{{ request.city }} - {{ request.destination }}
                  </span>
                </span>
              </p>

              <p class="card-text border-top pt-3 d-flex align-items-baseline">
                <i class="fas fa-phone me-2"></i>
                <span class="d-flex flex-column align-items-start">
                  <span class="fw-bold">Phone</span>
                  <span class="text-muted" style="font-size: 14px"
                    >{{ request.city }} - Lamiae école EST</span
                  >
                </span>
              </p>

              <button
                class="btn btn-lg btn-block btn-rounded text-white mb-0 mt-4"
                style="background-color: rgba(99, 134, 123, 1)"
                @click="acceptRequest(request.id_user, request.id)"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
        <!-- end single card -->
      </div>
    </div>
  </div>
</template>

<script>
import { requestService } from "../services/request-service.js";
export default {
  name: "driverComponent",
  data() {
    return {
      requests: [],
      requestForm: {
        user_id: '',
        requestt_id: '',
      },
    };
  },
  components: {
    requestService,
  },
  methods: {
    acceptRequest(user_id, request_id) {
      this.requestForm.user_id = user_id;
      this.requestForm.requestt_id = request_id;
      requestService.acceptRequest(this.requestForm)
      .then(() => {
        this.$router.push({ name: 'acceptedRequest', params: { id: this.requestForm.requestt_id } });
      })
      .catch((error) => {
        console.log(error)
      });
    },
  },
  async mounted() {
    await requestService
      .requests()
      .then((data) => {
        this.requests = data;
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
</script>
