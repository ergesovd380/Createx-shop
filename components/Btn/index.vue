<template>
  <button class="btn__flat">
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
.btn {

&__flat {
  background-color: var(--primary);
  color: var(--white);
  border-radius: 4px;
}

&__navigation {
  padding: 0 24px;
  height: 36px;

  &-icon{
    margin-left: 10px;
  }
}
}
</style>