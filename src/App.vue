<template>
  <div id="app">
    <HeadNav/>
    <div class="page-content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import HeadNav from '@/components/HeadNav';

export default {
  name: 'App',
  components: {
    HeadNav
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #f2f2f2;
  color: #333333;
  font-size: 17px;
  font-size: 1em;
  font-weight: 300;
  line-height: 1.5;
}

p {
  margin-bottom: 1em;
}

h1 {
  font-size: 2.5em;
  margin-bottom: .25em;
  font-weight: 900;
}

ul {
  margin-left: 2.5em;
}

a {
  color: inherit;
}

.form-group {
  width: 100%;
  margin-bottom: .5em;
}

label {
  font-weight: 500;
  width: 100%;
  display: inline-block;
}

.page-content {
  max-width: 700px;
  margin: 0 auto;
  margin-top: 2em;
}

.btn {
  background-color: #d49a2c;
  padding: .75em 1.05em;
  text-decoration: none;
  border-radius: .25rem;
  border: 2px solid #d49a2c;
  margin: .25em;
  display: inline-block;
  color: #fff;
  cursor: pointer;
  font-size: .9em;
}

.btn:hover {
  background-color: #e9b556;
  transition: ease-in-out .3s;
}

.ghost {
  background-color: transparent;
  border: 2px solid #ccc;
  color: #474747; 
}

.ghost:hover {
  background-color: #ffffff;
  color: #111111;
  border: 2px solid #474747;
  
}

.del {
  
  background-color: #e04f4f;
  border: 2px solid #e04f4f;
}

.del:hover {
  background-color: #f79191;
}
</style>
