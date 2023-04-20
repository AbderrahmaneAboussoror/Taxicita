<template>
  <div class="PassengerComponent">
    <div v-if="!isAccepted">
      <div class="row mt-5">
        <div class="col-6 m-auto d-flex flex-column align-items-center">
          <h1 class="fw-bold mb-md-3" style="font-size: 60px">
            Launch a <span style="color: rgba(99, 134, 123, 1)">Request</span>
          </h1>
          <p class="fw-bold">
            <span class="text-danger">Informations</span> to know before you
            make a request
          </p>
        </div>
      </div>

      <div class="row d-flex justify-content-evenly align-items-center pt-4">
        <div
          class="col-3 border border-dark border-1 bg-white d-flex align-items-center justify-content-center pt-md-2"
          style="border-radius: 20px; height: 30px; width: 400px"
        >
          <p class="fw-bold d-flex align-items-center">
            <i class="fas fa-circle-info me-2 pt-1"></i>
            <span class="pt-1" style="font-size: 15px"
              >Your phone number will be visible to the driver</span
            >
          </p>
        </div>

        <div
          class="col-3 border border-dark border-1 bg-white d-flex align-items-center justify-content-center pt-md-2"
          style="border-radius: 20px; height: 30px; width: 400px"
        >
          <p class="fw-bold d-flex align-items-center">
            <i class="fas fa-circle-info me-2 pt-1"></i>
            <span class="pt-1" style="font-size: 15px"
              >Your phone number will be visible to the driver</span
            >
          </p>
        </div>
      </div>

      <div class="row pt-2">
        <div class="col-6 m-auto d-flex flex-column align-items-center">
          <p class="fw-bold">
            For more details,
            <a
              href="#"
              style="color: rgba(99, 134, 123, 1); text-decoration: underline"
              >click here</a
            >
          </p>
        </div>
      </div>

      <div class="row d-flex justify-content-center mt-5">
        <div
          class="col-4 shadow-lg d-flex flex-column align-items-center pt-5 bg-light rounded rounded-3"
          style="height: 350px"
          v-if="!isLaunched"
        >
          <form action="" class="d-flex flex-column">
            <div class="row">
              <div class="col-md-6 mb-5">
                <div class="form-outline">
                  <input
                    type="time"
                    id="form3Example1"
                    class="form-control"
                    v-model="requestForm.max_time"
                  />
                  <label class="form-label" for="form3Example1"
                    >Select the max time</label
                  >
                </div>
              </div>
              <div class="col-md-6 mb-5">
                <div class="form-outline">
                  <input
                    type="text"
                    id="form3Example2"
                    class="form-control"
                    v-model="requestForm.destination"
                  />
                  <label class="form-label" for="form3Example2"
                    >Destination</label
                  >
                </div>
              </div>
            </div>

            <div class="form-outline mb-5">
              <input
                type="text"
                id="form3Example3"
                class="form-control"
                v-model="requestForm.city"
              />
              <label class="form-label" for="form3Example3"
                >Select the city</label
              >
            </div>

            <div class="row">
              <div class="col-md-6 mb-4">
                <div class="form-outline">
                  <input
                    type="text"
                    id="form3Example1"
                    class="form-control"
                    v-model="neighbourhood"
                  />
                  <label class="form-label" for="form3Example1"
                    >Neighbourhood</label
                  >
                </div>
              </div>
              <div class="col-md-6 mb-4">
                <div class="form-outline">
                  <input
                    type="text"
                    id="form3Example2"
                    class="form-control"
                    v-model="details"
                  />
                  <label class="form-label" for="form3Example2"
                    >Add specific details</label
                  >
                </div>
              </div>
            </div>

            <button
              type="button"
              class="btn btn-lg fw-bold fs-2 text-light mt-4 align-self-center shadow-lg"
              style="
              background-color: rgba(99, 134, 123, 1);
              width: 350px !important;
              "
              @click="handleSubmit()"
            >
              GO
            </button>
          </form>
        </div>
        <div class="col-4" v-else>
          <div class="card shadow-lg">
            <div class="card-body">
              <h2 class="card-title text-center mb-4">
                <strong
                  >Status :
                  <span class="text-danger"
                    >Not accepted <i class="fas fa-xmark"></i></span
                ></strong>
              </h2>

              <form action="" class="d-flex flex-column">
                <div class="row">
                  <div class="col-md-6 mb-5">
                    <div class="form-outline">
                      <label class="form-label" for="form3Example1"
                        >Max time</label
                      >
                      <input
                        type="time"
                        id="form3Example1"
                        class="form-control"
                        :value="requestForm.max_time"
                      />
                    </div>
                  </div>
                  <div class="col-md-6 mb-5">
                    <div class="form-outline">
                      <label class="form-label" for="form3Example2"
                        >Destination</label
                      >
                      <input
                        type="text"
                        id="form3Example2"
                        class="form-control"
                        :value="requestForm.destination"
                      />
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-6 mb-5">
                    <div class="form-outline">
                      <label class="form-label" for="form3Example3">City</label>
                      <input
                        type="text"
                        id="form3Example3"
                        class="form-control"
                        :value="requestForm.city"
                      />
                    </div>
                  </div>
                  <div class="col-md-6 mb-5">
                    <div class="form-outline">
                      <label class="form-label" for="form3Example3"
                        >Full location</label
                      >
                      <input
                        type="text"
                        id="form3Example3"
                        class="form-control"
                        :value="requestForm.location"
                      />
                    </div>
                  </div>
                </div>

                <!-- <div class="form-outline mb-5">
                  <label class="form-label" for="form3Example3">City</label>
                  <input
                    type="text"
                    id="form3Example3"
                    class="form-control"
                    :value="requestForm.city"
                  />
                </div>
  
                <div class="form-outline mb-5">
                  <label class="form-label" for="form3Example3"
                    >Full location</label
                  >
                  <input
                    type="text"
                    id="form3Example3"
                    class="form-control"
                    :value="requestForm.location"
                  />
                </div> -->
              </form>
              <!-- <p
                class="card-text border-bottom pb-2 mt-2 fs-8 d-flex align-items-center"
                ></p>
                <p
                class="card-text border-bottom pb-2 fs-8 d-flex align-items-center"
                ></p>
                <p class="card-text pb-3 fs-8 d-flex align-items-center"></p> -->
            </div>
          </div>
          <button
            type="button"
            class="btn btn-lg fw-bold fs-2 text-light align-self-center shadow-lg position-absolute"
            style="
              background-color: red;
              width: 350px !important;
              top: 75%;
              left: 41%;
            "
            @click="cancelRequest()"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>

    <div v-else class="container-fluid">
      <div class="row mt-5">
        <div class="col-6 m-auto d-flex flex-column align-items-center">
          <h1
            class="fw-bold mb-md-3 d-flex flex-column align-items-center"
            style="font-size: 60px"
          >
            Request accepted
            <span style="color: rgba(99, 134, 123, 1)">successfully</span>
          </h1>
          <p class="fw-bold text-center mt-3">
            A <span style="color: rgba(99, 134, 123, 1)">lorem</span> Lorem
            ipsum dolor sit, amet consectetur adipisicing elit. Quo,
            repellendus?Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dolores, doloribus?
          </p>
        </div>
      </div>

      <div class="row d-flex justify-content-center mt-5">
        <div class="col-4">
          <div class="card shadow-lg">
            <div class="card-body">
              <h2 class="card-title text-center mb-4">
                <strong
                  >Status :
                  <span class="text-success"
                    >Accepted <i class="fas fa-check"></i></span
                ></strong>
              </h2>
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
                    <strong>{{
                      driver[1].first_name + ' ' + driver[1].last_name
                    }}</strong>
                  </a>

                  <a
                    href=""
                    class="d-block text-muted"
                    style="margin-top: -6px"
                  >
                    <small>Driver</small>
                  </a>
                </div>
              </div>

              <p
                class="card-text border-bottom border-top pt-3 pb-3 mt-2 fs-8 d-flex align-items-center"
              >
                <i class="fas fa-phone me-3 fs-5"></i>
                <span>
                  <strong class="d-flex flex-column">Phone</strong>
                  <span>{{ '09876546784' }}</span>
                </span>
              </p>

              <p class="card-text text-center mt-4"><strong>Give the driver a rating when they get you to <br>your destination :</strong></p>
              <div class="d-flex justify-content-center mb-4">
                <p class="card-text star-rating d-flex justify-content-between w-25">
                  <span class="fa fa-star" :class="{ 'text-warning': rating >= 1 }" @click="setRating(1)" style="cursor: pointer;"></span>
                  <span class="fa fa-star" :class="{ 'text-warning': rating >= 2 }" @click="setRating(2)" style="cursor: pointer;"></span>
                  <span class="fa fa-star" :class="{ 'text-warning': rating >= 3 }" @click="setRating(3)" style="cursor: pointer;"></span>
                  <span class="fa fa-star" :class="{ 'text-warning': rating >= 4 }" @click="setRating(4)" style="cursor: pointer;"></span>
                  <span class="fa fa-star" :class="{ 'text-warning': rating >= 5 }" @click="setRating(5)" style="cursor: pointer;"></span>
                </p>
              </div>
              <button
              type="button"
              class="btn btn-lg fw-bold fs-2 text-light align-self-center shadow-lg"
              style="
              background-color: rgba(99, 134, 123, 1);
              width: 350px !important;
              position:absolute;
              margin-left:100px;
              "
              @click="sendRating()"
            >
              Submit
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { requestService } from "../services/request-service.js";

