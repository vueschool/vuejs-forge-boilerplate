<script setup lang="ts">
import { Button as KButton } from "@progress/kendo-vue-buttons";
</script>
<template>
  <KButton v-bind="$attrs">
    <slot></slot>
  </KButton>
</template>
