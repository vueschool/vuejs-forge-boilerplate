<script setup lang="ts">
import { useAlerts } from "@/stores/alerts";
import { Fade } from "@progress/kendo-vue-animation";
import {
    Notification,
    NotificationGroup,
} from "@progress/kendo-vue-notification";
import { storeToRefs } from "pinia";
import { reactive } from "vue";
const store = useAlerts();
const { notify, remove } = store;
const { items } = storeToRefs(store);
</script>

<template>
    <div class="z-10">
        <NotificationGroup :style="{
            right: '10px',
            bottom: '10px',
            alignItems: 'flex-start',
            flexWrap: 'wrap-reverse',
        }">
            <Fade v-for="alert in items" :key="alert.id" appear>
                <Notification :closable="alert.closable" @close="remove(alert.id)" :type="{
                    style: alert.style,
                    icon: true,
                }" >
                    <div v-if="alert.html" v-html="alert.message"></div>
                    <span v-else>{{ alert.message }}</span>
                </Notification>
            </Fade>
        </NotificationGroup>
    </div>
</template>