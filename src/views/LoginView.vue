<script setup lang="ts">
import { useAuthStore } from "../stores/auth";
import { ref } from "vue";
import { RouterLink, useRouter } from "vue-router";

const authStore = useAuthStore();
const router = useRouter();

const email = ref<string>("");
const password = ref<string>("");

const login = async () => {
  try {
    await authStore.login({
      email: email.value,
      password: password.value,
    });

    router.push("/");
  } catch (error) {
    console.error(error);
  }
};
</script>

<template>
  <div class="wrapper">
    <b-card title="Login" class="login shadow">
      <b-form size="md" class="mb-3" prepend="Label" @submit.stop.prevent>
        <b-form-input
          v-model="email"
          class="mb-3"
          placeholder="Email"
          type="email"
        ></b-form-input>
        <b-form-input
          v-model="password"
          class="mb-3"
          placeholder="Password"
          type="password"
          required
        ></b-form-input>
        <b-button variant="outline-primary" pill @click="login">Login</b-button>
      </b-form>
      dont have an account?
      <RouterLink to="/register">register</RouterLink>
    </b-card>
  </div>
</template>

<style scoped>
.wrapper {
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow-y: hidden;
}
.login {
  max-width: 20rem;
  margin: 0 auto;
  text-align: center;
}
</style>
