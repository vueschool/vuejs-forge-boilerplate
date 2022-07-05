<script setup lang="ts">
import { toRefs, computed } from "vue";
const props = defineProps<{
  src: string;
}>();
const { src: image } = toRefs(props);

const appImageBaseURL = "https://cdn.filestackcontent.com/";

// functions for changing a url of image uploaded to 8base
// to point to twicpics instead
function toTwicPicsURL(url?: string) {
  if (!url) return "";
  return url.replace(appImageBaseURL, "image:");
}
function toTwicsPicBlurryImageUrl(url?: string) {
  if (!url) return "";
  if (url.startsWith("image:")) {
    return `${url}?twic=v1/output=preview`;
  }
  return url;
}

const attrs = computed(() => {
  if (image.value.startsWith("data:")) {
    return { src: image.value };
  }
  const twicPicImage = image.value.startsWith(appImageBaseURL)
    ? toTwicPicsURL(image.value)
    : image.value;

  return {
    "data-twic-src": twicPicImage,
    src: `${toTwicsPicBlurryImageUrl(image.value)}`,
  };
});
</script>

<template>
  <img
    class="app-image object-cover object-center inline-block"
    v-bind="attrs"
  />
</template>
