<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
import AppHeader from "@/components/global/AppHeader.vue";
import SinglePost from '@/components/SinglePost.vue';
</script>

<template>
  <div class="HomePage">


    <App-header />


    <div class="container-fluid vh-100">
      <div
        class="row d-flex flex-column-reverse flex-md-row justify-content-center justify-content-md-evenly align-items-center mt-md-4"
      >
        <div
          class="col-md-6 d-flex flex-column align-items-center align-items-md-start text-center text-md-start header"
        >
          <h1>Welcome to</h1>
          <h3>
            The number one transportation app
            <span style="color: rgba(99, 134, 123, 1)">Taxicita</span>
          </h3>
          <p class="mt-md-5">
            some text that is jibberish and has nomeaning cuz there is no time
            to think about one
          </p>
          <div
            class="d-flex flex-column flex-md-row mt-5 align-items-center justify-content-between gap-5"
          >
            <a
              href="#"
              class="btn btn-lg text-light ps-4 pt-2 shadow-lg"
              style="
                background-color: rgba(99, 134, 123, 1);
                border-radius: 30px;
              "
              >Start request
              <button
                class="btn text-light fs-6 bg-dark rounded rounded-circle ms-3"
              >
                <i class="fa fa-angle-right"></i></button
            ></a>
            <div class="d-flex align-items-center gap-3">
              <a
                href=""
                class="btn rounded rounded-circle shadow-lg fs-4 ps-3"
                style="background-color: rgba(99, 134, 123, 1)"
                ><i class="fa-solid fa-play"></i
              ></a>
              <span class="fw-bold fs-5">Get a lift for free</span>
            </div>
          </div>

          <div class="container-fluid mt-5">
            <div class="row pt-md-4 d-flex flex-column flex-md-row">
              <div
                class="col-md-3 d-flex flex-column align-items-start justify-content-center text-light bg-dark py-3 ps-5 mb-3 mb-md-0 shadow-lg"
                style="
                  border-top-left-radius: 20px;
                  border-top-right-radius: 50px;
                  border-bottom-right-radius: 20px;
                  border-bottom-left-radius: 50px;
                "
              >
                <p><i class="fa fa-check"></i> Efficiency</p>
                <p><i class="fa fa-check"></i> Quality</p>
                <p><i class="fa fa-check"></i> Speed</p>
              </div>
              <div
                class="col-md-3 d-flex flex-column align-items-start justify-content-center text-light bg-dark py-3 ps-5 ms-md-4 shadow-lg"
                style="
                  border-top-left-radius: 20px;
                  border-top-right-radius: 50px;
                  border-bottom-right-radius: 20px;
                  border-bottom-left-radius: 50px;
                "
              >
                <p><i class="fa fa-check"></i> Efficiency</p>
                <p><i class="fa fa-check"></i> Quality</p>
                <p><i class="fa fa-check"></i> Speed</p>
              </div>
            </div>
          </div>
        </div>

        <!-- <div class="col-md-6" style="
            background-image:
              url(images/casual-life-3d-young-man-holding-orange-smartphone-and-tapping-foot.png);
            background-position: center;
            background-size: cover;
            position: relative;
            height: 80vh;
            ">
                
            </div> -->

        <div class="col-md-4 d-flex flex-column">
          <div class="align-self-end">
            <img
              class="img-fluid"
              style="width: auto; height: 700px"
              src="../assets/images/casual-life-3d-young-man-holding-orange-smartphone-and-tapping-foot.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid bg-white">
      <div class="container">
        <div class="row d-flex justify-content-center">
          <div
            class="col-7 shadow-lg d-flex flex-column align-items-center pt-5 bg-light rounded rounded-3"
            style="margin-top: -5%; height: 520px"
          >
            <h1 class="fw-bold">Launch a request</h1>

            <form action="" class="d-flex flex-column">
              <div class="row mt-5">
                <div class="col-md-6 mb-4">
                  <div class="form-outline">
                    <input
                      type="text"
                      id="form3Example1"
                      class="form-control"
                    />
                    <label class="form-label" for="form3Example1"
                      >Select the max time</label
                    >
                  </div>
                </div>
                <div class="col-md-6 mb-4">
                  <div class="form-outline">
                    <input
                      type="text"
                      id="form3Example2"
                      class="form-control"
                    />
                    <label class="form-label" for="form3Example2"
                      >Destination</label
                    >
                  </div>
                </div>
              </div>

              <div class="form-outline mb-4">
                <input type="text" id="form3Example3" class="form-control" />
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
                    />
                    <label class="form-label" for="form3Example2"
                      >Add specific details</label
                    >
                  </div>
                </div>
              </div>

              <button
                class="btn btn-lg fw-bold fs-2 text-light mt-5 align-self-center shadow-lg"
                style="
                  background-color: rgba(99, 134, 123, 1);
                  width: 350px !important;
                "
              >
                GO
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid bg-white">
      <div class="row d-flex flex-column align-items-center">
        <div class="col-12 d-flex justify-content-center mt-md-5 pt-md-5">
          <h1 class="fw-bold mt-md-5" style="font-size: 50px">
            Are you a
            <span style="color: rgba(112, 167, 181, 1)">Driver</span> ?
          </h1>
        </div>
        <div class="col-12 pt-md-5 mt-md-5 d-flex justify-content-center">
          <div class="container-fluid">
            <div class="row d-flex justify-content-evenly align-items-center">
              <div class="col-3">
                <div class="card border-0 bg-transparent" style="width: 18rem">
                  <img
                    src="../assets/images/3d-casual-life-toy-car-turn-right-blue.png"
                    class="card-img-top ms-md-5"
                    alt="..."
                    style="z-index: 100"
                  />
                  <div
                    class="card-body pb-md-4 mb-md-3 ps-md-4 border border-1 border-dark shadow-lg rounded-3"
                    style="margin-top: -15%; width: 350px"
                  >
                    <h5 class="card-title mt-5 fw-bold pt-md-4">Card title</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a
                      href="#"
                      class="fw-bold text-decoration-none"
                      style="color: rgba(112, 167, 181, 1)"
                      >Become a member</a
                    >
                  </div>
                </div>
              </div>

              <div class="col-3">
                <div class="card border-0 bg-transparent" style="width: 18rem">
                  <img
                    src="../assets/images/3d-casual-life-smart-car.png"
                    class="card-img-top ms-md-5"
                    alt="..."
                    style="z-index: 100"
                  />
                  <div
                    class="card-body pb-md-4 mb-md-3 ps-md-4 border border-1 border-dark shadow-lg rounded-3"
                    style="margin-top: -15%; width: 350px"
                  >
                    <h5 class="card-title mt-5 fw-bold pt-md-4">Card title</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a
                      href="#"
                      class="fw-bold text-decoration-none"
                      style="color: rgba(112, 167, 181, 1)"
                      >Become a member</a
                    >
                  </div>
                </div>
              </div>
              <div class="col-3">
                <div class="card border-0 bg-transparent" style="width: 18rem">
                  <img
                    src="../assets/images/3d-casual-life-scooter-and-lines.png"
                    class="card-img-top ms-md-5"
                    alt="..."
                    style="z-index: 100"
                  />
                  <div
                    class="card-body pb-md-4 mb-md-3 ps-md-4 border border-1 border-dark shadow-lg rounded-3"
                    style="margin-top: -11%; width: 350px"
                  >
                    <h5 class="card-title mt-5 fw-bold pt-md-4">Card title</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a
                      href="#"
                      class="fw-bold text-decoration-none"
                      style="color: rgba(112, 167, 181, 1)"
                      >Become a member</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="container-fluid bg-white d-flex flex-column align-items-center pt-md-5"
    >
      <h1 class="fw-bold text-center mt-md-5" style="font-size: 50px">
        Read what our <br /><span style="color: rgba(99, 134, 123, 1)"
          >clients</span
        >
        say about us
      </h1>
      <div class="row mt-md-5 pt-md-5">
        <div class="col-md-8">
          <div class="container-fluid">
            <div class="row d-flex flex-column align-items-center">
              <div
                class="col-8 mb-4 border border-dark border-1 rounded-3 px-5 py-2 pt-3 d-flex align-items-start"
              >
                <div class="me-4">
                  <img
                    src="../assets/images/myphoto2.jpg"
                    class="rounded-circle"
                    alt=""
                    style="height: auto; width: 80px"
                  />
                </div>
                <div>
                  <h3 class="fw-bold">username</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquid molestiae in veritatis ducimus consequuntur placeat
                    et praesentium, nostrum quod doloribus?
                  </p>
                </div>
              </div>

              <div
                class="col-8 mb-4 border border-dark border-1 rounded-3 px-5 py-2 pt-3 d-flex align-items-start"
              >
                <div class="me-4">
                  <img
                    src="../assets/images/myphoto2.jpg"
                    class="rounded-circle"
                    alt=""
                    style="height: auto; width: 80px"
                  />
                </div>
                <div>
                  <h3 class="fw-bold">username</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquid molestiae in veritatis ducimus consequuntur placeat
                    et praesentium, nostrum quod doloribus?
                  </p>
                </div>
              </div>

              <div
                class="col-8 border border-dark border-1 rounded-3 px-5 py-2 pt-3 d-flex align-items-start"
              >
                <div class="me-4">
                  <img
                    src="../assets/images/myphoto2.jpg"
                    class="rounded-circle"
                    alt=""
                    style="height: auto; width: 80px"
                  />
                </div>
                <div>
                  <h3 class="fw-bold">username</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquid molestiae in veritatis ducimus consequuntur placeat
                    et praesentium, nostrum quod doloribus?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="col-md-4 d-flex justify-content-center"
          style="margin-top: -8%"
        >
          <img
            src="../assets/images/casual-life-3d-back-view-of-man-writing-with-chalk.png"
            alt=""
            style="width: auto; height: 750px"
          />
        </div>
      </div>
    </div>

    <div
      class="container-fluid d-flex flex-column align-items-center pt-md-5 bg-white"
    >
      <h1 class="fw-bold mt-md-5" style="font-size: 50px">
        Our future <span style="color: rgba(99, 134, 123, 1)">plans</span>
      </h1>
      <div class="col-12 pt-md-5">
        <div class="container-fluid pt-md-5">
          <div
            class="row d-flex justify-content-center align-items-center pt-md-3"
          >
            <div class="col-md-4">
              <img
                src="../assets/images/3d-casual-life-scooter-with-delivery-bag.png"
                alt=""
                style="height: 300px; width: auto"
              />
            </div>
            <div
              class="col-md-4 border border-dark border-1 rounded-3 py-4 pt-5 px-3 ps-5"
            >
              <h3 class="fw-bold mb-md-4">Delivery</h3>
              <p class="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus
                nihil ipsum unde. Inventore, quae? Obcaecati iusto quisquam unde
                fugit molestias. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Distinctio sint perferendis eligendi odit,
                rerum ut facilis ipsam maxime tempora qui.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 pt-md-5">
        <div class="container-fluid pt-md-5">
          <div
            class="row d-flex justify-content-center align-items-center pt-md-3"
          >
            <div
              class="col-md-4 border border-dark border-1 rounded-3 py-4 pt-5 px-3 ps-5"
            >
              <h3 class="fw-bold mb-md-4">World-wide</h3>
              <p class="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus
                nihil ipsum unde. Inventore, quae? Obcaecati iusto quisquam unde
                fugit molestias. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Distinctio sint perferendis eligendi odit,
                rerum ut facilis ipsam maxime tempora qui.
              </p>
            </div>

            <div class="col-md-4 ps-md-5">
              <img
                src="../assets/images/3d-casual-life-airplane.png"
                alt=""
                style="height: 300px; width: auto"
                class="ms-md-5"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="container-fluid bg-white pt-md-5 d-flex flex-column align-items-center"
    >
      <hr class="mt-md-5" />
      <section class="footer">
        <h4 style="font-size: 40px">
          <span style="color: rgba(99, 134, 123, 1)">Follow</span> us
        </h4>
        <p style="font-size: 20px">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          voluptatum <br />
          dolorem eum praesentium facilis at vel quisquam incidunt illo tempora,
          eos consequuntur
        </p>
        <div class="icons">
          <a href="" style="font-size: 20px"><i class="fa fa-facebook"></i></a>
          <a href="" style="font-size: 20px"><i class="fa fa-twitter"></i></a>
          <a href="" style="font-size: 20px"><i class="fa fa-linkedin"></i></a>
        </div>
        <section class="container-fluid footer_section">
          <p>&copy; <span id="displayYear">2023</span> All Rights Reserved</p>
        </section>
      </section>
    </div>
  </div>
</template>
