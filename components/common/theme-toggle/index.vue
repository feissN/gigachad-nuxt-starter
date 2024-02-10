<template>
  <v-btn-toggle :model-value="currentTheme === 'dark' ? 0 : 1" @update:model-value="toggleTheme">
    <v-btn>
      <v-icon icon="mdi-weather-night"></v-icon>
    </v-btn>

    <v-btn>
      <v-icon icon="mdi-weather-sunny"></v-icon>
    </v-btn>
  </v-btn-toggle>
</template>

<script setup lang="ts">
const { currentTheme, toggleTheme } = useAppTheme();
</script>
