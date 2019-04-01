<template>
  <q-layout view="lHh Lpr lFf">
    <Header/>

    <Drawer />

    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>
import Header from './partial/Header'
import Drawer from './partial/Drawer'
import { openURL } from 'quasar'

export default {
  name: 'AppLayout',
  components: { Drawer, Header },
  methods: {
    openURL
  }
}
</script>

<style>
</style>
