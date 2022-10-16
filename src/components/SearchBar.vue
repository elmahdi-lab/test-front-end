<script setup>
import { keyword, search } from "../composables/useSearch.js";
</script>

<template>
  <v-container>
    <v-text-field @keyup="search" v-model="keyword"  label="Search by address keyword ... "/>
  </v-container>
</template>
