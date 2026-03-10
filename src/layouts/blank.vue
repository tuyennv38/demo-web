<template>
  <div class="blank-layout">
    <slot />
  </div>
</template>

<style scoped>
.blank-layout {
  min-height: 100vh;
  background-color: var(--bg-color);
  background-image: 
    radial-gradient(at 40% 20%, hsla(253, 100%, 94%, 1) 0px, transparent 50%),
    radial-gradient(at 80% 0%, hsla(330, 93%, 94%, 1) 0px, transparent 50%),
    radial-gradient(at 0% 50%, hsla(210, 100%, 95%, 1) 0px, transparent 50%);
  background-attachment: fixed;
}
</style>
