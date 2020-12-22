<template>
  <v-card outlined>
    <v-container fluid class="fill-height">
      <v-row>
        <slot name="header">
          <v-col cols="12" align="center">
            <h2>{{ title }}</h2>
          </v-col>
        </slot>
      </v-row>
      <v-row justify="center" align="center">
        <slot name="default">
          <v-col
            cols="12"
            align="center"
            justify="center"
          >
            <div class="d-flex align-stretch">
              <v-img
                height="100%"
                max-height="150px"
                :src="imgSrc"
              />
            </div>
          </v-col>
          <v-col
            cols="12"
            align="center"
          >
            <p class="text-justify">
              {{ description }}
            </p>
          </v-col>
        </slot>
      </v-row>
      <v-row>
        <v-divider />
      </v-row>
      <v-row>
        <slot name="footer">
          <v-col cols="12" align="right">
            <v-container fluid class="pa-0 fill-height">
              <v-row no-gutters justify="end" align="center">
                <v-btn
                  v-if="enableLinkButton"
                  color="primary"
                  depressed
                  rounded
                  @click="openLinkNewTab"
                >
                  {{ btnText }}
                </v-btn>
                <v-spacer v-if="enableLinkButton" />
                <v-avatar v-for="item in techIntoArray" :key="item" size="48" tile class="mr-1 my-2">
                  <img :id="`${item}-img`" :src="matchLogoByName(item).src" :alt="matchLogoByName(item).alt">
                </v-avatar>
              </v-row>
            </v-container>
          </v-col>
        </slot>
      </v-row>
    </v-container>
  </v-card>
</template>
<style scoped>

</style>
<script>
export default {
  name: 'ProjectCard',
  props: {
    technologies: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    btnText: {
      type: String,
      default: 'Visitar'
    },
    linkButton: {
      type: String,
      default: ''
    },
    imgSrc: {
      type: String,
      default: 'https://cdn.vuetifyjs.com/images/cards/server-room.jpg'
    }

  },
  data () {
    return {
      languagesLogos: [
        {
          name: 'laravel',
          src: '/laravel-mark-rgb-red.svg',
          alt: 'Laravel Logo'
        },
        {
          name: 'mariadb',
          src: '/mariadb.svg',
          alt: 'MariaDB Logo'
        },
        {
          name: 'nodejs',
          src: '/Nodejs_logo.svg',
          alt: 'Node.js Logo'
        },
        {
          name: 'gitlab',
          src: '/gitlab.svg',
          alt: 'GitLab Logo'
        },
        {
          name: 'csharp',
          src: '/csharp_logo.svg',
          alt: 'C# Logo'
        },
        {
          name: 'github',
          src: '/github.svg',
          alt: 'Github Logo'
        },
        {
          name: 'mssql',
          src: '/mssql.svg',
          alt: 'Microsoft Sql Server Logo'
        },
        {
          name: 'vuejs',
          src: '/vuejs.svg',
          alt: 'VueJs Logo'
        },
        {
          name: 'nologo',
          src: '',
          alt: 'No logo'
        }
      ]
    }
  },
  computed: {
    enableLinkButton () {
      return this.linkButton.length > 0
    },
    techIntoArray () {
      return this.technologies.length > 0 ? this.technologies.split(',') : []
    }
  },
  methods: {
    matchLogoByName (val) {
      let result = this.languagesLogos.find(item => item.name === val.trim())
      if (!result)
        return this.languagesLogos.find(item => item.name === 'nologo')
      return result
    },
    openLinkNewTab () {
      window.open(this.linkButton, '_blank')
    }
  }
}
</script>
