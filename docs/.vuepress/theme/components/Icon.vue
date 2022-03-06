<template>
  <i :class="getClassName" @click="handleClick" aria-hidden="true" />
</template>

<script>
export default {
  name: "icon",
  props: {
    name: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "line",
    },
    className: {
      type: String,
      default: "",
    },
  },
  computed: {
    getClassName() {
      return `ri-${this.name}-${this.type}`;
    },
  },
  methods: {
    handleClick() {
      this.$emit("click");
    },
  },
};
</script>

<style lang="stylus">
@require "~remixicon/fonts/remixicon.css";
</style>
