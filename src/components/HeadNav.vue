<template>
  <header class="site-header">
      <p class="site-title"><router-link to="/">Kollektor</router-link></p>
      <nav class="nav-primary">
        <ul>
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
  background-color: #111111;
  display: grid;
  grid-template-columns: 1fr;
}

.site-title {
  color: #f2f2f2;
  margin: .5em;
  text-align: center;
}

.site-title a {
  font-size: 1.5em;
  font-weight: 500;
  text-decoration: none;
}

.nav-primary ul {
  list-style: none;
  display: grid;
  text-align: center;
  margin-left: 0;
}

.nav-primary ul li a {
  background-color: #cccccc;
  border-bottom: 1px solid #b9b9b9;
  text-decoration: none;
  display: block;
  padding: .75em 0;
}

.nav-primary ul li:last-of-type a {
  border-bottom: none;
}

.nav-primary ul li a.router-link-exact-active {
  background-color: #dddddd;
  text-decoration: underline;
  color: #111111;
}

@media only screen and (min-width: 768px) {
  .site-header {
    padding: 1em 5%;
    grid-template-columns: 1fr auto;
    align-items: center;
  }

  .site-title {
    margin-bottom: 0;
    text-align: left;
  }

  .nav-primary ul {
    grid-auto-flow: column;
  }

  .nav-primary ul li a {
    background-color: transparent;
    border-bottom: none;
    color: #bdbdbd;
    display: inline-block;
  }

  .nav-primary ul li a.router-link-exact-active {
    background-color: transparent;
    color: #f2f2f2;
  }

  .nav-primary ul li:after {
    content: '/';
    color: #474747;
    padding: 0 .5em;
  }

    .nav-primary ul li:last-of-type:after {
    content: '';
  }
}

@media only screen and (min-width: 1200px) {
  .site-header {
    padding: 1em 10%;
  }
}
</style>