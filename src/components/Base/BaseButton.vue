<template>
  <button class="button" @click="click">
    <slot></slot>
  </button>
</template>

<script setup>
const emit = defineEmits(["click"]);

const click = () => {
  emit("click");
};
</script>

<style lang="scss" scoped>
.button {
  color: white;
  font-size: inherit;
  padding: 5px 8px;
  border-radius: 5px;
  border: transparent;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  background: dodgerblue;

  &__main {
    width: 30%;
  }

  &:hover {
    background: linear-gradient(
      90deg,
      rgba(30, 144, 255, 1) 0%,
      rgba(0, 212, 255, 1) 100%
    );
  }
}
</style>
