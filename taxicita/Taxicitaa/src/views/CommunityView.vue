<script setup>
import AppHeader from "@/components/global/AppHeader.vue";
import SinglePost from '@/components/SinglePost.vue';
</script>

<template>
  <div class="community">


    <App-header />
    <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-mdb-toggle="modal" data-mdb-target="#exampleModal">
  Launch demo modal
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">...</div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-mdb-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

    <section>
      <div class="container-fluid">
        <div class="row ps-md-3 mt-3">
          <!-- first section -->
          <div class="col-md-3 mb-5">
            <div class="card">
              <div class="card-body">
                <div class="card-title mb-3"><h4>Rules</h4></div>
                <p class="card-text">
                  <i
                    class="fas fa-check me-2"
                    style="color: rgba(99, 134, 123, 1)"
                  ></i
                  >Please refrain from insulting
                </p>
                <p class="card-text">
                  <i
                    class="fas fa-check me-2"
                    style="color: rgba(99, 134, 123, 1)"
                  ></i
                  >Please refrain from posting explicit content
                </p>
                <p class="card-text">
                  <i
                    class="fas fa-check me-2"
                    style="color: rgba(99, 134, 123, 1)"
                  ></i
                  >Please be respectful to the other users
                </p>
                <p class="card-text">
                  <i
                    class="fas fa-check me-2"
                    style="color: rgba(99, 134, 123, 1)"
                  ></i
                  >Please refrain from starting any unnecessary debates
                </p>
                <p class="card-text">
                  <i
                    class="fas fa-circle-info me-2"
                    style="color: rgba(99, 134, 123, 1)"
                  ></i
                  >Any violation of these rules could lead the user account to
                  be banned permanently. Please understand that we’re trying to
                  keep a healthy and safe environment for all the users. Enjoy
                  your time with us :)
                </p>
              </div>
            </div>
          </div>
          <!-- mid section -->

          <div class="col-md-6 text-dark">
            <h2>Activity</h2>
            <div class="card mt-3 mb-4" style="border: 0.5px grey solid">
              <div class="card-body">
                <div class="d-flex">
                  <a href="#">
                    <img
                      src="../assets/images/myphoto2.jpg"
                      alt=""
                      style="height: 60px"
                      class="rounded-circle border me-2"
                    />
                  </a>

                  <button
                    class="btn btn-link btn-block btn-rounded text-muted text-start"
                  >
                    Share what's on your mind, Ab...
                  </button>
                </div>
              </div>
              <div
                class="card-body border-top bg-light p-2"
                style="background-color: #efefef !important"
              >
                <div
                  class="bg-light d-flex justify-content-between align-items-center"
                  style="background-color: #efefef !important"
                >
                  <button
                    class="btn btn-link btn-lg"
                    style="color: rgba(99, 134, 123, 1)"
                  >
                    <i class="fas fa-share-nodes me-2"></i>Share
                  </button>
                  <button
                    class="btn btn-link btn-lg"
                    style="color: rgba(99, 134, 123, 1)"
                  >
                    <i class="far fa-images me-2"></i>Photo
                  </button>
                  <button
                    class="btn btn-link btn-lg"
                    style="color: rgba(99, 134, 123, 1)"
                  >
                    <i class="fas fa-video me-2"></i>Live
                  </button>
                </div>
              </div>
            </div>

            <div class="mb-4 mt-5">
              <div class="container-fluid">
                <div
                  class="row d-flex justify-content-between align-items-center"
                >
                  <div class="col-md-6 d-flex mb-3 mb-md-0">
                    <button
                      class="btn btn-link bg-light me-2"
                      style="
                        background-color: #f0f2f5 !important;
                        color: rgba(99, 134, 123, 1);
                      "
                    >
                      Recent
                    </button>
                    <button
                      class="btn btn-link"
                      style="color: rgba(99, 134, 123, 1)"
                    >
                      This Month
                    </button>
                    <button
                      class="btn btn-link"
                      style="color: rgba(99, 134, 123, 1)"
                    >
                      This Year
                    </button>
                    <button
                      class="btn btn-link"
                      style="color: rgba(99, 134, 123, 1)"
                    >
                      All
                    </button>
                  </div>
                  <div class="col-md-4">
                    <div class="input-group rounded">
                      <input
                        type="search"
                        class="form-control rounded"
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="search-addon"
                      />
                      <span class="input-group-text border-0" id="search-addon">
                        <i class="fas fa-search"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- single post -->

            <Single-Post />

            <!-- end single post -->

            <!-- single post -->

            <Single-Post />

            <!-- end single post -->
          </div>

          <!-- last section -->
          <div class="col-md-3 d-none d-md-block">
            <div class="card">
              <div class="card-body">
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
                      <strong>Ab Aboussoror</strong>
                    </a>

                    <a
                      href=""
                      class="d-block text-muted"
                      style="margin-top: -6px"
                    >
                      <small>Passenger</small>
                    </a>
                  </div>
                </div>

                <p class="card-text border-bottom pb-2 mt-2">
                  <i class="far fa-newspaper me-2"></i>Posts Created
                  <small>24</small>
                </p>
                <p class="card-text border-bottom pb-2">
                  <i class="fas fa-user-group me-2"></i>Friends
                  <small>24</small>
                </p>
                <p class="card-text">
                  <i class="fas fa-code-pull-request me-2"></i>Requests Created
                  <small>24</small>
                </p>
                <button
                  class="btn btn-link btn-lg btn-block btn-rounded text-muted"
                >
                  Go to profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>
