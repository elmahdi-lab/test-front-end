<script setup>
import Property from "../model/Property.js";
import { resetProperty } from "../composables/useSearch.js";

const props = defineProps({
  property: Property
})

</script>

<template>
  <v-container>
    <v-card width="300">
      <v-img :src="property.image" height="200"></v-img>
      <v-card-title >{{ property.type }} - {{ property.fullPrice }}</v-card-title>
      <v-card-subtitle>{{ property.city }} - {{ property.address }}</v-card-subtitle>
      <v-card-text>{{ property.description }}</v-card-text>
      <v-card-actions>
        <v-btn variant="tonal" @click="resetProperty" size="large">
          Close
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn color="orange-lighten-2" variant="tonal" size="large">
          BUY
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>
