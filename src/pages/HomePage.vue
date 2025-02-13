<template>
    <main>
        <h1>Hello {{ username }} !!!</h1>
    </main>
</template>

<script setup lang="ts">
    const username = "Jules Dupont";
</script>

<style>
h1{
    color: red;
}
</style>