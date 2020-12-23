<template>
  <v-row>
    <v-col cols="12">
      <v-card outlined>
        <v-card-title class="title">
          Curriculo
        </v-card-title>
        <v-row justify="center">
          <v-col
            sm="6"
            align="center"
          >
            <v-btn
              dark
              depressed
              color="green"
              @click="openLinkNewTab(portugueseUrl)"
            >
              Português
            </v-btn>
          </v-col>
          <v-col
            v-show="false"
            sm="6"
            align="center"
          >
            <v-btn
              dark
              depressed
              color="red"
              @click="openLinkNewTab(englishUrl)"
            >
              Inglês
            </v-btn>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
    <v-col cols="12">
      <v-card outlined>
        <v-card-title class="title">
          Contato
        </v-card-title>
        <v-row justify="center">
          <v-col cols="4" align="right">
            <v-btn
              fab
              color="blue"
              depressed
              @click="openLinkNewTab(linkedinUrl)"
            >
              <v-icon color="white">
                mdi-linkedin
              </v-icon>
            </v-btn>
          </v-col>
          <v-col cols="4" align="left">
            <v-btn
              fab
              color="black"
              depressed
              @click="openLinkNewTab(githubUrl)"
            >
              <v-icon color="white">
                mdi-github
              </v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>
<style scoped>

</style>
<script>
export default {
  name: 'Resume',
  data () {
    return {
      portugueseUrl: '/resumes/daniel-portugues.pdf',
      englishUrl: '',
      linkedinUrl: 'https://www.linkedin.com/in/daniel-s-f-silva-2527a845/',
      githubUrl: 'https://github.com/ProgramadorDeValor'
    }
  },
  methods: {
    openLinkNewTab (url) {
      window.open(url, '_blank')
    }
  }
}
</script>
