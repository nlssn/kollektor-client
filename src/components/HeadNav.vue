<template>
  <header class="site-header">
      <p class="site-title"><router-link to="/">Kollektor</router-link></p>
      <nav class="nav-primary">
        <ul>
          <li><router-link to="/">Hem</router-link></li>
          <li><router-link to="/about">Om</router-link></li>
          <li><router-link to="/collection">Samling</router-link></li>
          <li><router-link to="/add">Lägg till</router-link></li>
        </ul>
      </nav>
    </header>
</template>

<script>
export default {
  name: 'HeadNav'
}
</script>

<style scoped>
.site-header {
  padding: 1em 5%;
  background-color: #111111;
  color: #cccccc;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
}

.site-title {
  margin-bottom: 0;
}

.site-title a {
  font-size: 1.75em;
  font-weight: 500;
  text-decoration: none;
  color: #cccccc;
}

.nav-primary ul {
  list-style: none;
  display: grid;
  grid-auto-flow: column;
}

.nav-primary ul li:after {
  content: '/';
  color: #474747;
}

.nav-primary ul li:last-child:after {
  content: '';
}

.nav-primary a {
  text-decoration: none;
  padding: .5em .75em;
}

.nav-primary a.router-link-exact-active {
  text-decoration: underline;
  color: #ffffff;
}
</style>