<script setup>
import { properties, showOne, selectedProperty } from "../composables/useSearch.js";
import {computed} from "vue";

const propertyList = computed( () => {
  return properties.value;
})

</script>

<template>
  <v-container>
    <v-alert v-if="propertyList.length === 0" text="No property found. Please adjust your keyword search" type="info"></v-alert>
    <v-table v-else-if="selectedProperty === null" density="compact">
      <thead>
      <tr>
        <th class="text-left">
          Address
        </th>
        <th class="text-left">
          City
        </th>
        <th class="text-left">
          Type
        </th>
        <th class="text-left">
          Price
        </th>
        <th class="text-left">
          Action
        </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="property in propertyList" :key="property.key">
        <td>{{ property.address }}</td>
        <td>{{ property.city }}</td>
        <td>{{ property.type }}</td>
        <td>{{ property.fullPrice }}</td>
        <td>
          <v-icon
            large
            color="green darken-2"
            @click="showOne(property.key)"
          >
            mdi-domain
          </v-icon>
        </td>
      </tr>
      </tbody>
    </v-table>
  </v-container>
</template>
