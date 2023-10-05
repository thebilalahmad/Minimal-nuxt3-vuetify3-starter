<template>
  <v-layout>
    <v-navigation-drawer v-model="drawer">
      <template v-slot:prepend>
        <div class="text-center pb-4 pt-4">
          <h3 class="text-h6">Nuxt 3 + Vuetify 3</h3>
        </div>
        <v-divider></v-divider>
        <v-list-item
          lines="two"
          prepend-avatar="https://randomuser.me/api/portraits/women/81.jpg"
          title="Jane Smith"
          subtitle="Logged in"
        ></v-list-item>
        <v-divider></v-divider>
      </template>
      <v-list density="compact" nav>
        <v-list-item
          prepend-icon="mdi-view-dashboard"
          title="Dashboard"
          value="Dashboard"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-account"
          title="My Account"
          value="account"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-account-group-outline"
          title="Users"
          value="users"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-gavel"
          title="Admin"
          value="Admin"
        ></v-list-item>
      </v-list>
      <template v-slot:append>
        <v-divider></v-divider>
        <div class="pa-2">
          <v-btn block color="primary"> Other Actions </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
    <v-app-bar :elevation="2">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <template v-slot:append>
        <v-btn variant="text" icon="mdi-magnify"> </v-btn>

        <v-btn variant="text" icon="mdi-cog"> </v-btn>
        <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn variant="text" v-bind="props" icon>
              <v-badge dot color="error">
                <v-icon>mdi-bell-outline</v-icon>
              </v-badge>
            </v-btn>
          </template>
          <v-card
            class="d-flex align-center flex-column justify-center"
            height="291"
            min-width="300"
          >
            <v-avatar color="primaryLight" size="120">
              <v-icon size="70" color="primary"
                >mdi-bell-outline</v-icon
              ></v-avatar
            >
            <span class="subtitle-1 font-weight-medium mt-4"
              >No Notification Found</span
            >
          </v-card>
        </v-menu>
        <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn icon v-bind="props">
              <v-avatar color="primary" size="46">
                <span class="subtitle-1">R</span>
              </v-avatar>
            </v-btn>
          </template>
          <v-card min-width="300">
            <v-list>
              <v-list-item
                prepend-avatar="https://cdn.vuetifyjs.com/images/john.jpg"
                title="User name"
                subtitle="User Role"
              >
              </v-list-item>
            </v-list>
            <v-divider></v-divider>
            <v-list>
              <v-list-item color="primary" class="font-weight-medium">
                <template v-slot:prepend>
                  <v-icon>mdi-home</v-icon>
                </template>
                <v-list-item-title>Profile Settings</v-list-item-title>
              </v-list-item>
              <v-list-item color="primary" class="font-weight-medium" to="/">
                <template v-slot:prepend>
                  <v-icon>mdi-logout</v-icon>
                </template>
                <v-list-item-title>SignOut</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card>
        </v-menu>
      </template>
    </v-app-bar>
    <v-main class="pb-15">
      <v-container fluid>
        <slot />
      </v-container>
    </v-main>
    <v-footer color=" text-subtitle-2 white font-weight-medium" height="30" app>
      <v-row justify="center" no-gutters>
        <v-col class="py-2 text-center footer-text" cols="12">
          © {{ new Date().getFullYear() }} —
          <strong class="">Nuxt 3 + Vuetify 3 </strong> - All Rights Reserved
        </v-col>
      </v-row>
    </v-footer>
  </v-layout>
</template>
<script setup>
const drawer = ref(null);
</script>

<style>
.footer-text {
  color: #334155;
}
</style>
