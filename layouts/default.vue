<template>
  <v-app v-if="!loading">
    <v-layout>
      <v-app-bar :elevation="2">
        <template #prepend>
          <v-app-bar-nav-icon @click="showNavDrawer = !showNavDrawer"></v-app-bar-nav-icon>
        </template>

        <v-app-bar-title>Application Bar</v-app-bar-title>
      </v-app-bar>
      <v-navigation-drawer v-model="showNavDrawer">
        <v-list>
          <v-list-item link to="/">
            <template #prepend> <v-icon icon="mdi-home"></v-icon> </template>
            Home
          </v-list-item>
          <v-divider thickness="3"></v-divider>
          <v-list-item link to="/demo"> Demo Page </v-list-item>
        </v-list>

        <template #append>
          <v-list>
            <v-list-item link to="/settings">
              <template #prepend> <v-icon icon="mdi-cog"></v-icon> </template>
              Settings
            </v-list-item>
          </v-list>
        </template>
      </v-navigation-drawer>

      <v-main style="min-height: 300px">
        <div class="w-full h-full p-4"><slot></slot></div>
      </v-main>
    </v-layout>
  </v-app>
</template>

<script setup lang="ts">
const showNavDrawer = ref(false);

const loading = ref(true);
onMounted(() => {
  loading.value = false;
});
</script>
