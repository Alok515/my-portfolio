
import { defineStore } from "pinia";
import { ref } from "vue";

export const useUiStore = defineStore("ui", () => {
    const isMobileMenuOpen = ref(false);

    function toggleMobileMenu() {
        isMobileMenuOpen.value = !isMobileMenuOpen.value;
    }
    return { isMobileMenuOpen, toggleMobileMenu };
});