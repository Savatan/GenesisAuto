import { ref } from 'vue'
export const leadOpen = ref(false)
export function openLead() { leadOpen.value = true }
export function closeLead() { leadOpen.value = false }