<template>
  <main>
    <!-- https://image.nuxtjs.org/components/nuxt-picture -->
    <!-- https://image.nuxtjs.org/components/nuxt-img -->
    <figure>
      <nuxt-img
        provider="imageengine"
        src="/images/mountains.jpg"
        width="3750"
        height="2500"
        sizes="xs:200px md:500px lg:1024"
      />
    </figure>
  </main>
</template>

<script>
export default {};
</script>

<style scoped>
</style>
