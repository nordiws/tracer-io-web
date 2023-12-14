import { defineStore } from "pinia"
import { ref } from "vue"

export const useMenuDrawerStore = defineStore('menuDrawer', () => {
    const active = ref(false)
    const title = ref('')
    function open() {
        active.value = true
    }
    return { active, title, open, close }
})