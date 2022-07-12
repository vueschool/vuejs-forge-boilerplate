<script setup lang="ts">
import { useDropZone, useBase64 } from "@vueuse/core";
import { ref, computed } from "vue";
import use8baseStorage from "@/composables/use8baseStorage";

const props = defineProps<{
  placeholder?: string;
  image: string;
  loading?: boolean;
}>();

const emit = defineEmits<{
  (e: "upload", payload: { id: string }): void;
}>();

// data
const image = ref<string | File>(props.image);
const dropZoneRef = ref(null);

//@ts-expect-error is checked in src for string type
const { base64 } = useBase64(image);
const uploadingToFilestack = ref(false);
const src = computed(() =>
  typeof image.value === "string" ? image.value : base64.value
);

// functions
function onFileSelect(e: Event) {
  handleFiles((e.target as HTMLInputElement).files);
}

function onDrop(files: File[] | null) {
  handleFiles(files);
}

const { uploadAsset } = use8baseStorage();
async function handleFiles(files: FileList | File[] | null) {
  if (!files) return;
  image.value = files[0];

  uploadingToFilestack.value = true;
  const res = await uploadAsset(files[0]);
  emit("upload", res?.data.fileCreate);
  uploadingToFilestack.value = false;
}

const { isOverDropZone } = useDropZone(dropZoneRef, onDrop);
</script>

<template>
  <div
    class="bg-gray-100 p-2 flex justify-center items-center border-2 border-gray-100 relative"
    :class="{
      'border-blue-200': isOverDropZone,
      'border-2': isOverDropZone,
    }"
    ref="dropZoneRef"
  >
    <label class="absolute top-0 left-0 right-0 bottom-0 block">
      <input
        accept="image/png, image/jpeg"
        class="hidden"
        type="file"
        @change="onFileSelect"
      />
    </label>
    <AppImage v-if="image" :src="src" />
    <template v-else>{{
      placeholder || "Click or drop to upload image"
    }}</template>
    <AppLoader v-if="loading || uploadingToFilestack" :overlay="true" />
  </div>
</template>
