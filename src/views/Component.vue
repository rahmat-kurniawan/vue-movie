<template>
  <div id="component">
    <h5 class="text-muted">List Component:</h5>
    <hr>
    <h6 class="text-muted">Alert</h6>
    <Alert/>
    <h6 class="text-muted">Modal</h6>
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#staticBackdrop">
      Launch static backdrop modal
    </button>
    <Modal/>
  </div>
</template>

<script>
import Alert from "@/components/Alert.vue"
import Modal from "@/components/Modal.vue"

export default {
  name: 'Component',
  components:{
    Alert,
    Modal
  }
}
</script>
