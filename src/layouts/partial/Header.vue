<template>
  <q-header elevated class="glossy">
    <q-toolbar>
      <q-btn
        flat
        dense
        round
        @click="SET_IS_DRAWER_OPEN(!getIsDrawerOpen)"
        aria-label="Menu"
      >
        <q-icon name="menu" />
      </q-btn>

      <q-toolbar-title>
        Quasar Boilerplate
      </q-toolbar-title>

      <div>Quasar v{{ $q.version }}</div>
    </q-toolbar>
  </q-header>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
import { openURL } from 'quasar'

export default {
  name: 'Header',
  computed: {
    ...mapGetters({
      getIsDrawerOpen: 'layout/getIsDrawerOpen'
    })
  },
  methods: {
    openURL,
    ...mapMutations({
      SET_IS_DRAWER_OPEN: 'layout/SET_IS_DRAWER_OPEN'
    })
  }
}
</script>

<style scoped>

</style>
