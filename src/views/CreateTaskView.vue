<script setup lang="ts">
import CreateFormComponent from "../components/forms/CreateFormComponent.vue";
</script>
<template>
  <b-container class="mt-2">
    <b-row>
      <b-col md="8" lg="8">
        <b-container class="wrapper">
          <b-card title="Create Task:" class="task shadow">
            <CreateFormComponent />
          </b-card> </b-container
      ></b-col>
      <b-col md="4" lg="4">
        <div class="image-container">
          <img class="image" src="../assets/task.jpg" alt="" />
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  overflow: hidden;
}
.task {
  max-width: 30rem;
  margin: 0 auto;
}
.image-container {
  .image {
    max-width: 300px;
    border-radius: 40px;
    @media only screen and (max-width: 765px) {
      max-width: 100%;
    }
  }
  margin-top: 30px;
  margin-left: -12rem;
  position: absolute;
  z-index: -1;
  @media only screen and (max-width: 765px) {
    margin-left: 0;
    margin-top: -130px;
  }
}
</style>
