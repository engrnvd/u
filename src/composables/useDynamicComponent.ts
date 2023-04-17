import { createApp, defineComponent } from 'vue'

export function useDynamicComponent(Component: any) {
  const wrapper = document.createElement('div')
  // @ts-ignore
  document.body.appendChild(wrapper)
  const app = createApp(defineComponent({ extends: Component }))
  const component = app.mount(wrapper)
  return { app, component }
}
