<template>
  <q-page class="flex flex-center">
    <img alt="Quasar logo" src="~assets/quasar-logo-full.svg">
    Quasar v{{ $q.version }} boilerplate

    <q-btn to="/laboratory"
           color="secondary"
           style="width:200px;">실험실</q-btn>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'PageIndex'
}
</script>