export default {
  name: "PassengerComponent",
  data() {
    return {
      requestForm: {
        user_id: sessionStorage.getItem("user_id"),
        max_time: "",
        destination: "",
        location: "",
        city: "",
      },
      isLaunched: false,
      isAccepted: false,
      neighbourhood: "",
      details: "",
      request: [],
      driver: [],
      rating: 0,
    };
  },
  components: {
    requestService,
  },
  methods: {
    handleSubmit() {
      this.requestForm.location = this.neighbourhood + " " + this.details;
      requestService
        .store(this.requestForm)
        .then((data) => {
          alert("request created");
          this.isLaunched = true;
          this.request = data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    cancelRequest() {
      requestService
        .deleteRequest(this.request.id)
        .then(() => {
          console.log("request deleted");
          this.isLaunched = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    setRating(value) {
      this.rating = value;
    },
    sendRating() {
      var formInputs = {
        'id' : this.driver[1].id,
        'stars': this.rating
      }
      requestService.rating(formInputs)
      .then(() => {
        alert('rating submited');
        requestService
        .deleteRequest(this.driver[2]);
        this.$router.push('/');
      })
      .catch((error) => {
        console.error(error);
      })
    }
  },
  mounted() {
    requestService
      .checkRequest(sessionStorage.getItem("user_id"))
      .then((data) => {
        if (data[0] == 1) {
          this.isAccepted = true;
          this.driver = data;
        } else if (data[0] != 0) {
          this.isLaunched = true;
          this.requestForm.destination = data[0].destination;
          this.requestForm.location = data[0].location;
          this.requestForm.city = data[0].city;
          this.requestForm.max_time = data[0].max_time;
        }
      });
  },
};
</script>
