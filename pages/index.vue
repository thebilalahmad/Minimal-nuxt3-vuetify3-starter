<template>
  <v-row align="center" justify="center">
    <v-col cols="12" sm="12" md="8" lg="8">
      <v-row>
        <v-col cols="12" sm="12" md="12" lg="12" class="text-center">
          <div class="d-flex flex-row mb-6 justify-center transparent">
            <v-sheet class="ma-2 pa-2" color="transparent">
              <v-img src="~/assets/nuxt-logo.png" alt="" width="120"></v-img
            ></v-sheet>

            <v-sheet class="mt-15 text-h4" color="transparent"> + </v-sheet>
            <v-sheet class="ma-2 pa-2" color="transparent">
              <v-img src="~/assets/vuetify-logo.png" alt="" width="120"></v-img
            ></v-sheet>
          </div>
          <h1 class="text-h4 font-weight-bold">
            Welcome to Nuxt 3 + Vuetify 3 Minimal Starter
          </h1>
          <p class="text-h6 mb-4 mt-4">
            Get started building awesome web applications!
          </p>
        </v-col>

        <v-col cols="12" sm="12" md="12" lg="12" class="mt-6">
          <v-row align="center" justify="center">
            <v-col cols="12" sm="12" md="4" lg="4">
              <v-hover
                v-slot="{ isHovering, props }"
                open-delay="40"
                close-delay="20"
              >
                <v-card
                  :elevation="isHovering ? 3 : 1"
                  :class="{ 'on-hover': isHovering }"
                  v-bind="props"
                >
                  <v-card-text class="pa-0">
                    <v-list>
                      <v-list-item>
                        <template v-slot:prepend>
                          <v-avatar color="primary">
                            <v-icon>mdi-check</v-icon>
                          </v-avatar>
                        </template>
                        <v-list-item-title
                          class="text-subtitle-1 font-weight-medium"
                          >Vuetify 3 Integration With Nuxt 3</v-list-item-title
                        >
                      </v-list-item>
                    </v-list>
                  </v-card-text>
                </v-card>
              </v-hover>
            </v-col>
            <v-col cols="12" sm="12" md="4" lg="4">
              <v-hover
                v-slot="{ isHovering, props }"
                open-delay="40"
                close-delay="20"
              >
                <v-card
                  :elevation="isHovering ? 3 : 1"
                  :class="{ 'on-hover': isHovering }"
                  v-bind="props"
                >
                  <v-card-text class="pa-0">
                    <v-list>
                      <v-list-item>
                        <template v-slot:prepend>
                          <v-avatar color="primary">
                            <v-icon>mdi-check</v-icon>
                          </v-avatar>
                        </template>
                        <v-list-item-title
                          class="text-subtitle-1 font-weight-medium"
                          >Layouts Creation</v-list-item-title
                        >
                      </v-list-item>
                    </v-list>
                  </v-card-text>
                </v-card>
              </v-hover>
            </v-col>
            <v-col cols="12" sm="12" md="4" lg="4">
              <v-hover
                v-slot="{ isHovering, props }"
                open-delay="40"
                close-delay="20"
              >
                <v-card
                  :elevation="isHovering ? 3 : 1"
                  :class="{ 'on-hover': isHovering }"
                  v-bind="props"
                >
                  <v-card-text class="pa-0">
                    <v-list>
                      <v-list-item>
                        <template v-slot:prepend>
                          <v-avatar color="primary">
                            <v-icon>mdi-check</v-icon>
                          </v-avatar>
                        </template>
                        <v-list-item-title
                          class="text-subtitle-1 font-weight-medium"
                          >Login, Sign Up & Dashboard Layouts </v-list-item-title
                        >
                      </v-list-item>
                    </v-list>
                  </v-card-text>
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" sm="12" md="12" lg="12" class="mt-6 mb-6">
          <v-toolbar
            title="Layouts"
            rounded
            density="comfortable"
            border
            color="#ffffff"
          >
          <v-toolbar-items>
            <v-btn color="primary" to="/login">Login</v-btn>
            <v-btn color="primary" to="/signup">Sign Up</v-btn>
            <v-btn  color="primary" to="/dashboard">Dashboard</v-btn>
          </v-toolbar-items>
          </v-toolbar>
        </v-col>
        <v-col cols="12" sm="12" md="6" lg="6">
          <v-hover
            v-slot="{ isHovering, props }"
            open-delay="40"
            close-delay="20"
          >
            <v-card
              :elevation="isHovering ? 4 : 1"
              :class="{ 'on-hover': isHovering }"
              v-bind="props"
              href="https://nuxt.com/"
              target="_blank"
            >
              <v-card-title primary-title>
                <v-avatar size="50" color="#F3F3F2">
                  <v-img
                    src="~/assets/nuxt-logo.png"
                    alt=""
                    height="32"
                    width="40"
                  ></v-img>
                </v-avatar>
                Nuxt 3 Documentation
              </v-card-title>
              <v-card-text>
                Build your next Vue.js application with confidence using Nuxt.
                An open source framework under MIT license that makes web
                development simple and powerful.
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="12" sm="12" md="6" lg="6">
          <v-hover
            v-slot="{ isHovering, props }"
            open-delay="40"
            close-delay="20"
          >
            <v-card
              :elevation="isHovering ? 4 : 1"
              :class="{ 'on-hover': isHovering }"
              v-bind="props"
              href="https://vuetifyjs.com/"
              target="_blank"
            >
              <v-card-title primary-title>
                <v-avatar size="50" color="#F3F3F2">
                  <v-img
                    src="~/assets/vuetify-logo.png"
                    alt=""
                    height="32"
                    width="40"
                  ></v-img>
                </v-avatar>
                Vuetify 3 Documentation
              </v-card-title>
              <v-card-text >
               <p>

              Vuetify is a no design skills required Open Source UI Library
                with beautifully handcrafted Vue Components.
              </p> 
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>
