<template>
  <v-row class="justify-sm-center justify-md-start">
    <v-col cols="12">
      <about id="about" />
    </v-col>
    <v-col cols="12">
      <project id="project" />
    </v-col>
    <v-col cols="12">
      <skills id="skills" />
    </v-col>
    <v-col cols="12">
      <resume id="resume" />
    </v-col>
  </v-row>
</template>
<style scoped>

</style>
<script>
import About from '@/pages/about'
import Project from '@/pages/project'
import Resume from '@/pages/resume'
import Skills from '@/pages/skills'
export default {
  name: 'Index',
  components: {
    About,
    Project,
    Resume,
    Skills
  }
}
</script>
