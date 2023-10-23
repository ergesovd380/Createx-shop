<template>
  <input 
    type="text"
    class="input base base__small"
  >
</template>

<style scoped lang="scss">
  .input {
    padding: 11px 0 12px 16px;
    border-radius: 4px;
    border: 1px solid var(--gray-400);
    background-color: var(--white);
    color: var(--gray-900);

    &:focus {
      outline: 1px solid var(--primary);
    }
  }
</style>
