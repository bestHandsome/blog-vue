<template>
  <div id="app">
    <v-app v-scroll="onScroll">
      <Header></Header>
      <router-view/>
      <Footer class="footer"></Footer>
      <v-btn v-if="offsetTop > 0" fab dark color="indigo" class="scroll-top" @click="$vuetify.goTo(0, 'easeInQuad')">
        <v-icon dark>keyboard_arrow_up</v-icon>
      </v-btn>
    </v-app>
  </div>
</template>

<script>
import Footer from './components/Footer'
import Header from './components/Header'
export default {
    components: {
        Footer,
        Header
    },
    data() {
        return {
            offsetTop: 0
        }
    },
    methods: {
        onScroll () {
            this.offsetTop = window.pageYOffset || document.documentElement.scrollTop;
        }
    }
}
</script>

<style>
    @media (min-width: 576px) {
        .box-container {
            width: 300px;
            margin: 0 auto;
        }
        .v-toolbar__content {
            width: 300px;
            margin: 0 auto;
            padding: 0 !important;
        }
    }

    @media (min-width: 768px) {
        .box-container {
            width: 450px;
            margin: 0 auto;
        }
        .v-toolbar__content {
            width: 450px;
            margin: 0 auto;
            padding: 0 !important;
        }
    }

    @media (min-width: 992px) {
        .box-container {
            width: 900px;
            margin: 0 auto;
        }
        .v-toolbar__content {
            width: 900px;
            margin: 0 auto;
            padding: 0 !important;
        }
    }

    @media (min-width: 1200px) {
        .box-container {
            width: 1200px;
            margin: 0 auto;
        }
        .v-toolbar__content {
            width: 1200px;
            margin: 0 auto;
            padding: 0 !important;
        }
    }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.scroll-top {
    position: fixed !important;
    right: 30px;
    bottom: 40px;
}

.footer {
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
}
</style>
