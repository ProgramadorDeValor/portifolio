<template>
  <v-row>
    <v-card
      class="mx-auto"
      color="primary"
      dark
    >
      <v-card-title>
        <v-icon
          large
          left
        >
          mdi-account
        </v-icon>
        <span class="title font-weight-light">Quem sou eu ?</span>
      </v-card-title>

      <v-card-text class="headline font-weight-bold">
        {{ aboutMe }}
      </v-card-text>

      <v-card-actions>
        <v-list-item class="grow">
          <v-list-item-avatar color="white">
            <v-img
              class="elevation-6"
              alt=""
              src="https://avataaars.io/?accessoriesType=Prescription02&avatarStyle=Transparent&clotheType=BlazerSweater&eyeType=Happy&eyebrowType=Default&facialHairColor=Black&facialHairType=BeardLight&hairColor=Black&topType=ShortHairShortCurly"
            />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>Daniel Silva</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-card-actions>
    </v-card>
    <v-card style="width: 100%" outlined>
      <v-card-text>
        <div class="font-weight-bold ml-8 mb-2 title text-center">
          Experiências
        </div>
        <v-timeline
          align-top
          :dense="$vuetify.breakpoint.smAndDown"
        >
          <v-timeline-item
            v-for="(item, i) in experienceItems"
            :key="i"
            :color="item.color"
            :icon="item.icon"
            fill-dot
          >
            <v-card
              :color="item.color"
              dark
            >
              <v-card-title class="title">
                {{ item.title }}
              </v-card-title>
              <v-card-text class="white text--primary">
                <p>{{ item.description }}</p>
                <v-icon color="black">
                  mdi-laravel
                </v-icon>
              </v-card-text>
              <div class="d-flex py-2">
                <system-knowledge />
              </div>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-card-text>
    </v-card>
  </v-row>
</template>

<script>
import { SystemKnowledge } from '../components/SystemKnowledge'
export default {
  name: 'About',
  components: ['SystemKnowledge'],
  data () {
    return {
      aboutMe: '"Um desenvolvedor backend que adora discutir e desenvolver ideias e projetos novos. Meus pontos ' +
        'mais fortes estão em C# e Laravel e atualmente caminhando também no aprendizado de VueJS para aumentar minhas habilidades no frontend."',
      experienceItems: [
        {
          title: 'Analista de Sistemas III - Amcor - 2018 - Presente',
          icon: 'mdi-star',
          color: 'primary',
          description: 'Atuando em um time glogbal de desenvolvimento ' +
            'Workday - Integrações e Relatórios'
        },
        {
          title: 'Analista de Negócios - Bemis/Amcor - 2016 - 2018',
          icon: 'mdi-account',
          color: 'accent',
          description: 'ashudauhdshuauhduhahud'
        },
        {
          title: 'Estagiário Analista de Negócios - Bemis - 2014 - 2016',
          icon: 'mdi-account',
          color: 'accent',
          description: 'ashudauhdshuauhduhahud'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
