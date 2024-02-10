<template>
  <v-container class="flex flex-col gap-3">
    <div class="text-xl">Settings</div>
    <v-divider class="border-opacity-100"></v-divider>

    <div>
      <v-list>
        <v-list-item>
          <div>
            <div>Theme</div>
            <div>
              <common-theme-toggle />
            </div>
          </div>
        </v-list-item>
      </v-list>
    </div>
  </v-container>
</template>

<script setup lang="ts"></script>
