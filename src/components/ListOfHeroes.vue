<template>
  <div class="list_of_heroes">
    <div class="container">
      <h3>Lista bohaterów</h3>
      <br />
      <div class="row">
        <ul class="list-group">
          <li
            class="list-group-item"
            v-for="hero in $store.state.heroes"
            v-bind:key="hero.ID"
          >
            <h2>{{ hero.Name }}</h2>
            {{hero.Desc}}
            <p />
            <p align="left">
              <router-link
                :to="{ name: 'edit_hero', params: {id: hero.ID} }"
                class="btn btn-primary"
              >Edycja bohatera</router-link>
            </p>
            <p align="right">
              <button
                type="button"
                style="width:100px" 
                class="btn btn-outline-danger btn-sm"
                v-on:click="Usun(hero.ID)"
              >Usuń</button>
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  created () {
    // eslint-disable-next-line
    console.log("Created ListOfHeroes ");

    axios.get('http://localhost:8090/api/v1/heroes')
      .then(response => (this.$store.state.heroes = response.data))

    // eslint-disable-next-line
    console.log(this.$store.state.heroes);
},
  methods: {
    Usun: function(numer) {
      // eslint-disable-next-line
      console.log("Usunięto " + numer);

      axios.delete('http://localhost:8090/api/v1/heroes/' + numer)
        .then(response => (this.$store.state.heroes = response.data))
    }
  }
};
</script>

<style>
</style>
