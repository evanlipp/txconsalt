<template>
  <div class="form">
    <div class="form__inputs-wrapper">
      <BaseInput v-model="employee.name" placeholder="Имя" />
      <BaseInput v-model="employee.surname" placeholder="Фамилия" />
    </div>
    <div class="form__inputs-wrapper">
      <BaseInput v-model="employee.experience" placeholder="Стаж" />
      <BaseInput v-model="employee.age" placeholder="Возраст" />
    </div>
    <BaseInput v-model="employee.location" placeholder="Адрес" />
    <div class="form__inputs-wrapper">
      <BaseButton @click="store.saveEmployee(employee)">Сохранить</BaseButton>
      <BaseButton @click="changeModalVisibility">Отмена</BaseButton>
      <BaseButton
        v-if="employee.id !== ''"
        @click="store.deleteEmployee(employee)"
      >
        Удалить
      </BaseButton>
    </div>
  </div>
</template>

<script setup>
import BaseButton from "@/components/Base/BaseButton";
import BaseInput from "@/components/Base/BaseInput";
import changeModalVisibility from "@/helpers/modal-toggle.js";
import { useStore } from "@/store";

const store = useStore();
const employee = JSON.parse(JSON.stringify(store.employee));
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
  width: 100%;
  border-radius: 5px;
  background-color: white;

  &__inputs-wrapper {
    display: flex;
    justify-content: center;
    gap: 20px;
  }
}
</style>
