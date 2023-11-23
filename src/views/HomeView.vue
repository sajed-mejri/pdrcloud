<script setup lang="ts">
import IconButtonComponent from "@/components/buttons/IconButtonComponent.vue";
import CardComponent from "../components/cards/CardComponent.vue";
</script>

<template>
  <div class="wrapper">
    <b-container class="mb-3 d-flex justify-content-end">
      <IconButtonComponent :link="'/create'" :likes="42" />
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

<style scoped>
.wrapper {
  padding: 16px;
}
</style>
