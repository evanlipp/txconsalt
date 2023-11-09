// переключатель видимости модального окна
import { useStore } from "@/store";

const store = useStore();

const changeModalVisibility = () => {
  store.setModalVisibility();
};

export default changeModalVisibility;
