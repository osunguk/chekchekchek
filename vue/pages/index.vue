<template>
  <section>
    <h1 class="header">Nuxt TypeScript Starter</h1>
    <ul>
      <li><nuxt-link :to="{ name: 'bestSeller' }">베스트셀러</nuxt-link></li>
      <li><nuxt-link :to="{ name: 'recommend' }">추천</nuxt-link></li>
      <li><nuxt-link :to="{ name: 'newBook' }">신간</nuxt-link></li>
    </ul>
    <div class="cards">
      <Card
        v-for="person in people"
        :key="person.id"
        :person="person"
      ></Card>
    </div>
  </section>
</template>

<script lang="ts">
import {
  Component,
  Vue
} from "nuxt-property-decorator"
import { State } from "vuex-class"
import { Person } from "~/types";
import Card from "~/components/Card.vue"

@Component({
  components: {
    Card
  }
})
export default class extends Vue {
  @State people!: Person[]
}
</script>

<style scoped>
.header {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.cards {
  display: flex;
  flex-wrap: wrap;
}
</style>
