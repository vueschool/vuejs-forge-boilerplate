<script setup lang="ts">
import { Button as KButton } from "@progress/kendo-vue-buttons";
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";

const QUERY = gql`
  query {
    usersList {
      items {
        email
      }
    }
    boardsList {
      items {
        title
        columns {
          items {
            title
          }
        }
      }
    }
  }
`;

const { result } = useQuery(QUERY);

console.log("asd", result.value);
</script>
<template>
  <KButton v-bind="$attrs">
    <slot></slot>
  </KButton>
</template>
