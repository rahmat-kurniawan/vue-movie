<template>
  <div class="alert alert-primary" role="alert">
    {{ info }}
  </div>
</template>

<script>

export default {
  name: 'Alert',
  data: function() {
    return { 
      info: 'Alert Infomation',
    }
  }
}
</script>
