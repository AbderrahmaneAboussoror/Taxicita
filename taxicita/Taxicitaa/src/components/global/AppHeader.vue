<template>
  <nav id="navbar AppHeader" class="p-4 border-0 headernavbar">
    <div
      class="container-fluid d-flex align-items-center justify-content-between fw-bold"
    >
      <div class="text-dark">Taxicita</div>

      <div class="d-flex gap-4">
        <a href="/" id="a" class="na text-decoration-none text-dark">Home</a>
        <a href="/request" class="na text-decoration-none text-dark">Request</a>
        <a
          href="/community"
          v-if="isAuthenticated"
          class="na text-decoration-none text-dark"
          >Community</a
        >
        <a
          href="/profile"
          v-if="isAuthenticated"
          class="na text-decoration-none text-dark"
          >Profile</a
        >
      </div>

      <div class="d-flex gap-3">
        <a
          href="/register"
          class="na text-decoration-none text-dark fw-light p-3 px-4"
          style="border: 1px solid rgba(99, 134, 123, 1); border-radius: 30px"
          v-if="!isAuthenticated"
          >Get Started</a
        >
        <a
          v-if="isAuthenticated"
          href="#"
          class="na text-decoration-none text-dark"
          @click="handleLogout()"
        >
          <i class="fa fa-door-closed"></i> Logout
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
import { authService } from "@/services/auth-service.js";

export default {
  name: "AppHeader",
  data() {
    return {
      isAuthenticated: false,
    };
  },
  methods: {
    logout: async function () {
      
    },
    handleLogout() {
      authService
        .logout()
        .then(() => {
          this.$router.push('/')
        })
        .catch((error) => {
          console.error(error);
          // Handle the login error
        });
    },
  },
  mounted() {
    if (sessionStorage.getItem("token")) {
      this.isAuthenticated = true;
    }
  },
};
</script>
