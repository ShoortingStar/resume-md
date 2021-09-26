import { writable } from 'svelte/store'

const RESUME_TEXT: string = 'RESUME_TEXT'
function createText() {
    const { subscribe, set, update } = writable(localStorage.getItem(RESUME_TEXT) || '')
    return {
        subscribe,
        change: (text: string) => update(() => {
            localStorage.setItem(RESUME_TEXT, text)
            return text
        }),
        reset: () => set('')
    }
}
export const text = createText()