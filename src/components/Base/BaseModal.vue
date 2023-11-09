<template>
  <div v-if="visibility" class="modal" @click="changeModalVisibility">
    <div class="modal__content" @click.stop>
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import changeModalVisibility from "@/helpers/modal-toggle";

const props = defineProps({
  visibility: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped>
.modal {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgb(0, 0, 0, 0.5);

  &__content {
    margin: auto;
  }
}
</style>
