import { defineStore } from "pinia";
import { ref } from "vue";
import changeModalVisibility from "@/helpers/modal-toggle.js";

export const useStore = defineStore("store", () => {
  const isModalVisible = ref(false);

  const setModalVisibility = () => {
    isModalVisible.value = !isModalVisible.value;
    if (isModalVisible.value === false) {
      employee.value = {
        id: "",
        name: "",
        surname: "",
        experience: "",
        age: "",
        location: "",
      };
    }
  };

  const employees = ref([]);

  const employee = ref({
    id: "",
    name: "",
    surname: "",
    experience: "",
    age: "",
    location: "",
  });

  const startEditEmployee = (value) => {
    employee.value = value;
    changeModalVisibility();
  };

  const saveEmployee = (value) => {
    if (value.id) {
      replaceEmployee(value);
    } else {
      value.id = Date.now();
      addEmployee(value);
    }
    changeModalVisibility();
  };

  const deleteEmployee = (value) => {
    employees.value = employees.value.filter(
      (employee) => employee.id !== value.id
    );
    changeModalVisibility();
  };

  const addEmployee = (value) => {
    employees.value.push(value);
  };

  const replaceEmployee = (value) => {
    const index = employees.value.findIndex(
      (employee) => employee.id === value.id
    );
    employees.value[index] = value;
  };

  return {
    isModalVisible,
    setModalVisibility,
    startEditEmployee,
    saveEmployee,
    deleteEmployee,
    employee,
    employees,
  };
});
