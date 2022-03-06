<template>
  <div class="gate theme-plate">
    <div v-if="data.links && data.links.length" class="nav-container">
      <div
        v-for="(link, index) in data.links"
        :key="index"
        class="nav-item"
        @click="handleTarget(link.url)"
      >
        <Icon :name="link.icon" class="nav-item-icon"></Icon>
        <div class="nav-item-title">{{ link.title }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import NavLink from "@theme/components/NavLink.vue";
import Icon from "@theme/components/Icon.vue";

export default {
  name: "Gate",
  components: { NavLink, Icon },
  computed: {
    data() {
      return this.$page.frontmatter;
    },

    actionLink() {
      return {
        link: this.data.actionLink,
        text: this.data.actionText,
      };
    },
  },
  methods: {
    handleTarget(url) {
      if (!url) {
        console.error("No url provided");
        console.trace("url is null");
        return;
      }
      if (/^http(s?)\:/.test(url)) {
        window.open(url);
      } else {
        this.$router.push(url);
      }
    },
  },
};
</script>

<style scoped>
@media (prefers-color-scheme: dark) {
  .theme-plate {
    --md-sys-color-primary: #6bd2ff;
    --md-sys-color-on-primary: #003548;
    --md-sys-color-primary-container: #004d67;
    --md-sys-color-on-primary-container: #bee8ff;
    --md-sys-color-secondary: #b5cad7;
    --md-sys-color-on-secondary: #1f333d;
    --md-sys-color-secondary-container: #354954;
    --md-sys-color-on-secondary-container: #d1e6f3;
    --md-sys-color-tertiary: #c7c2ea;
    --md-sys-color-on-tertiary: #302d4c;
    --md-sys-color-tertiary-container: #464364;
    --md-sys-color-on-tertiary-container: #e4dfff;
    --md-sys-color-error: #ffb4a9;
    --md-sys-color-error-container: #930006;
    --md-sys-color-on-error: #680003;
    --md-sys-color-on-error-container: #ffdad4;
    --md-sys-color-background: #191c1e;
    --md-sys-color-on-background: #e1e2e4;
    --md-sys-color-surface: #191c1e;
    --md-sys-color-on-surface: #e1e2e4;
    --md-sys-color-surface-variant: #40484c;
    --md-sys-color-on-surface-variant: #c0c8cd;
    --md-sys-color-outline: #8b9297;
    --md-sys-color-inverse-on-surface: #191c1e;
    --md-sys-color-inverse-surface: #e1e2e4;
    --md-sys-color-inverse-primary: #006687;
    --md-sys-color-shadow: #000;
  }
}
@media (prefers-color-scheme: light) {
  .theme-plate {
    --md-sys-color-primary: #006687;
    --md-sys-color-on-primary: #fff;
    --md-sys-color-primary-container: #bee8ff;
    --md-sys-color-on-primary-container: #001e2b;
    --md-sys-color-secondary: #4d616c;
    --md-sys-color-on-secondary: #fff;
    --md-sys-color-secondary-container: #d1e6f3;
    --md-sys-color-on-secondary-container: #081e27;
    --md-sys-color-tertiary: #5e5a7d;
    --md-sys-color-on-tertiary: #fff;
    --md-sys-color-tertiary-container: #e4dfff;
    --md-sys-color-on-tertiary-container: #1b1736;
    --md-sys-color-error: #ba1b1b;
    --md-sys-color-error-container: #ffdad4;
    --md-sys-color-on-error: #fff;
    --md-sys-color-on-error-container: #410001;
    --md-sys-color-background: #fbfcfe;
    --md-sys-color-on-background: #191c1e;
    --md-sys-color-surface: #fbfcfe;
    --md-sys-color-on-surface: #191c1e;
    --md-sys-color-surface-variant: #dce3e9;
    --md-sys-color-on-surface-variant: #40484c;
    --md-sys-color-outline: #70787d;
    --md-sys-color-inverse-on-surface: #f0f1f3;
    --md-sys-color-inverse-surface: #2f3132;
    --md-sys-color-inverse-primary: #6bd2ff;
    --md-sys-color-shadow: #000;
  }
}
.gate {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-color: var(--md-sys-color-background);
}

.nav-container {
  color: var(--md-sys-color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
}
.nav-container:hover > .nav-item {
  transform: translateX(-25%);
}
.nav-container .nav-item {
  text-align: center;
  width: 100px;
  height: 100px;
  margin: 0 20px;
  border-radius: 8px;
  transition: 0.35s all;
  will-change: scale;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.nav-container .nav-item:hover {
  cursor: pointer;
  transform: scale(1.5) !important;
  background-color: var(--md-sys-color-primary);
  color: var(--md-sys-color-on-primary);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
}
.nav-container .nav-item:hover > .nav-item-title {
  opacity: 1;
}
.nav-container .nav-item:hover ~ .nav-item {
  transform: translateX(25%);
}
.nav-container .nav-item .nav-item-icon {
  font-size: 40px;
}
.nav-container .nav-item .nav-item-title {
  opacity: 0;
  font-size: 20px;
}
</style>
