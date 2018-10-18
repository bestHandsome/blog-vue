<template>
  <div class="home box-container">
    <section>
      <v-parallax dark
                  src="https://vuetifyjs.com/themes/parallax-starter/assets/hero.jpeg"
                  height="600">
        <v-layout column
                  align-center
                  justify-center
                  class="white--text">
          <img src="../assets/vuetify.png" alt="Vuetify" height="200">
          <h1 class="white--text mb-2 display-1 text-xs-center">学习永无止境</h1>
          <div class="subheading mb-3 text-xs-center">write by xingjin</div>
          <v-btn
                  class="orange darken-1 mt-5"
                  dark
                  large
                  to="/notes">
            go
          </v-btn>
        </v-layout>
      </v-parallax>
    </section>

    <section>
      <v-layout column wrap class="my-5" align-center>
        <v-flex xs12 sm4 class="my-3">
          <div class="text-xs-center">
            <h1 class="headline">最好的方式去记录自己获得的知识</h1>
            <span class="subheading">
                try my best to share it
            </span>
          </div>
        </v-flex>
        <v-flex xs12>
          <v-container grid-list-xl>
            <v-layout row wrap align-center>
              <v-flex xs12 md4>
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-xs-center">
                    <v-icon x-large class="blue--text text--lighten-2">alarm_on</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center">编码效率</div>
                  </v-card-title>
                  <v-card-text>
                    Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-xs-center">
                    <v-icon x-large class="blue--text text--lighten-2">flash_on</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline">快速入题</div>
                  </v-card-title>
                  <v-card-text>
                    Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-xs-center">
                    <v-icon x-large class="blue--text text--lighten-2">list</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center">学习清单</div>
                  </v-card-title>
                  <v-card-text>
                    Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </section>

    <section>
      <v-parallax src="https://vuetifyjs.com/themes/parallax-starter/assets/section.jpeg" height="380">
        <v-layout column align-center justify-center>
          <div class="headline white--text mb-3 text-xs-center">Web 开发从来都不简单，重要的是与时俱进</div>
          <em>立即启动我的 web 之旅</em>
          <v-btn class="blue lighten-2 mt-5"
                  dark
                  large
                  to="/works">
            开始
          </v-btn>
        </v-layout>
      </v-parallax>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {
  },
  data() {
      return {
          sheet: false,
          goTop: false,
          offsetTop: 0,
          tiles: [
              { img: 'keep.png', title: 'Keep' },
              { img: 'inbox.png', title: 'Inbox' },
              { img: 'hangouts.png', title: 'Hangouts' },
              { img: 'messenger.png', title: 'Messenger' },
              { img: 'google.png', title: 'Google+' }
          ]
      }
  },
  methods: {
      onScroll () {
          this.offsetTop = window.pageYOffset || document.documentElement.scrollTop;
      }
  }
}
</script>
