<template>
  <div>
    <q-badge color="blue">{{user}}</q-badge><br />
    {{title}}<br />
  </div>
</template>

<script>
export default {
  name: 'LaboratoryNewsItemComponent',
  props: ['user', 'title']
}
</script>

<style scoped>

</style>
