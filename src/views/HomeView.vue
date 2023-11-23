<script setup lang="ts">
import CardComponent from "../components/cards/CardComponent.vue";
</script>

<template>
  <b-container class="mb-3">
    <b-row>
      <b-col>
        <CardComponent />
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-button>Previous</b-button>
      </b-col>
      <b-col class="text-center">
        <b-button data-test="next-button">Next</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>
