<template>
  <div>
    <Header />
    <div class="app_wrapper" id="app_wrapper">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script setup>

const i18n = useI18n();

useHead({
  titleTemplate: `%s  ${i18n.t("appName")} `,
  meta: [
    {
      hid: "description",
      name: "description",
      content: "Starter App Desc Will Go Here",
    },
  ],
});
</script>

<style></style>
