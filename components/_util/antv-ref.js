import { nextTick } from 'vue';
const antvRef = {
  beforeMount: function bind(el, binding, vnode) {
    nextTick(function() {
      binding.value(vnode.componentInstance || el, vnode.key);
    });
    binding.value(vnode.componentInstance || el, vnode.key);
  },
  updated: function update(el, binding, vnode, oldVnode) {
    if (oldVnode.data && oldVnode.data.directives) {
      let oldBinding = oldVnode.data.directives.find(function(directive) {
        let name = directive.name;
        return name === 'ref';
      });
      if (oldBinding && oldBinding.value !== binding.value) {
        oldBinding && oldBinding.value(null, oldVnode.key);
        binding.value(vnode.componentInstance || el, vnode.key);
        return;
      }
    }
    // Should not have this situation
    if (vnode.componentInstance !== oldVnode.componentInstance || vnode.elm !== oldVnode.elm) {
      binding.value(vnode.componentInstance || el, vnode.key);
    }
  },
  unmounted: function unbind(el, binding, vnode) {
    binding.value(null, vnode.key);
  },
};

export default antvRef;
