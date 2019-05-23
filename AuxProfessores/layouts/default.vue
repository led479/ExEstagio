<template>
  <div>
    <navbar />
    <nuxt />
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
}
</style>

<script>
import Navbar from '~/components/Navbar.vue'

export default {
  components: { Navbar },
  mounted() {
    // this.$OneSignal.push(() => {
    //   this.$OneSignal.on('subscriptionChange', isSubscribed => {
    //     this.$OneSignal.push(() => {
    //       this.$OneSignal.getUserId(userId => {
    //         if (isSubscribed) {
    //           // this.$http.post(api_url/notificacoes, {
    //           //   login: current_user.login,
    //           //   onesignal_id: userId
    //           // })
    //           console.log('Inscreveu-se \n OneSignal User ID:', userId)
    //         } else {
    //           // this.$http.delete(api_url/notificacoes, {
    //           //   login: current_user.login,
    //           //   onesignal_id: userId
    //           // })
    //           console.log('Desinscreveu-se OneSignal User ID:', userId)
    //         }
    //       })
    //     })
    //   })
    // })
  }
}
</script>
