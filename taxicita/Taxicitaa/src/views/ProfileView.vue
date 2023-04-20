<script setup>
import AppHeader from "@/components/global/AppHeader.vue";
</script>

<template>
  <div>
    <nav id="navbar AppHeader" class="p-4 border-0 headernavbar bg-white">
      <div
        class="container-fluid d-flex align-items-center justify-content-between fw-bold"
      >
        <div class="text-dark">Taxicita</div>

        <div class="d-flex gap-4">
          <a href="/" id="a" class="na text-decoration-none text-dark">Home</a>
          <a href="/request" class="na text-decoration-none text-dark"
            >Request</a
          >
          <a href="/community" class="na text-decoration-none text-dark"
            >Community</a
          >
          <a href="/profile" class="na text-decoration-none text-dark"
            >Profile</a
          >
        </div>

        <div class="d-flex gap-3">
          <a
            href="#"
            class="na text-decoration-none text-dark fw-light p-3 px-4"
            style="border: 1px solid rgba(99, 134, 123, 1); border-radius: 30px"
            >Get Started</a
          >
        </div>
      </div>
    </nav>

    <section class="bg-white mb-4 shadow-2">
      <div class="container">
        <section class="mb-5">
          <div
            class="p-5 text-center bg-image shadow-3-strong rounded-bottom"
            style="
              background-image: url('https://mdbcdn.b-cdn.net/img/new/slides/041.webp');
              height: 400px;
              overflow: visible;
            "
          >
            <div class="d-flex justify-content-center">
              <img
                src="../assets/images/myphoto2.jpg"
                alt=""
                class="rounded-circle position-absolute border border-5 border-white"
                style="width: 168px; margin-top: 250px"
              />
            </div>
          </div>
        </section>

        <section class="text-center pt-md-4 border-bottom pb-md-2">
          <div class="row d-flex justify-content-center">
            <div class="col-md-6 mt-3 mt-md-0">
              <h2><strong>Ab Aboussoror</strong></h2>

              <p class="text-muted">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                quo voluptas deleniti ex quisquam aliquid quasi! Cupiditate
                dolor reiciendis aperiam.
              </p>
            </div>
          </div>
        </section>

        <section class="py-3 d-flex justify-content-between align-items-center">
          <div>
            <button
              type="button"
              class="btn btn-link bg-light"
              style="background-color: #f0f2f5 !important"
              data-mdb-ripple-color="dark"
            >
              Posts
            </button>

            <button
              type="button"
              class="btn btn-link text-reset"
              data-mdb-ripple-color="dark"
            >
              Friends
              <small class="text-muted">23</small>
            </button>

            <button
              type="button"
              class="btn btn-link text-reset"
              data-mdb-ripple-color="dark"
            >
              Personal infos
            </button>
          </div>

          <div>
            <button
              type="button"
              class="btn btn-light bg-light"
              style="background-color: #f0f2f5 !important"
              data-mdb-ripple-color="dark"
            >
              <i class="fas fa-edit me-2"></i> EDIT PROFILE
            </button>
          </div>
        </section>
      </div>
    </section>

    <section>
      <div class="container">
        <div class="row">
          <div class="col-md-5 mb-4 mb-md-0">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title"><strong>Intro</strong></h5>

                <ul class="list-unstyled text-muted mb-4">
                  <li>
                    <i class="fas fa-at mb-4 me-2 mt-3"></i>Email :
                    <strong>username@gmail.com</strong>
                  </li>
                  <li>
                    <i class="fas fa-phone mb-4 me-2"></i>Phone number :
                    <strong>0632367208</strong>
                  </li>
                  <li>
                    <i class="fas fa-location-dot mb-4 me-2"></i>Current city :
                    <strong>Safi</strong>
                  </li>
                  <li>
                    <i class="fas fa-calendar mb-4 me-2"></i> Birth date :
                    <strong>22/09/2001</strong>
                  </li>
                  <li>
                    <i class="fas fa-user-large me-2"></i> Role :
                    <strong>Passenger</strong>
                  </li>
                </ul>

                <button
                  type="button"
                  class="btn btn-light bg-light btn-block"
                  style="background-color: #f0f2f5 !important"
                  data-mdb-ripple-color="dark"
                >
                  <i class="fas fa-edit me-2"></i> EDIT DETAILS
                </button>
              </div>
            </div>
          </div>

          <div class="col-md-7 mb-4 mb-md-0">
            <!-- single post -->

            <div class="card mb-4">
              <div class="card-body">
                <div class="d-flex mb-3">
                  <a href="#">
                    <img
                      src="../assets/images/myphoto2.jpg"
                      alt=""
                      style="height: 40px"
                      class="rounded-circle border me-2"
                    />
                  </a>

                  <div>
                    <a href="" class="text-dark mb-0">
                      <strong>Ab Aboussoror</strong>
                    </a>

                    <a
                      href=""
                      class="d-block text-muted"
                      style="margin-top: -6px"
                    >
                      <small>10h</small>
                    </a>
                  </div>
                </div>

                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Perferendis id laboriosam repellendus ut quos iusto! Voluptate
                  magni id nihil ullam.
                </p>
              </div>

              <a href="">
                <img
                  src="https://mdbootstrap.com/img/new/standard/city/041.jpg"
                  class="w-100"
                  alt=""
                />
              </a>

              <div class="card-body">
                <div class="d-flex justify-content-between mb-3">
                  <a href="">
                    <i class="fas fa-thumbs-up text-primary"></i>
                    <span>24</span>
                  </a>

                  <div>
                    <a href="" class="text-muted"> 8 comments </a>
                  </div>
                </div>

                <div
                  class="d-flex justify-content-between text-center border-top border-bottom mb-4"
                >
                  <button class="btn btn-link btn-lg text-muted">
                    <i class="fas fa-thumbs-up me-2"></i>Like
                  </button>

                  <button class="btn btn-link btn-lg text-muted">
                    <i class="fas fa-comment me-2"></i>Comment
                  </button>
                </div>

                <div class="d-flex mb-3">
                  <a href="#">
                    <img
                      src="../assets/images/myphoto2.jpg"
                      alt=""
                      style="height: 40px"
                      class="rounded-circle border me-2"
                    />
                  </a>

                  <div class="form-outline w-100">
                    <textarea
                      class="form-control"
                      id="textAreaExample"
                      rows="2"
                    ></textarea>
                    <label class="form-label" for="textAreaExample"
                      >Write a comment</label
                    >
                  </div>
                </div>

                <!-- single comment -->
                <div class="d-flex mb-3">
                  <a href="#">
                    <img
                      src="https://mdbootstrap.com/img/new/avatars/4.jpg"
                      alt=""
                      style="height: 40px"
                      class="rounded-circle border me-2"
                    />
                  </a>

                  <div>
                    <div
                      class="bg-light rounded-lg px-3 py-1"
                      style="background-color: #f0f2f5 !important"
                    >
                      <a href="" class="text-dark mb-0">
                        <strong>James Randal</strong>
                      </a>
                      <a href="" class="d-block text-muted">
                        <small
                          >Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Ut, sed. Lorem ipsum dolor sit amet consectetur
                          adipisicing elit. Facilis, aperiam ab et aspernatur
                          tempora quia magnam id alias culpa nulla.</small
                        >
                      </a>
                    </div>

                    <a href="" class="text-muted small ms-3 me-2"
                      ><strong>Like</strong></a
                    >
                    <a href="" class="text-muted small ms-2"
                      ><strong>Reply</strong></a
                    >
                  </div>
                </div>
                <!-- end single comment -->

                <!-- single comment -->
                <div class="d-flex mb-3">
                  <a href="#">
                    <img
                      src="https://mdbootstrap.com/img/new/avatars/5.jpg"
                      alt=""
                      style="height: 40px"
                      class="rounded-circle border me-2"
                    />
                  </a>

                  <div>
                    <div
                      class="bg-light rounded-lg px-3 py-1"
                      style="background-color: #f0f2f5 !important"
                    >
                      <a href="" class="text-dark mb-0">
                        <strong>James Randal</strong>
                      </a>
                      <a href="" class="d-block text-muted">
                        <small>
                          amet consectetur adipisicing elit. Facilis, aperiam ab
                          et aspernatur tempora quia magnam id alias culpa
                          nulla.</small
                        >
                      </a>
                    </div>

                    <a href="" class="text-muted small ms-3 me-2"
                      ><strong>Like</strong></a
                    >
                    <a href="" class="text-muted small ms-2"
                      ><strong>Reply</strong></a
                    >
                  </div>
                </div>
                <!-- end single comment -->

                <!-- single comment -->
                <div class="d-flex mb-3">
                  <a href="#">
                    <img
                      src="https://mdbootstrap.com/img/new/avatars/6.jpg"
                      alt=""
                      style="height: 40px"
                      class="rounded-circle border me-2"
                    />
                  </a>

                  <div>
                    <div
                      class="bg-light rounded-lg px-3 py-1"
                      style="background-color: #f0f2f5 !important"
                    >
                      <a href="" class="text-dark mb-0">
                        <strong>James Randal</strong>
                      </a>
                      <a href="" class="d-block text-muted">
                        <small
                          >Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Facilis, aperiam ab et aspernatur tempora quia
                          magnam id alias culpa nulla.</small
                        >
                      </a>
                    </div>

                    <a href="" class="text-muted small ms-3 me-2"
                      ><strong>Like</strong></a
                    >
                    <a href="" class="text-muted small ms-2"
                      ><strong>Reply</strong></a
                    >
                  </div>
                </div>
                <!-- end single comment -->

                <!-- single comment -->
                <div class="d-flex mb-3">
                  <a href="#">
                    <img
                      src="https://mdbootstrap.com/img/new/avatars/7.jpg"
                      alt=""
                      style="height: 40px"
                      class="rounded-circle border me-2"
                    />
                  </a>

                  <div>
                    <div
                      class="bg-light rounded-lg px-3 py-1"
                      style="background-color: #f0f2f5 !important"
                    >
                      <a href="" class="text-dark mb-0">
                        <strong>James Randal</strong>
                      </a>
                      <a href="" class="d-block text-muted">
                        <small
                          >Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Facilis, aperiam ab et aspernatur tempora quia
                          magnam id alias culpa nulla.</small
                        >
                      </a>
                    </div>

                    <a href="" class="text-muted small ms-3 me-2"
                      ><strong>Like</strong></a
                    >
                    <a href="" class="text-muted small ms-2"
                      ><strong>Reply</strong></a
                    >
                  </div>
                </div>
                <!-- end single comment -->

                <!-- single comment -->
                <div class="d-flex mb-3">
                  <a href="#">
                    <img
                      src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                      alt=""
                      style="height: 40px"
                      class="rounded-circle border me-2"
                    />
                  </a>

                  <div>
                    <div
                      class="bg-light rounded-lg px-3 py-1"
                      style="background-color: #f0f2f5 !important"
                    >
                      <a href="" class="text-dark mb-0">
                        <strong>James Randal</strong>
                      </a>
                      <a href="" class="d-block text-muted">
                        <small
                          >Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Facilis, aperiam ab et aspernatur tempora quia
                          magnam id alias culpa nulla.</small
                        >
                      </a>
                    </div>

                    <a href="" class="text-muted small ms-3 me-2"
                      ><strong>Like</strong></a
                    >
                    <a href="" class="text-muted small ms-2"
                      ><strong>Reply</strong></a
                    >
                  </div>
                </div>
                <!-- end single comment -->
              </div>
            </div>

            <!-- end single post -->

            <!-- single post -->

            <div class="card mb-4">
              <div class="card-body">
                <div class="d-flex mb-3">
                  <a href="#">
                    <img
                      src="../assets/images/myphoto2.jpg"
                      alt=""
                      style="height: 40px"
                      class="rounded-circle border me-2"
                    />
                  </a>

                  <div>
                    <a href="" class="text-dark mb-0">
                      <strong>Ab Aboussoror</strong>
                    </a>

                    <a
                      href=""
                      class="d-block text-muted"
                      style="margin-top: -6px"
                    >
                      <small>10h</small>
                    </a>
                  </div>
                </div>

                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Perferendis id laboriosam repellendus ut quos iusto! Voluptate
                  magni id nihil ullam.
                </p>
              </div>

              <a href="">
                <img
                  src="https://mdbootstrap.com/img/new/standard/city/042.jpg"
                  class="w-100"
                  alt=""
                />
              </a>

              <div class="card-body">
                <div class="d-flex justify-content-between mb-3">
                  <a href="">
                    <i class="fas fa-thumbs-up text-primary"></i>
                    <span>24</span>
                  </a>

                  <div>
                    <a href="" class="text-muted"> 8 comments </a>
                  </div>
                </div>

                <div
                  class="d-flex justify-content-between text-center border-top border-bottom mb-4"
                >
                  <button class="btn btn-link btn-lg text-muted">
                    <i class="fas fa-thumbs-up me-2"></i>Like
                  </button>

                  <button class="btn btn-link btn-lg text-muted">
                    <i class="fas fa-comment me-2"></i>Comment
                  </button>
                </div>

                <div class="d-flex mb-3">
                  <a href="#">
                    <img
                      src="../assets/images/myphoto2.jpg"
                      alt=""
                      style="height: 40px"
                      class="rounded-circle border me-2"
                    />
                  </a>

                  <div class="form-outline w-100">
                    <textarea
                      class="form-control"
                      id="textAreaExample"
                      rows="2"
                    ></textarea>
                    <label class="form-label" for="textAreaExample"
                      >Write a comment</label
                    >
                  </div>
                </div>

                <!-- single comment -->
                <div class="d-flex mb-3">
                  <a href="#">
                    <img
                      src="https://mdbootstrap.com/img/new/avatars/4.jpg"
                      alt=""
                      style="height: 40px"
                      class="rounded-circle border me-2"
                    />
                  </a>

                  <div>
                    <div
                      class="bg-light rounded-lg px-3 py-1"
                      style="background-color: #f0f2f5 !important"
                    >
                      <a href="" class="text-dark mb-0">
                        <strong>James Randal</strong>
                      </a>
                      <a href="" class="d-block text-muted">
                        <small
                          >Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Ut, sed. Lorem ipsum dolor sit amet consectetur
                          adipisicing elit. Facilis, aperiam ab et aspernatur
                          tempora quia magnam id alias culpa nulla.</small
                        >
                      </a>
                    </div>

                    <a href="" class="text-muted small ms-3 me-2"
                      ><strong>Like</strong></a
                    >
                    <a href="" class="text-muted small ms-2"
                      ><strong>Reply</strong></a
                    >
                  </div>
                </div>
                <!-- end single comment -->

                <!-- single comment -->
                <div class="d-flex mb-3">
                  <a href="#">
                    <img
                      src="https://mdbootstrap.com/img/new/avatars/5.jpg"
                      alt=""
                      style="height: 40px"
                      class="rounded-circle border me-2"
                    />
                  </a>

                  <div>
                    <div
                      class="bg-light rounded-lg px-3 py-1"
                      style="background-color: #f0f2f5 !important"
                    >
                      <a href="" class="text-dark mb-0">
                        <strong>James Randal</strong>
                      </a>
                      <a href="" class="d-block text-muted">
                        <small>
                          amet consectetur adipisicing elit. Facilis, aperiam ab
                          et aspernatur tempora quia magnam id alias culpa
                          nulla.</small
                        >
                      </a>
                    </div>

                    <a href="" class="text-muted small ms-3 me-2"
                      ><strong>Like</strong></a
                    >
                    <a href="" class="text-muted small ms-2"
                      ><strong>Reply</strong></a
                    >
                  </div>
                </div>
                <!-- end single comment -->

                <!-- single comment -->
                <div class="d-flex mb-3">
                  <a href="#">
                    <img
                      src="https://mdbootstrap.com/img/new/avatars/6.jpg"
                      alt=""
                      style="height: 40px"
                      class="rounded-circle border me-2"
                    />
                  </a>

                  <div>
                    <div
                      class="bg-light rounded-lg px-3 py-1"
                      style="background-color: #f0f2f5 !important"
                    >
                      <a href="" class="text-dark mb-0">
                        <strong>James Randal</strong>
                      </a>
                      <a href="" class="d-block text-muted">
                        <small
                          >Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Facilis, aperiam ab et aspernatur tempora quia
                          magnam id alias culpa nulla.</small
                        >
                      </a>
                    </div>

                    <a href="" class="text-muted small ms-3 me-2"
                      ><strong>Like</strong></a
                    >
                    <a href="" class="text-muted small ms-2"
                      ><strong>Reply</strong></a
                    >
                  </div>
                </div>
                <!-- end single comment -->
              </div>
            </div>

            <!-- end single post -->
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.container {
  max-width: 1140px;
}
</style>
