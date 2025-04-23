<script setup lang="ts">
// const typewriterTexts = ref([
//   'Create a love song about how beautiful you are.',
//   'Create a hiphop song about how to work hard',
//   'Create a summer song about an amazing day at the beach',
// ]);
//
// const loopTypewriterText = () => {
//
// }
</script>

<template>
<div :class="$style.page">
  <div :class="$style['page-topbar']">
    <img src="~/assets/images/logo.svg" alt="Logo" :class="$style['logo']" >

    <div :class="$style['page-action-buttons']">
      <Button label="Sign In" variant="outlined" size="large" style="margin-inline: 0.625rem" />
      <Button label="Sign Up" size="large" />
    </div>
  </div>

  <!-- page content -->
  <div :class="$style['page-content']">
    <div :class="$style['typewriter']">
      <h1>Create a love song about how beautiful you are.</h1>
      <p>Start with a simple prompt or dive into our pro editing tools, your next track is just a step away.</p>
    </div>

    <div :class="$style['page-prompt']">
      <UnsignedMusicSelector />
    </div>
  </div>
</div>
</template>

<style lang="scss" module scoped>
$topbar-height: 4.875rem;

.page {
  width: 100%;
  height: 100%;
  display: block;
  margin: 0;
  padding: 0;
  //overflow: hidden;
}

.page-topbar {
  height: $topbar-height;
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.625rem 1rem;
}

.logo {
  width: auto;
  height: 50px;
}

.page-content {
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 0.625rem 1rem;
}

.typewriter {
  max-width: 54.688rem;
  height: auto;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  h1 {
    height: auto;
    overflow: hidden; /* Ensures the content is not revealed until the animation */
    margin: 0 auto; /* Gives that scrolling effect as the typing happens */
    //letter-spacing: .15em; /* Adjust as needed */
    //animation: typing 3.5s steps(40, end) infinite;
    font-size: 3.5rem;
    text-align: center
  }

  p {
    max-width: 34.688rem;
    font-size: 1rem;
    text-align: center;
    margin-block-start: 4rem;
  }
}

.page-prompt {
  width: 100%;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  margin-block-start: 4rem;
}

/* The typing effect */
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: orange; }
}
</style>