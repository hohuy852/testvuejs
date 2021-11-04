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
  background-size: 100% 100%;
  background-position: center;
  height: 1000px; width: 100%;
  background-repeat: no-repeat;
}
@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
/* Styles */
.banner{
   height: 350px; width: 100%;
}
}
</style>