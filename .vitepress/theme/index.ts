import DefaultTheme from 'vitepress/theme'
import mediumZoom from 'medium-zoom'
import { onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vitepress'
import type { Theme } from 'vitepress'

export default {
  extends: DefaultTheme,
  setup() {
    const route = useRoute()

    const initZoom = () => {
      // .vp-doc img  — markdown images in all doc pages
      // [data-zoomable] — manually tagged images (e.g. homepage HTML)
      mediumZoom('.vp-doc img:not(.no-zoom), [data-zoomable]', {
        background: 'var(--vp-c-bg)',
      })
    }

    onMounted(() => initZoom())
    watch(() => route.path, () => nextTick(initZoom))
  },
} satisfies Theme
