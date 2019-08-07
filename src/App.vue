<template>
  <div id="app" class="container">
    <h1 align="center">Vue Heroes App</h1>
    <center>
    <img alt="Vue logo" src="./assets/logo.png" />
    </center>

    <div>
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Lista bohaterów</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'new_hero' }" class="nav-link">Dodaj bohatera</router-link>
        </li>
      </ul>
    </div>
    <br />
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
