module.exports = {
    lang: "et",
    title: "Tere, Vuepress!",
    description: "See on mu esimene Vuepressi leht! Tegelt teine",
    base: "/learn-docs/",
    dest: "gh-pages",
  
    themeConfig: {
      logo: "/images/Logo1.svg",
      navbar: [
        // esileht
        {
          text: "Kodu",
          link: "/",
        },
        // teine leht teises folderis
        {
          text: "Tunnusgraafika",
          link: "/tunnusgraafika/",
        },
        // kolmas leht kolmandas folderis jne
        {
          text: "Prototüüpimine",
          link: "/prototyypimine/",
        },
        {
          text: "Git",
          link: "/git/",
        },
        {
          text: "Markdown",
          link: "/markdown/",
        },
        {
          text: "M2NNARIDESIGN",
          link: "/m2nnaridesign/",
        },
      ],
      sidebar: "auto",
    },
  };