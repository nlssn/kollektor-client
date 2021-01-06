<template>
  <div class="home">
    <h1>Kollektor - Din skivsamling online!</h1>
    <p>
      Med Kollektor kan du lägga till skivor du äger eller som du planerar att köpa.<br/>
      Det är ett enkelt sätt att hålla ordning på din samling - var du än befinner dig.
    </p>
    <p>
      <router-link to="/add" class="btn">Lägg till en skiva</router-link>
      <router-link to="/collection" class="btn ghost">Kolla in samlingen</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
  .home {
    text-align: center;
  }
</style>
