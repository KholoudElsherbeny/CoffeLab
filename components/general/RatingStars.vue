<template>
  <div class="rating">
    <!-- START:: ZERO STARS -->
    <template v-if="rate == '0'">
      <span class="d-block">
        <i class="far fa-star"></i>
        <i class="far fa-star"></i>
        <i class="far fa-star"></i>
        <i class="far fa-star"></i>
        <i class="far fa-star"></i>
      </span>
    </template>
    <!-- END:: ZERO STARS -->

    <!-- START:: ONE STARS -->
    <template v-if="rate == '1'">
      <span class="d-block">
        <i class="fas fa-star"></i>
        <i class="far fa-star"></i>
        <i class="far fa-star"></i>
        <i class="far fa-star"></i>
        <i class="far fa-star"></i>
      </span>
    </template>
    <!-- END:: ONE STARS -->

    <!-- START:: ONE AND HALF STARS -->
    <template v-if="rate == '1.5'">
      <span class="d-block">
        <i class="fas fa-star"></i>
        <i class="fas fa-star-half-alt"></i>
        <i class="far fa-star"></i>
        <i class="far fa-star"></i>
        <i class="far fa-star"></i>
      </span>
    </template>
    <!-- END:: ONE AND HALF STARS -->

    <!-- START:: TWO STARS -->
    <template v-if="rate == '2'">
      <span class="d-block">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="far fa-star"></i>
        <i class="far fa-star"></i>
        <i class="far fa-star"></i>
      </span>
    </template>
    <!-- END:: TWO STARS -->

    <!-- START:: TWO AND HALF STARS -->
    <template v-if="rate == '2.5'">
      <span class="d-block">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star-half-alt"></i>
        <i class="far fa-star"></i>
        <i class="far fa-star"></i>
      </span>
    </template>
    <!-- END:: TWO AND HALF STARS -->

    <!-- START:: THREE STARS -->
    <template v-if="rate == '3'">
      <span class="d-block">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="far fa-star"></i>
        <i class="far fa-star"></i>
      </span>
    </template>
    <!-- END:: THREE STARS -->

    <!-- START:: THREE AND HALF STARS -->
    <template v-if="rate == '3.5'">
      <span class="d-block">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star-half-alt"></i>
        <i class="far fa-star"></i>
      </span>
    </template>
    <!-- END:: THREE AND HALF STARS -->

    <!-- START:: FOUR STARS -->
    <template v-if="rate == '4'">
      <span class="d-block">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="far fa-star"></i>
      </span>
    </template>
    <!-- END:: FOUR STARS -->

    <!-- START:: FOUR AND HALF STARS -->

    <template v-if="rate == '4.5'">
      <span class="d-block">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star-half-alt"></i>
      </span>
    </template>
    <!-- END:: FOUR AND HALF STARS -->

    <!-- START:: FIVE STARS -->
    <template v-if="rate == '5'">
      <span class="d-block">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
      </span>
    </template>
    <!-- END:: FIVE STARS -->
  </div>
</template>

<script>
export default {
  props: ['rate'],
}
</script>

<style lang="scss" scoped>
.rating {
  @include flexStartAlignment;
  column-gap: 4px;
  i,
  svg {
    color: #ffbe0f;
    font-size: 16px;
  }
}
</style>
