<template>
  <div class="container">
    <BaseButton class="button__main" @click="changeModalVisibility">
      Добавить сотрудника
    </BaseButton>
    <BaseModal :visibility="store.isModalVisible">
      <EployeeForm />
    </BaseModal>
    <table v-if="store.employees.length > 0" class="table">
      <tr>
        <th class="table__th">Имя</th>
        <th class="table__th">Фамилия</th>
        <th class="table__th">Стаж</th>
        <th class="table__th">Возраст</th>
        <th class="table__th">Адрес</th>
      </tr>
      <tr
        v-for="employee in store.employees"
        :key="employee.id"
        class="table__tr"
        @click="store.startEditEmployee(employee)"
      >
        <td class="table__td">{{ employee.name }}</td>
        <td class="table__td">{{ employee.surname }}</td>
        <td class="table__td">{{ employee.experience }}</td>
        <td class="table__td">{{ employee.age }}</td>
        <td class="table__td">{{ employee.location }}</td>
      </tr>
    </table>
    <p v-else>Добавьте первого сотрудника</p>
  </div>
</template>

<script setup>
import BaseButton from "@/components/Base/BaseButton";
import BaseModal from "@/components/Base/BaseModal";
import EployeeForm from "@/components/EployeeForm";
import changeModalVisibility from "@/helpers/modal-toggle.js";
import { useStore } from "@/store";

const store = useStore();
</script>

<style lang="scss" scoped>
.container {
  margin: auto;
  padding-top: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  max-width: 1200px;
  width: 100%;
}

.table {
  width: 100%;
  margin-bottom: 20px;
  border: 15px solid #f2f8f8;
  border-top: 5px solid #f2f8f8;
  border-collapse: collapse;
  text-align: center;

  &__th {
    font-weight: bold;
    padding: 5px;
    background: #f2f8f8;
    border: none;
    border-bottom: 5px solid #f2f8f8;
  }
  &__td {
    padding: 5px;
    border: none;
    border-bottom: 5px solid #f2f8f8;
  }

  &__tr {
    &:hover {
      background-color: rgb(203, 203, 203);
    }
  }
}
</style>
