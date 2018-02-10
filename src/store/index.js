import Vuex from 'vuex'
import  Vue from 'vue'
import objectPath from 'object-path'
// const store = new Vuex.Store({
Vue.use(Vuex);


export default new Vuex.Store({
  state: {

    count: 0,
    selected: 'profile',
    user: {
      id: '',
      username: ''
    },

    icon: [
      'id', 'work', 'book', 'heart', 'cup', 'phone'
    ],

    resume: {
      config: [
        { title: '个人信息', field: 'profile', icon: 'id' },
        { title: '工作经历', field: 'workHistory', icon: 'work' },
        { title: '项目经历', field: 'projects', icon: 'heart' },
        { title: '学习经历', field: 'studyHistory', icon: 'book' },
        { title: '获奖经历', field: 'awards', icon: 'cup' },
        { title: '联系方式', field: 'contact', icon: 'phone' },
      ],
      profile: {
        姓名: '',
        标签: '',
        所在城市: '',
        生日: ''
      },
      workHistory: [
        {公司名: '', 经历: '', 工作内容: ''},
      ],
      studyHistory: [
        {学校: '', 经历: '', 学位: ''}
      ],
      projects: [
        {项目名:'', 项目经历: '',项目内容: ''}
      ],
      awards: [
        {奖名: ''}
      ],
      contact: {
        手机: '', email: '', 微信: '', QQ: ''
      }
    },
  },
  mutations: {
    initState(state, payload) {
      Object.assign(state,  payload);
    },
    switchTab(state, payload) {
      state.selected = payload;
      localStorage.setItem('state', JSON.stringify(state));
    },
    updateResume(state, {path, value}) {
      objectPath.set(state.resume, path, value);
      localStorage.setItem('state',  JSON.stringify(state));
    },
    addFieldItem(state, {path}) {
      let newItem = JSON.parse(JSON.stringify(state.resume[path][0]));
      for (let key in newItem) {
        newItem[key] = '';
      }
      objectPath.push(state.resume,  path,  newItem);
      localStorage.setItem('state',  JSON.stringify(state));
    },
    removeFieldItem(state, {path, index}) {
      state.resume[path].splice(index,  1);
      // let newItem = JSON.parse(JSON.stringify(state.resume[path][0]));
      // for (let key in newItem) {
      //   newItem[key] = '';
      // }
      // objectPath.push(state.resume,  path,  newItem);
      localStorage.setItem('state',  JSON.stringify(state));
    },
    setUser(state, payload) {
      Object.assign(state.user,  payload);
    },
    removeUser(state) {
      state.user.id = '';
    }
  }
})