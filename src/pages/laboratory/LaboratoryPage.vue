<template>
  <q-page>
    <q-btn to="/" color="secondary" style="width:200px;">Home</q-btn>

    <div class="row q-mt-xl">
      <div v-for="(item, index) in getNews" class="col-12" :key="index">
        <LaboratoryNewsItemComponent :user="item.user" :title="item.title"/>
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import LaboratoryNewsItemComponent from 'src/components/LaboratoryNewsItemComponent';

export default {
  name: 'Laboratory',
  components: {
    LaboratoryNewsItemComponent
  },
  created() {
    this.selectNews();
  },
  computed: {
    ...mapGetters({
      getNews: 'news/getNews'
    })
  },
  methods: {
    ...mapActions({
      selectNews: 'news/selectNews'
    })
  }
};
</script>
<style scoped>
</style>
