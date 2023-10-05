<template>
  <v-container
    class="d-flex justify-center align-center"
    style="height: 100vh"
  >
    <v-row align="center" justify="center">
      <v-col cols="12" xs="12" sm="12" md="6" lg="5" xl="5" xxl="5">
        <v-form fast-fail  class="mt-4">
          <v-card class="elevation-1 pt-2 pb-2">
            <v-card-text>
              <h4 class="text-h5 font-weight-medium mb-5">Sign Up</h4>
              <v-row>
                <v-col cols="12" xs="12" sm="12" md="12" lg="6" xl="6" xxl="6">
                  <v-text-field
                    label="First Name"
                    clearable
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="12" lg="6" xl="6" xxl="6">
                  <v-text-field
                    label="Last Name"
                    clearable
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="12" lg="6" xl="6" xxl="6">
                  <v-text-field
                    label="User Name"
                    clearable
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="12" lg="6" xl="6" xxl="6">
                  <v-text-field
                    label="Email"
                    type="email"
                    clearable
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="12" lg="6" xl="6" xxl="6">
                  <v-text-field
                    :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                    :type="visible ? 'text' : 'password'"
                    label="Password"
                    @click:append-inner="visible = !visible"
                    clearable
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="12" lg="6" xl="6" xxl="6">
                  <v-text-field
                    :append-inner-icon="visible2 ? 'mdi-eye-off' : 'mdi-eye'"
                    :type="visible2 ? 'text' : 'password'"
                    @click:append-inner="visible2 = !visible2"
                    label="Confirm Password"
                    clearable
                    required
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  xs="12"
                  sm="12"
                  md="12"
                  lg="12"
                  xl="12"
                  xxl="12"
                >
                  <v-text-field
                    label="Phone Number"
                    type="text"
                    clearable
                    required
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  xs="12"
                  sm="12"
                  md="12"
                  lg="12"
                  xl="12"
                  xxl="12"
                >
                  <v-btn
                    block
                    size="large"
                    type="submit"
                    color="primary"
                    class="text-capitalize"
                    to="/login"
                  >
                    <v-icon start icon="mdi-checkbox-marked-circle"></v-icon
                    >Register</v-btn
                  >
                  <div class="text-center mt-8">
                    <div class="text-subtitle-1 font-weight-medium">
                      Already have an account?
                      <v-btn
                        variant="outlined"
                        color="primary"
                        to="/login"
                        class="text-capitalize ml-4"
                        >Sign In</v-btn
                      >
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const visible = ref(false);
const visible2 = ref(false);

</script>
