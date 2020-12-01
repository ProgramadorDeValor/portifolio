<template>
  <v-card
    class="mx-auto"
    max-width="250"
    color="accent"
    outlined
  >
    <v-row>
      <v-list-item three-line>
        <v-list-item-avatar color="black">
          <span class="white--text headline">W</span>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="headline-6 mb-1">
            WORKDAY®
          </v-list-item-title>
          <v-list-item-subtitle>
            <v-row>
              <v-col cols="12">
                <div class="text-body-1 mx-auto">
                  Nível: Intermediário
                </div>
              </v-col>
            </v-row>
            <v-row dense no-gutters>
              <v-col cols="3" class="mx-1">
                <v-progress-linear value="100" color="green" />
              </v-col>
              <v-col cols="3" class="mx-1">
                <v-progress-linear value="100" color="green" />
              </v-col>
              <v-col cols="3" class="mx-1">
                <v-progress-linear value="0" color="green" />
              </v-col>
            </v-row>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-row>
    <v-row class="mx-auto">
      <v-expansion-panels accordion hover>
        <v-expansion-panel>
          <v-expansion-panel-header>Detalhes</v-expansion-panel-header>
          <v-expansion-panel-content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
  </v-card>
</template>
<style scoped>

</style>
<script>
export default {
  name: 'SystemKnowledge'
}
</script>
