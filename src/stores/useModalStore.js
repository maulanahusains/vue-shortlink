import { defineStore } from "pinia";

const basicStates = { component: null, props: {} };

export default defineStore('modal-store', {
  state: () => ({ modalState:  basicStates }),
  actions: {
    openModal(payload) {
      const { props, component } = payload;
      this.modalState = { component, props: props || {} };
    },
    closeModal() {
      this.modalState = basicStates;
    }
  },
  getters: {}
});