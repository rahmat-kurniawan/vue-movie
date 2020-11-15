<template>
  <div class="home">
    <div class="row mt-0">
      <div class="col-md-12 d-flex justify-content-between">
        <h5 class="text-muted">List Movie</h5>
        <button class="btn btn-primary" data-toggle="modal" data-target="#createMovie">Create Movie</button>
      </div>
    </div>
    <CreateMovie />
    <hr>
    <div class="row">
      <div class="col-md-12 d-flex">
        <CardMovie />
        <CardMovie />
        <CardMovie />
        <CardMovie />
      </div>
    </div>
  </div>
</template>

<script>
import CardMovie from "@/components/CreateMovie.vue"
import CreateMovie from "@/components/Modal.vue"
export default {
  name: 'Movie',
  components: {
    CardMovie,
    CreateMovie
  }
}
</script>