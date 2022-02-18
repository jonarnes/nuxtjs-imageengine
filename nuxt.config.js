export default {
  components: true,
  target:"static",
  head: {
    title: "Nuxt Image + ImageEngine Example",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ]
  },
  modules: ["@nuxt/image"],
  image: {
    imageengine: {
      baseURL: "https://try.cdn.imgeng.in"
    }
  }
};
