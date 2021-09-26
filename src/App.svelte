<script context="module">
    import { Editor } from 'bytemd'
    import 'bytemd/dist/index.min.css'

    export const hydrate = true
</script>

<script lang="ts">
    let value
    function handleChange(e) {
        value = e.detail.value
    }
</script>

<Editor {value} on:change={handleChange} />
