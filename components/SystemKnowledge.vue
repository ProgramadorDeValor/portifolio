<template>
  <v-card
    class="mx-auto"
    max-width="300"
    :color="cardColor"
    outlined
    flat
  >
    <v-container>
      <v-row>
        <v-list
          three-line
          color="transparent"
        >
          <v-list-item>
            <v-list-item-avatar :color="avatarColor">
              <slot name="avatar">
                <span class="white--text headline">{{ avatarLetter }}</span>
              </slot>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="mb-1 body-1" style="max-width: 300px">
                <div :class="`${textColor}--text`">
                  {{ title }}
                </div>
              </v-list-item-title>
              <v-list-item-subtitle>
                <v-row>
                  <v-col cols="12">
                    <div
                      :class="`text-body-2 mx-auto ${textColor}--text`"
                    >
                      {{ levelLabel }}: {{ level }}
                    </div>
                  </v-col>
                </v-row>
                <v-row dense no-gutters>
                  <v-col cols="3" class="mx-1">
                    <v-progress-linear :value="bar1Calc" :color="progressBarColor" />
                  </v-col>
                  <v-col cols="3" class="mx-1">
                    <v-progress-linear :value="bar2Calc" :color="progressBarColor" />
                  </v-col>
                  <v-col cols="3" class="mx-1">
                    <v-progress-linear :value="bar3Calc" :color="progressBarColor" />
                  </v-col>
                </v-row>
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-row>
      <v-row class="mx-auto">
        <v-expansion-panels accordion hover>
          <v-expansion-panel>
            <v-expansion-panel-header
              :color="descriptionTitleColor"
              ripple
              expand-icon="mdi-plus"
            >
              <div class="subtitle-1">
                {{ descriptionTitle }}
              </div>
            </v-expansion-panel-header>
            <v-expansion-panel-content color="primary" eager>
              <div class="body-2 pt-2">
                {{ description }}
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>
    </v-container>
  </v-card>
</template>
<style scoped>
</style>
<script>
export default {
  name: 'SystemKnowledge',
  props: {
    cardColor: {
      type: String,
      default: 'accent'
    },
    avatarColor: {
      type: String,
      default: 'black'
    },
    avatarLetter: {
      type: String,
      default: 'E'
    },
    title: {
      type: String,
      default: 'Example'
    },
    level: {
      type: String,
      default: 'Iniciante'
    },
    descriptionTitle: {
      type: String,
      default: 'Detalhes'
    },
    descriptionTitleColor: {
      type: String,
      default: 'blue'
    },
    description: {
      type: String,
      default: 'description'
    },
    descriptionColor: {
      type: String,
      default: 'blue'
    },
    textColor: {
      type: String,
      default: 'white'
    },
    progressBarColor: {
      type: String,
      default: 'green'
    },
    barValue: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      levelLabel: 'Nível'
    }
  },
  computed: {
    bar1Calc () {
      if (this.barValue < 1)
        return 0
      if (this.barValue >= 33) return 100

      return (this.barValue / 33) * 100
    },
    bar2Calc () {
      if (this.barValue < 33)
        return 0
      if (this.barValue >= 66) return 100

      return ((this.barValue / 33) - 1) * 100
    },
    bar3Calc () {
      if (this.barValue < 66)
        return 0
      if (this.barValue >= 100) return 100

      return ((this.barValue / 33) - 2) * 100
    }
  }
}
</script>
