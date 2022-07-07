<script setup lang="ts">
import { useAuthUserStore } from "@/stores/AuthUserStore";
const auth = useAuthUserStore();
auth.logout();
</script>
