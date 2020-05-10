<template>
  <div class="home">
    <Dashboard />
  </div>
</template>

<script>
// @ is an alias to /src
import Dashboard from '@/components/dashboard.vue'

export default {
  name: 'Home',
  components: {
    Dashboard
  }
}
</script>
