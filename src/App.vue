<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted () {
    if (typeof (FCMPlugin) !== 'undefined') {
      // eslint-disable-next-line
      FCMPlugin.getToken(
        (token) => {
          alert('get token : ' + token)
          console.log(token)
        },
        (err) => {
          alert('error : ' + err)
        });

      // eslint-disable-next-line
      FCMPlugin.onNotification((data) => {
        if (data.wasTapped) {
          // Notification was received on device tray and tapped by the user.
          alert(JSON.stringify(data));
        } else {
          // Notification was received in foreground. Maybe the user needs to be notified.
          alert(JSON.stringify(data));
        }
      });
    }
  }
}
</script>

<style>
</style>
