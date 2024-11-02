<template>
  <v-app class="rounded rounded-md">
    <v-navigation-drawer
      width="350"
      v-model="drawer"
      :location="$vuetify.display.mobile ? 'bottom' : undefined"
    >
      <v-list-item
        lines="three"
        prepend-avatar="https://randomuser.me/api/portraits/men/78.jpg"
        title="John Leider"
        subtitle="Admin"
      />

      <v-divider/>

      <v-list nav color="transparent">
        <v-list-item
          link
          color="primary"
          :to="item.to"
          v-for="(item, i) in navigation"
          :key="i"
          :prepend-icon="item.icon"
          :title="item.title"
          active-class="primary"
        />
      </v-list>

      <template v-slot:append>
        <div class="pa-2">
          <v-btn block flat>
            Logout
          </v-btn>
        </div>
      </template>

    </v-navigation-drawer>

    <v-app-bar flat>
      <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"/>

      <v-app-bar-title>
        <v-breadcrumbs density="compact" :items="items">
          <template v-slot:divider>
            /
          </template>
        </v-breadcrumbs>
      </v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn icon="mdi-theme-light-dark" variant="text" @click="toggleTheme"/>

      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn
            v-bind="props"
            variant="text"
            icon="mdi-dots-vertical"
          />
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in menu"
            :key="index"
            :value="index"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>


<script setup>


import {useRoute, useRouter} from "vue-router";
import {useTheme} from 'vuetify'

const theme = useTheme()
const router = useRouter()
const route = useRoute()

const drawer = ref(true)

const navigation = computed(() => [
  {icon: 'mdi-view-dashboard', title: 'Dashboard', to: {name: "DashboardHome"}},
  {icon: 'mdi-account-group', title: 'Clients', to: {name: "Clients"}},
  {icon: 'mdi-calendar-today', title: 'Activity', to: {name: "Activity"}},
  {icon: 'mdi-credit-card', title: 'Billing', to: {name: "Billing"}},
  {icon: 'mdi-chart-bar', title: 'Reports', to: {name: "Reports"}},
  {icon: 'mdi-bell-outline', title: 'Notifications', to: {name: "Notifications"}},
  {icon: 'mdi-cogs', title: 'Configurations', to: {name: "Configurations"}},
  {icon: 'mdi-account-multiple', title: 'User Management', to: {name: "UserManagement"}},
  {icon: 'mdi-history', title: 'Audit Trail', to: {name: "AuditTrail"}},

])

const menu = computed(() => [
  {title: 'Profile'},
  {title: 'Settings'},
  {title: 'Logout'},
])

const items = computed(() => {
  const matched = route.matched
  return matched.map((route) => {
    return {
      title: route.name,
      disabled: route === matched[matched.length - 1],
      href: route.path,
    }
  }).filter((item) => item.title)
})

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>

<style scoped lang="sass">

</style>
