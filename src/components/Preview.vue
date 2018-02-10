<template>
  <div id="preview" >
    <h3 class="title is-3">{{resume.profile.姓名  || "请填写姓名"}}</h3>
    <h4 class="title is-4">{{resume.profile.标签 || "请输入职位"}}</h4>
    <p>{{resume.profile.所在城市 || "请填写城市"}}   {{resume.profile.生日 || "请填写出生年月"}}</p>
    <hr>
    <section v-if="filter(resume.workHistory).length > 0">
      <h3 class="subtitle is-4 itemTitle">工作经历</h3>
      <ul>
          <li v-for="work in filter(resume.workHistory)" class="part" :key="work">
            <p class="is-large">{{work.公司名}}  {{work.经历}}</p>
            <hr>
            <p>{{work.工作内容}}</p>
          </li>
      </ul>
    </section>

    <section v-if="filter(resume.projects).length > 0">
      <h3 class="subtitle is-4 itemTitle">项目经历</h3>
      <ul>
          <li v-for="project in filter(resume.projects)" :key="project">
            <p class="is-large">{{project.项目名}} {{project.项目经历}}</p>
            <p>{{project.项目内容}}</p>
            <hr>
          </li>
      </ul>
    </section>

    <section v-if="filter(resume.studyHistory).length > 0">
      <h3 class="subtitle is-4 itemTitle">学习经历</h3>
      <ul>
          <li v-for="study in filter(resume.studyHistory)">
            <p class="is-large">{{study.学校}} {{study.经历}}</p>
            <p>{{study.学位}}</p>
            <hr>
          </li>
      </ul>
    </section>
    <section v-if="filter(resume.awards).length > 0">
      <h3 class="subtitle is-4 itemTitle">获奖情况</h3>
      <ul>
          <li v-for="award in filter(resume.awards)">
            {{award.奖名}}
            <hr>
           </li>
      </ul>
    </section>
    <section v-if="!isEmpty(resume.contact)" class="contact">
      <h3 class="subtitle is-4 itemTitle">联系方式</h3>
      <table>
        <tr>
          <td><strong>手机号码</strong></td>
          <td>{{resume.contact.手机 || "请输入电话号码"}}</td>
        </tr>
        <tr>
          <td><strong>电子邮箱</strong></td>
          <td>{{resume.contact.email || "请输入邮箱"}}</td>
        </tr>
        <tr>
          <td><strong>微信</strong></td>
          <td>{{resume.contact.微信 || "请输入微信"}}</td>
        </tr>
        <tr>
          <td><strong>QQ</strong></td>
          <td>{{resume.contact.QQ || "请输入QQ"}}</td>
        </tr>
      </table>
    </section>
  </div>
</template>

<script >
  export default {
    methods: {
      filter(array) { // 找出非空对象
        return array = array.filter( item => !this.isEmpty(item))
      } ,
      isEmpty(object) { // 只要有一个value不是falsy，就返回false
        let empty = true;
        for (let key in object) {
          if (object[key]) {
            empty = false;
            break;
          }
        }
        return empty;
      }
    },
    computed: {
      resume() {
        console.log('ahhah')
        return this.$store.state.resume;
      }
    }
  }
</script>
<style lang="scss" rel="stylesheet/less">
  #preview{
    padding: 20px;
    border: 1px solid yellow;
    min-height: 100px;

    .part {
      margin-bottom: 20px;
    }
    .itemTitle {
      display: inline-block;
      background: #ede5f5;
    }
    .contact{
      table{
        display: table;
        border-collapse: separate;
        border-spacing: 5px;
      }
    }
  }
</style>
