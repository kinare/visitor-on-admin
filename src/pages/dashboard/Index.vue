<template>
  <v-container>
    <v-row>
      <v-col>
        <v-sheet
          rounded
          color="primary darken-2"
          dark
          class="d-flex flex-md-row flex-column justify-space-around align-center pa-3 ma-1 text-center"
        >
          <v-icon large>mdi-calendar-clock</v-icon>

          <h4 class="text-h6 text-uppercase font-weight-light">
            Next Session starts at 31<sup>st</sup> July 2020 3:00 PM
          </h4>

          <v-btn text> Join Session </v-btn>
        </v-sheet>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="8">
        <v-row no-gutters>
          <v-col cols="12" md="5" class="d-flex">
            <v-card outlined rounded class="ma-1" width="100%">
              <v-card-title class="overline">My Therapist</v-card-title>

              <v-card-text
                class="d-flex pb-0 flex-column justify-center align-center"
              >
                <v-avatar size="100" color="grey lighten-5" class="mb-5">
                  <v-img
                    src="https://randomuser.me/api/portraits/men/78.jpg"
                    contain
                    lazy-src="https://randomuser.me/api/portraits/men/78.jpg"
                  />
                </v-avatar>

                <h4>Mercy Mwangi</h4>
                <h6>Family Counselor</h6>

                <span>
                  <v-btn href="tel:0708338855" icon small color="green">
                    <v-icon small>mdi-phone</v-icon>
                  </v-btn>
                  <v-btn
                    href="mailto:email@example.com"
                    icon
                    small
                    color="blue"
                  >
                    <v-icon small>mdi-email</v-icon>
                  </v-btn>
                </span>
              </v-card-text>

              <v-list dense>
                <v-list-item-group>
                  <v-list-item dense>
                    <v-list-item-content>
                      <v-list-item-title class="grey--text caption">
                        Age:
                      </v-list-item-title>
                    </v-list-item-content>

                    <v-list-item-action class="caption">
                      45
                    </v-list-item-action>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title class="grey--text caption">
                        Gender:
                      </v-list-item-title>
                    </v-list-item-content>
                    <v-list-item-action class="caption">
                      Female
                    </v-list-item-action>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title class="grey--text caption">
                        Phone:
                      </v-list-item-title>
                    </v-list-item-content>
                    <v-list-item-action class="caption">
                      0708338855
                    </v-list-item-action>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title class="grey--text caption">
                        Email:
                      </v-list-item-title>
                    </v-list-item-content>
                    <v-list-item-action class="caption">
                      mercy@therappy.com
                    </v-list-item-action>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-card>
          </v-col>
          <v-col cols="12" md="7" class="d-flex">
            <v-row no-gutters>
              <v-col cols="6" md="6" class="d-flex">
                <v-card outlined rounded class="ma-1" width="100%">
                  <v-card-title class="overline"> Goal </v-card-title>

                  <v-card-text
                    class="d-flex flex-row justify-center align-center"
                  >
                    <v-progress-circular
                      :rotate="360"
                      :size="100"
                      :width="5"
                      :value="30"
                      color="orange"
                    >
                      30%
                    </v-progress-circular>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="6" md="6" class="d-flex">
                <v-card outlined rounded class="ma-1" width="100%">
                  <v-card-title class="overline"> Sessions </v-card-title>

                  <v-card-text
                    class="d-flex flex-row justify-center align-center"
                  >
                    <v-progress-circular
                      :rotate="360"
                      :size="100"
                      :width="5"
                      :value="30"
                      color="blue"
                    >
                      3 / 15
                    </v-progress-circular>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" md="12" class="d-flex">
                <v-card outlined rounded class="ma-1" width="100%">
                  <v-card-title class="overline">
                    Billing

                    <v-spacer />

                    <v-chip color="green" label outlined small class="mar-5">
                      Paid
                    </v-chip>
                  </v-card-title>

                  <v-card-text
                    class="d-flex flex-column justify-center align-center"
                  >
                    <h1 class="text-h4 green--text">KES 2000/-</h1>
                    <p class="overline">Balance</p>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <v-card outlined rounded>
              <v-card-title class="overline"> Activity </v-card-title>

              <v-card-text>
                <v-sparkline
                  :labels="[
                    '12am',
                    '3am',
                    '6am',
                    '9am',
                    '12pm',
                    '3pm',
                    '6pm',
                    '9pm',
                  ]"
                  :value="[200, 675, 410, 390, 310, 460, 250, 240]"
                  color="primary"
                  line-width="2"
                  padding="16"
                />
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="4" class="d-flex">
        <v-card outlined rounded class="ma-1">
          <v-card-title class="overline"> Upcoming Sessions </v-card-title>

          <v-row justify="center">
            <v-card-text>
              <v-date-picker no-title full-width></v-date-picker>
            </v-card-text>
          </v-row>

          <v-divider />

          <v-card-text>
            <v-list color="primary" dark rounded dense class="my-2">
              <v-list-item>
                <v-list-item-avatar>
                  <v-icon>mdi-calendar-clock</v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>
                    31<sup>st</sup> July 2020
                  </v-list-item-title>
                  <v-list-item-subtitle> Session 2</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>

            <v-list
              color="grey"
              dark
              rounded
              dense
              class="my-2"
              v-for="n in 4"
              :key="n"
            >
              <v-list-item>
                <v-list-item-avatar>
                  <v-icon>mdi-calendar-clock</v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>
                    {{ n + 7 }}<sup>st</sup> August 2020
                  </v-list-item-title>
                  <v-list-item-subtitle>
                    Session {{ n + 2 }}</v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>

</script>


<style scoped lang="sass">

</style>
<script setup lang="ts">
</script>
