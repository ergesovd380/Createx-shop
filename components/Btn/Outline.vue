<template>
  <button 
    class="btn__outline"
  >
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
.btn {

  &__outline {
    background-color: transparent;
    color: var(--primary);
    border: 1px solid var(--primary);
    border-radius: 4px;

    &:hover {
      background-color: var(--primary);
      color: var(--white);
    }
  }
}
</style>
