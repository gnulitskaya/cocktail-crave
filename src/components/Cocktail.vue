<template>
  <div class="cocktail">
    <img src="" alt="" class="cocktail__img">

    <h2 class="cocktail__name">Manhattan</h2>

    <CocktailLevel title="easy"/>

    <div class="cocktail__info info-cocktail">
      <div class="info-cocktail__item item-cocktail">
        <div class="item-cocktail__label">
          4
        </div>
        <div class="item-cocktail__text">
          min
        </div>
      </div>
      <div class="info-cocktail__item item-cocktail">
        <div class="item-cocktail__label">
          75
        </div>
        <div class="item-cocktail__text">
          ml
        </div>
      </div>
      <div class="info-cocktail__item item-cocktail">
        <div class="item-cocktail__label">
          200
        </div>
        <div class="item-cocktail__text">
          kcal
        </div>
      </div>
    </div>

    <CocktailStars/>

    <button class="button">show more</button>
  </div>
</template>

<script>
import CocktailLevel from "@/components/CocktailLevel.vue";
import CocktailStars from "@/components/CocktailStars.vue";

export default {
  components: {CocktailStars, CocktailLevel}

}
</script>

<style lang="scss" scoped>

</style>