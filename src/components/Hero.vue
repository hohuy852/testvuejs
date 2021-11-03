<template>
  <div class="banner">
  </div>
</template>

<script>
export default {};
</script>

<style>
.banner {
  background-image: url("../assets/main-banner.png");
  background-size: cover;
  background-position: center;
  height: 1000px; width: 100%;
  background-repeat: no-repeat;
}
@media (min-width: 480px) {
    #background { height: 800px; }
}

@media (min-width: 768px) {
    #background { height: 750px; }
}

@media (min-width: 992px) {
    #background { height: 600px; }
}
</style>