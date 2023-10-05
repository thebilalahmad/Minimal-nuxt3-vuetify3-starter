<template>
  <v-container
    class="d-flex justify-center align-center"
    style="height: 100vh"
  >
    <v-row align="center" justify="center">
      <v-col cols="12" xs="12" sm="12" md="6" lg="4" xl="4" xxl="4">
        <v-form  class="mt-4">
          <v-card class="elevation-1 pt-4 pb-4">
            <v-card-text>
              <h4 class="text-h4 font-weight-medium">Hey,</h4>
              <h4 class="text-h4 mb-4 font-weight-medium">Welcome Back</h4>
              <v-row>
                <v-col
                  cols="12"
                  xs="12"
                  sm="12"
                  md="12"
                  lg="12"
                  xl="12"
                  xxl="12"
                >
                  <div class="text-subtitle-1 font-weight-medium">Email</div>
                  <v-text-field
                    type="email"
                    placeholder="Enter your email"
                    clearable
                    class="mt-2"
                  ></v-text-field>
                  <div class="text-subtitle-1 font-weight-medium mt-2">
                    Password
                  </div>
                  <v-text-field
                    :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                    :type="visible ? 'text' : 'password'"
                    @click:append-inner="visible = !visible"
                    placeholder="Enter your password"
                    clearable
                    class="mt-2"
                    
                  ></v-text-field>

                  <v-checkbox
                    label="Remember Me"
                    class="pb-2 pt-0"
                    hide-details
                    color="primary"

                  ></v-checkbox>
                  <v-btn
                    type="submit"
                    block
                    size="large"
                    color="primary"
                    class="mt-2 text-capitalize"
                    to="/dashboard"
                  >
                    <v-icon start icon="mdi-checkbox-marked-circle"></v-icon
                    >Login</v-btn
                  >
                  <div class="text-center mt-8">
                    <div class="text-subtitle-1 font-weight-medium">
                      Dont't have an account?
                      <v-btn
                        variant="tonal"
                        color="primary"
                        to="/signup"
                        class="text-capitalize ml-3"
                        >Create New One</v-btn
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


//password visibility flag
let visible = ref(false);



//apply validations and define rules
</script>
