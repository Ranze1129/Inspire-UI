import Message from './Message.vue'
import {createApp, h} from 'vue';

export const openMessage = (options) => {
  const {types,message} = options;
  const div = document.createElement('div');
  document.body.appendChild(div);
  const close = () => {
    //@ts-ignore
    app.unmount(div);
    div.remove();
  };
  const app = createApp({
    render() {
      return h(Message, {
        messageVisible: true,
        'onUpdate:messageVisible': (newMessageVisible) => {
          if (newMessageVisible === false) {close();}
        },
      }, {
        types, message
      });
    }
  });
  app.mount(div);
}