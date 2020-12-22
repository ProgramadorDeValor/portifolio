<template>
  <v-row class="justify-sm-center justify-md-start">
    <v-col
      v-for="project in projects"
      :key="project.id"
      cols="12"
      sm="8"
      md="6"
    >
      <project-card
        :title="project.title"
        :description="project.description"
        :technologies="project.technologies"
        :link-button="project.linkButton ? project.linkButton : ''"
        :img-src="project.imgSrc"
      />
    </v-col>
  </v-row>
</template>

<script>
import ProjectCard from '@/components/Project/ProjectCard'
export default {
  components: {
    ProjectCard
  },
  data () {
    return {
      projects: [
        {
          id: 1,
          title: 'Tamarindo Soluçôes',
          description: 'Um sistema para dar maior inteligência e controle à restaurantes de pequeno em médio porte.',
          technologies: 'vuejs,laravel,mariadb,gitlab',
          linkButton: 'https://tamarindosolucoes.com.br',
          imgSrc: 'https://tamarindosolucoes.com.br/img/head/hand-holding-a-smartphone-mock-up_1022-1824.png'
        },
        {
          id: 2,
          title: 'Yotube Hunter',
          description: 'Um Pequeno Site de Exercício que Busca Informação de Videos do Youtube',
          technologies: 'vuejs,github',
          linkButton: 'https://github.com/ProgramadorDeValor/teste-front-end'
        },
        {
          id: 3,
          title: 'TrayIcon App',
          description: 'Um pequeno app em C# usando windows forms que inicializa diretamente como um TrayIcon.',
          technologies: 'csharp,github',
          linkButton: 'https://github.com/ProgramadorDeValor/TrayIconExampleCsharp'
        },
        {
          id: 4,
          title: 'Molezinha',
          description: 'Um pacote que implementa a Lógica do Porto (Software Architectural Pattern), sem modificar o core' +
            ' do Laravel, podendo ser usado em concomitante com a estrutura original',
          technologies: 'laravel,github',
          linkButton: 'https://github.com/ProgramadorDeValor/molezinha-porto-laravel'
        }
      ]
    }
  }
}
</script>
