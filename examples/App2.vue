<template>
  <div>
    <a-button type="primary" @click="showDrawer">Open</a-button>
    <a-drawer
      title="Basic Drawer"
      placement="right"
      :closable="false"
      @close="onClose"
      :visible="visible"
      :afterVisibleChange="afterVisibleChange"
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </a-drawer>
  </div>
</template>
<script>
import { defineComponent } from 'vue';
import Button from '../components/button/button';
import Drawer from '../components/drawer/index';
export default defineComponent({
  components: {
    'a-drawer': Drawer,
    'a-button': Button,
  },
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    afterVisibleChange(val) {
      console.log('visible', val);
    },
    showDrawer() {
      this.visible = true;
    },
    onClose() {
      this.visible = false;
    },
  },
});
</script>
