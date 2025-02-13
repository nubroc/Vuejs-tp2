<template>
    <button :class="'button ' + (data.class ? data.class : '')">
        {{ data.label }}
    </button>
</template>

<script setup lang="ts">
interface ButtonComponentProperties {
    data: {
        label: string;
        class?: string;
    };
}

defineProps<ButtonComponentProperties>();
</script>