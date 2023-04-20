<template>
  <div>
    
    <section v-if="!isClicked" class="">
      <div
        class="container-fluid vh-100 d-flex flex-column justify-content-center"
      >
        <div class="row d-flex justify-content-evenly align-items-center">
          <div
            class="col-md-5 d-flex flex-column align-items-center shadow-6-strong rounded-5 py-5"
          >
            <a href="#" @click="clicked(0)" class="d-flex flex-column align-items-center text-decoration-none text-dark">
              <img
                src="../assets/images/Beep Beep - Medium Vehicle.png"
                alt=""
                style="width: 500px"
              />
              <h1 class="text-dark pt-3">Driver</h1>
              <p class="text-center w-75 pt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam vitae omnis rem neque amet eum? Atque assumenda quis illo nostrum!</p>
            </a>
          </div>
          <div
            class="col-md-5 d-flex flex-column align-items-center shadow-6-strong rounded-5 py-5"
          >
            <a href="#" @click="clicked(1)" class="d-flex flex-column align-items-center text-decoration-none text-dark">
              <img
                src="../assets/images/Women Power - Fitness.png"
                alt=""
                style="width: 290px"
              />
              <h1 class="text-dark pt-3">Passenger</h1>
              <p class="text-center w-75 pt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam vitae omnis rem neque amet eum? Atque assumenda quis illo nostrum!</p>
            </a>
          </div>
        </div>
      </div>
    </section>
    
    <section v-else class="text-center text-lg-start">
      <!-- Jumbotron -->
      <div class="container py-4">
        <div class="row g-0 align-items-center">
          <div class="col-lg-6 mb-5 mb-lg-0">
            <div
              class="card cascading-right"
              style="
                background: hsla(0, 0%, 100%, 0.55);
                backdrop-filter: blur(30px);
              "
            >
              <div class="card-body p-5 shadow-5 text-center">
                <h2 class="fw-bold mb-5">Sign up now <span v-if="role == 1">Passenger</span> <span v-else>Driver</span></h2>

                <!-- form start -->

                <form>
                  <!-- 2 column grid layout with text inputs for the first and last names -->
                  <div class="row">
                    <div class="col-md-6 mb-4">
                      <div class="form-outline">
                        <input
                          type="text"
                          id="form3Example1"
                          class="form-control"
                          v-model="first_name"
                        />
                        <label class="form-label" for="form3Example1"
                          >First name</label
                        >
                      </div>
                    </div>
                    <div class="col-md-6 mb-4">
                      <div class="form-outline">
                        <input
                          type="text"
                          id="form3Example2"
                          class="form-control"
                          v-model="last_name"
                        />
                        <label class="form-label" for="form3Example2"
                          >Last name</label
                        >
                      </div>
                    </div>
                  </div>

                  <!-- Email input -->
                  <div class="form-outline mb-4">
                    <input
                      type="email"
                      id="form3Example3"
                      class="form-control"
                      v-model="email"
                    />
                    <label class="form-label" for="form3Example3"
                      >Email address</label
                    >
                  </div>

                  <!-- Password input -->
                  <div class="form-outline mb-4">
                    <input
                      type="password"
                      id="form3Example4"
                      class="form-control"
                      v-model="password"
                    />
                    <label class="form-label" for="form3Example4"
                      >Password</label
                    >
                  </div>

                  <!--Confirm Password input -->
                  <div class="form-outline mb-4">
                    <input
                      type="password"
                      id="form3Example4"
                      class="form-control"
                      v-model="confirm_password"
                    />
                    <label class="form-label" for="form3Example4"
                      >Confirm Password</label
                    >
                  </div>

                  <!-- Checkbox -->
                  <div class="form-check d-flex justify-content-center mb-4">
                    <input
                      class="form-check-input me-2"
                      type="checkbox"
                      value=""
                      id="form2Example33"
                      checked
                    />
                    <label class="form-check-label" for="form2Example33">
                      Subscribe to our newsletter
                    </label>
                  </div>

                  <!-- Submit button -->
                  <button
                    @click="handleSubmit()"
                    type="button"
                    class="btn btn-primary btn-block mb-4"
                  >
                    Sign up
                  </button>

                  <!-- Register buttons -->
                  <div class="text-center">
                    <p>or sign up with:</p>
                    <button
                      type="button"
                      class="btn btn-link btn-floating mx-1"
                    >
                      <i class="fab fa-facebook-f"></i>
                    </button>

                    <button
                      type="button"
                      class="btn btn-link btn-floating mx-1"
                    >
                      <i class="fab fa-google"></i>
                    </button>

                    <button
                      type="button"
                      class="btn btn-link btn-floating mx-1"
                    >
                      <i class="fab fa-twitter"></i>
                    </button>

                    <button
                      type="button"
                      class="btn btn-link btn-floating mx-1"
                    >
                      <i class="fab fa-github"></i>
                    </button>
                  </div>
                </form>

                <!-- form ends -->
              </div>
            </div>
          </div>

          <div class="col-lg-6 mb-5 mb-lg-0">
            <img
              src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg"
              class="w-100 rounded-4 shadow-4"
              alt=""
            />
          </div>
        </div>
      </div>
      <!-- Jumbotron -->
    </section>
    
  </div>
</template>

<style scoped>
.cascading-right {
  margin-right: -50px;
}

@media (max-width: 991.98px) {
  .cascading-right {
    margin-right: 0;
  }
}
</style>

<script>
import { authService } from "../services/auth-service.js";

export default {
  name: "signupform",
  data() {
    return {
      isClicked: false,
      role: 0,
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      confirm_password: "",
    };
  },
  methods: {
    clicked(userRole) {
      this.isClicked = true;
      this.role = userRole;
    },
    handleSubmit() {
      authService
        .register(
          this.first_name,
          this.last_name,
          this.role,
          this.email,
          this.password,
          this.confirm_password
        )
        .then(() => {
          this.$router.push("/community");
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>
