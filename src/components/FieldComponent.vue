<template>
    <article>
        <div>
            <label v-bind:for="data.id"></label>
            <input v-bind:type="data.type ? data.type : 'text'" 
            v-bind:placeholder="data.placeholder" 
            v-bind:class=" 'input' + data.class ? data.class: 'text'" />
        </div>
    </article>

</template>

<script lang="ts">

interface FieldComponentProperties {
    data: {
        id: string,
        placeholder: string,
        type?: string,
        class?: string
    }
}

defineProps<FieldComponentProperties>();

</script>