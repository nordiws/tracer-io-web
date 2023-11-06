import { defineStore } from "pinia"
import { ref } from "vue"

export const useNavHeaderStore = defineStore('navHeader', () => {
    const active = ref(true)
    const title = ref("Home Page")
    function updateTitle(newTitle: string): void {
        title.value = newTitle
    }
    return { active, title, updateTitle }
})