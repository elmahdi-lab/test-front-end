<script setup>
  import SearchBar from "./components/SearchBar.vue";
  import PropertyList from "./components/PropertyList.vue";
  import {computed} from "vue";
  import {selectedProperty} from "./composables/useSearch.js";
  import PropertyItem from "./components/PropertyItem.vue";

  const property = computed( () => {
    return selectedProperty.value;
  })
</script>

<template>
  <v-app>
    <v-main>
      <search-bar />
      <property-list />
      <property-item v-if="property" :property="property"></property-item>
    </v-main>
  </v-app>
</template>


