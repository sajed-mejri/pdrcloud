<script setup lang="ts">
import CardComponent from "../components/cards/CardComponent.vue";
</script>

<template>
  <div class="wrapper">
    <b-container class="mb-3 d-flex justify-content-end">
      <b-button class="circle-btn" variant="primary">
        <BIconPlus font-scale="4" />
      </b-button>
    </b-container>
    <b-container class="mb-3">
      <b-row>
        <b-col>
          <CardComponent />
        </b-col>
      </b-row>
    </b-container>
    <b-container class="mb-3 d-flex justify-content-between">
      <b-button>Previous</b-button>
      <b-button>Next</b-button>
    </b-container>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  padding: 16px;
}
.circle-btn {
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
