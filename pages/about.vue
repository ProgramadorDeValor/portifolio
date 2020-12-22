<template>
  <v-row>
    <v-card
      class="mx-2"
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

      <v-card-text class="headline font-weight-bold white--text">
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
        <v-timeline>
          <v-timeline-item
            v-for="(item, i) in experienceItems"
            :key="i"
            :color="item.color"
            :icon="item.icon"
            fill-dot
          >
            <template #opposite>
              <span
                :class="`headline font-weight-bold blue--text`"
                v-text="item.year"
              />
            </template>
            <v-card
              :color="item.color"
              dark
            >
              <v-card-title class="title">
                {{ item.title }}
              </v-card-title>
              <v-card-text v-if="item.description" class="pt-2">
                <p
                  v-for="(line,i) in item.description"
                  :key="i"
                  class="body-1 white--text"
                >
                  {{ line }}
                </p>
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
        <div class="font-weight-bold ml-8 mb-2 title text-center">
          Educação
        </div>
        <v-timeline>
          <v-timeline-item
            v-for="(item, i) in educationItems"
            :key="i"
            :color="item.color"
            :icon="item.icon"
            fill-dot
          >
            <template #opposite>
              <span
                :class="`headline font-weight-bold blue--text`"
                v-text="item.year"
              />
            </template>
            <v-card
              :color="item.color"
              dark
            >
              <v-card-title class="title">
                {{ item.title }}
              </v-card-title>
              <v-card-text v-if="item.description" class="pt-2">
                <p
                  v-for="(line,i) in item.description"
                  :key="i"
                  class="body-1 white--text"
                >
                  {{ line }}
                </p>
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-card-text>
    </v-card>
  </v-row>
</template>
<style scoped>

</style>
<script>
export default {
  name: 'About',
  data () {
    return {
      aboutMe: '"Um desenvolvedor backend que adora discutir e desenvolver ideias e projetos novos. Meus pontos ' +
        'mais fortes estão em C# e Laravel e atualmente caminhando também no aprendizado de VueJS para aumentar minhas habilidades no frontend."',
      experienceItems: [
        {
          title: 'Analista de Sistemas III - Amcor',
          icon: 'mdi-star',
          year: '2018 - Presente',
          color: 'primary',
          description: [
            'Atuando em um time glogbal de desenvolvimento. ',
            '- Workday relatórios e Integrações',
            '- Desenvolvimento e manutenção em C# e Vb.net para sistemas de Chão de Fábrica.']
        },
        {
          title: 'Analista de Negócios - Bemis/Amcor',
          year: '2016 - 2018',
          icon: 'mdi-account',
          color: 'primary',
          description: [
            '- Propor padrões, procedimentos e fornecer suporte técnico na identificação das alternativas e oportunidades de aplicações de Tecnologias de Informação para as áreas de RH.',
            '- Avaliação das evoluções de versões dos sistemas de RH identificando os impactos no modelo já implantado e o custo benefício dessas atualizações.',
            '- Participar das elaborações de "Business Case" de Projetos relacionados aos processos, gerando subsídios para decisões relativas à implementação.',
            '- Avaliar continuamente os Projetos relacionados à área de RH, aferindo os benefícios esperados e calculando os referidos retornos do capital empregado (ROI).',
            '- Participar de reuniões com fornecedores de soluções e áreas administrativas da empresa para prestar suporte e esclarecer o atendimento aos requerimentos definidos e o completo entendimento das necessidades de TI e negócio.',
            '- Promover o relacionamento externo com fornecedores para o perfeito atendimento das necessidade e estratégias da companhia.',
            '- Desenvolvimento de Correções e Melhorias para o Fatorhweb'
          ]
        },
        {
          title: 'Estagiário Analista de Negócios - Bemis',
          year: '2014 - 2016',
          icon: 'mdi-account',
          color: 'primary'
        }
      ],
      educationItems: [
        {
          title: 'USP/ESALQ - MBA - Gestão de Negócios',
          icon: 'mdi-briefcase',
          year: '2019 - 2021',
          color: 'primary'
        },
        {
          title: 'IFSP - Análise e Desenvolvimento de Sistemas',
          year: '2013 - 2016',
          icon: 'mdi-glasses',
          color: 'green'
        },
        {
          title: 'SENAI - Técnico em eletrônica',
          year: '2011 - 2012',
          icon: 'mdi-memory',
          color: 'red',
          description: [
            'Ênfase em automação']
        }
      ]
    }
  }
}
</script>
