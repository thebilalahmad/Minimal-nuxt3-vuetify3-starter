<template>
  <div>
    <v-app-bar :elevation="2">
      <template v-slot:prepend>
        <div class="d-flex flex-row">
          <v-sheet class="mr-2">
            <v-img src="~/assets/nuxt-logo.png" alt="" width="40"></v-img
          ></v-sheet>
          <v-sheet class="text-h5 mt-1"> + </v-sheet>
          <v-sheet class="ml-2">
            <v-img src="~/assets/vuetify-logo.png" alt="" width="40"></v-img
          ></v-sheet>
        </div>
      </template>
      <v-toolbar-title class="font-weight-medium">
        Minimal Starter
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <template v-slot:append>
        <v-btn href="https://github.com/bahmad143/Minimal-nuxt3-vuetify3-starter" target="_blank">
          <span class="mr-2">Latest Release</span>
          <v-icon>mdi-open-in-new</v-icon>
        </v-btn>
      </template>
    </v-app-bar>
    <v-main>
    <v-container>
      <slot />
    </v-container>
  </v-main>
    <v-footer
    color=" text-subtitle-2 white font-weight-medium"
    class="footer-bg"
    height="30"
    app
  >
    <v-row justify="center" no-gutters>
      <v-col class="footer-text py-2 text-center" cols="12">
        © {{ new Date().getFullYear() }} — <strong>Nuxt 3 + Vuetify 3</strong> -
        All Rights Reserved
      </v-col>
    </v-row>
  </v-footer>
   
  </div>
</template>
<style>

.footer-text {
  color: #334155;
}
</style>
