import { ref } from 'vue'
export const catalogTab = ref('Все')
export function openCatalog(tab) { catalogTab.value = tab }
