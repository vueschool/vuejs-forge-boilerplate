<script setup lang="ts">
import {
  Card,
  CardTitle,
  CardHeader,
  Avatar,
} from "@progress/kendo-vue-layout";
import type { Task } from "@/types";
const props = defineProps<{
  task: Task;
}>();
</script>
<template>
  <RouterLink :to="`/boards/${$route.params.id}/tasks/${task.id}`">
    <Card>
      <CardHeader>
        <div class="flex justify-between">
          <CardTitle>
            {{ task.title }}
          </CardTitle>
          <Avatar type="image" size="medium" shape="circle">
            <img
              style="width: 45px; height: 45px"
              src="https://pickaface.net/gallery/avatar/unr_sample_161118_2054_ynlrg.png"
            />
          </Avatar>
        </div>
      </CardHeader>
    </Card>
  </RouterLink>
</template>
