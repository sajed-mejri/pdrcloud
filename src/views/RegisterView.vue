<script setup lang="ts">
import { useAuthStore } from "../stores/auth";
import { ref } from "vue";
import { useRouter } from "vue-router";

const authStore = useAuthStore();
const router = useRouter();

const name = ref("");
const email = ref("");
const password = ref("");

const register = async () => {
  try {
    await authStore.register({
      name: name.value,
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
    <b-card title="Register" class="register shadow">
      <b-form size="md" class="mb-3" prepend="Label" @submit.stop.prevent>
        <b-form-input
          v-model="name"
          class="mb-3"
          placeholder="Name"
          type="text"
        ></b-form-input>
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
        ></b-form-input>
        <b-button variant="outline-primary" pill @click="register"
          >Register</b-button
        >
      </b-form>
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
.register {
  max-width: 20rem;
  margin: 0 auto;
  text-align: center;
}
</style>
