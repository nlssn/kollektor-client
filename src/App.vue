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
  font-size: 15px;
  font-weight: 300;
  line-height: 1.5;
}

p {
  margin-bottom: 1em;
}

h1 {
  font-size: 2em;
  margin-bottom: .25em;
  font-weight: 900;
}

h2 {
  font-size: 1.9em;
  font-weight: 900;
  margin-bottom: .25em;
}

h3 {
  font-size: 1.2em;
  font-weight: 900;
  margin-bottom: .25em;
}

h4 {
  font-weight: 500;
  margin-bottom: .25em;
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

input[type="text"] {
  border: 1px solid #cccccc;
  padding: .5em .75em;
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  font-weight: 300;
}

.page-content {
  margin: 0 auto;
  padding: 2em 5%;
}

.btn {
  background-color: #d49a2c;
  padding: .75em 1.05em;
  text-decoration: none;
  border-radius: .25rem;
  border: 2px solid #d49a2c;
  margin: .25em;
  display: inline-block;
  color: #f2f2f2;
  cursor: pointer;
  font-size: .9em;
}

.btn:hover {
  background-color: #e9b556;
  transition: ease-in-out .3s;
}

.ghost {
  background-color: transparent;
  border: 2px solid #cccccc;
  color: #474747; 
}

.ghost:hover {
  background-color: #dddddd;
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

.record-cover {
  width: 100%;
  height: auto;
  cursor: pointer;
  box-shadow: 0 0 5px #cccccc;
}

@media only screen and (min-width: 768px) {
  body {
    font-size: 16px;
  }

  .page-content {
    max-width: 900px;
    margin: 0 auto;
  }
}

@media only screen and (min-width: 1200px) {
  body {
    font-size: 18px;
  }

  .page-content {
    max-width: 1000px;
  }
}
</style>
