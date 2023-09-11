<template>
  <input 
    type="text"
    class="input"
  >
</template>

<style scoped lang="scss">
  .input {
    background-color: var(--white);

    &:focus {
      border: 1px solid var(--success);
    }
  }
</style>
