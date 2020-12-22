<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <menu-avatar-card />
      <v-divider />
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon :color="item.color">
              {{ item.icon }}
            </v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      flat
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-switch
        v-model="darkMode"
        :label="`${darkMode? 'Desligar' : 'Ligar'} as Luzes`"
        color="orange"
        :append-icon="darkMode ? 'mdi-lightbulb-on' : 'mdi-lightbulb' "
        @change="changeToDarkMode"
      />
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>
<style >
#app {
  font-family: 'Dosis', sans-serif;
}
</style>
<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [
        {
          icon: 'mdi-face',
          color: 'blue',
          title: 'Sobre',
          to: '/about'
        },
        {
          icon: 'mdi-apps',
          color: 'orange',
          title: 'Projetos',
          to: '/'
        },
        {
          icon: 'mdi-file-certificate',
          color: 'blue darken-3',
          title: 'Habilidades',
          to: '/skills'
        },
        {
          icon: 'mdi-pdf-box',
          color: 'red darken-4',
          title: 'Currículo',
          to: '/resume'
        },
        {
          icon: 'mdi-notebook-edit',
          color: 'blue darken-4',
          title: 'Blog',
          to: '/blog'
        },
        {
          icon: 'mdi-chat-processing',
          color: 'purple darken-4',
          title: 'Contato',
          to: '/contact'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Daniel Silva',
      darkMode: true
    }
  },
  computed: {
  },
  methods: {
    changeToDarkMode (val) {
      this.$vuetify.theme.dark = !val
    }
  }
}
</script>
