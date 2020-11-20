<template>
  <v-card flat class="pa-0">
    <v-img
      height="100%"
      src="/code-bkg.jpg"
    >
      <v-row
        align="center"
        justify="center"
        class="fill-height"
      >
        <v-col
          align-self="center"
          justify="center"
          class="pt-1 pb-1 text-center"
          cols="12"
        >
          <v-avatar
            class="profile"
            color="red"
            size="128"
          >
            <v-img src="daniel-avatar.jpg" />
          </v-avatar>
        </v-col>
        <v-col class="py-0 text-center">
          <v-list-item
            color="rgba(0, 0, 0, .4)"
            dark
          >
            <v-list-item-content>
              <v-list-item-title class="text-title pb-2">
                Daniel S F Silva
              </v-list-item-title>
              <v-list-item-subtitle class="text-body-1">
                Backend Developer
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-col>
      </v-row>
    </v-img>
  </v-card>
</template>
<style scoped>

</style>
<script>
export default {
  name: 'MenuAvatarCard'
}
</script>
