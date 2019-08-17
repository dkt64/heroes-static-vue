<template>
  <div class="single_hero">
    <h3 v-if="$route.name == 'new_hero'">Edycja nowego bohatera</h3>
    <h3
      v-else
    >Edycja bohatera {{ $store.state.heroes[this.index].Name }}</h3>
    <br />

    <div class="form-group">
      <label>Nazwa bohatera</label>
      <input class="form-control" v-model="$store.state.hero.Name" v-on:keyup.enter="Zapis" />
    </div>

    <div class="form-group">
      <label>Opis bohatera</label>
      <input class="form-control" v-model="$store.state.hero.Desc" v-on:keyup.enter="Zapis" />
    </div>
    <p align="right">
      <button
        type="button"
        style="margin-left: 20px; width:100px"
        class="btn btn-secondary"
        v-on:click="Anuluj"
      >Anuluj</button>
      <button
        type="button"
        style="margin-left: 20px; width:100px"
        class="btn btn-success"
        v-on:click="Zapis"
      >Zapis</button>
    </p>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  data() {
    return {
        index: 0
    };
  },
  created() {
      if (this.$route.name == "new_hero") {
        this.index = 0
        this.$store.state.hero.ID = 0
        this.$store.state.hero.Name = ""
        this.$store.state.hero.Desc = ""
      // eslint-disable-next-line
      console.log("Created new hero");
      } else {
        this.index = this.$store.state.heroes.findIndex(x => x.ID === this.$route.params.id);
        this.$store.state.hero.ID = this.$store.state.heroes[this.index].ID;
        this.$store.state.hero.Name = this.$store.state.heroes[this.index].Name;
        this.$store.state.hero.Desc = this.$store.state.heroes[this.index].Desc;
      // eslint-disable-next-line
      console.log("Edit of hero " + this.index + " " + this.$store.state.hero.Name);
      }

},
  methods: {
    Anuluj: function() {
      history.back();
    },
    Zapis: function() {
      if (this.$route.name == "new_hero") {

        axios.post('http://localhost:8090/api/v1/heroes', this.$store.state.hero)
          .then(response => (this.$store.state.heroes = response.data))

        // eslint-disable-next-line
        console.log("Zapis nowego " + this.$store.state.hero.Name);

      } else {

        axios.put('http://localhost:8090/api/v1/heroes/' + this.$store.state.hero.ID, this.$store.state.hero)
        
        // eslint-disable-next-line
        console.log("Zapis starego " + this.$store.state.hero.ID);

      }

      history.back();
    }
  }
};
</script>

<style>
</style>
