<script context="module">
    import { Editor } from "bytemd";
    import "bytemd/dist/index.min.css";

    export const hydrate = true;
</script>

<script lang="ts">
    import { text } from "./store";
    function handleChange(e) {
        text.change(e.detail.value);
    }
</script>

<Editor value={$text} sanitize="" placeholder="" editorConfig="" locale="" uploadImages="" overridePreview={() => {}} on:change={handleChange} />
