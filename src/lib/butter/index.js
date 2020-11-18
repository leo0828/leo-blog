import Vue from 'vue'
import Butter from 'buttercms';
//butter token
export const butter = Butter('e0f36dd51d2aa60e92d4db1123baed7e247e5707');

Vue.prototype.$butter = butter