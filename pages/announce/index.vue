<template>
  <div>
    <Html>
      <Head>
        <Title>Announce-Stay aware of your location.</Title>
        <Meta
          name="description"
          content="Announce-Stay aware of your location"
        />
      </Head>
    </Html>

    <div class="post-your-announce">
      <button><i class="fa-solid fa-plus"></i> Add Announcement</button>
    </div>

    <div class="post-info">
      <p>23 August 2020, Total post: 78</p>
    </div>

    <div class="post-announce">
      <div class="loc">
        <button><i class="fa-solid fa-eye"></i> Announce</button>
        <button><i class="fa-solid fa-location-pin"></i> 783360</button>
      </div>
      <p class="text">
        Concert on 24 Aug 2022, Welcome to everyone, please visit, near kali
        mandir, Kokrajhar.
      </p>
      <div
        class="product"
        style="
          background-image: url('https://pbs.twimg.com/media/EsGeKHRVQAQshx9.jpg');
        "
      ></div>
    </div>

    <div class="post-announce">
      <div class="loc">
        <button><i class="fa-solid fa-eye"></i> Announce</button>
        <button><i class="fa-solid fa-location-pin"></i> 783360</button>
      </div>
      <p class="text">Narendra Modi visit on kokrajhar, 26 Aug, 2022.</p>
      <div
        class="product"
        style="
          background-image: url('https://www.india.com/wp-content/uploads/2015/09/pm-modi-foreign-tour.jpg');
        "
      ></div>
    </div>

    <div class="post-announce">
      <div class="loc">
        <button><i class="fa-solid fa-eye"></i> Announce</button>
        <button><i class="fa-solid fa-location-pin"></i> 783360</button>
      </div>
      <p class="text">
        Karate competition, 2022. Come one come all 23 Aug, near Train station.
      </p>
      <div
        class="product"
        style="
          background-image: url('https://www.wkf.net/imagenes/noticias/noticia20210413114751.jpg');
        "
      ></div>
    </div>
  </div>
</template>

<script lang="ts">
import Custom from "~~/assets/js/custom/custom.js";
export default {
  mounted() {
    document.addEventListener("scroll", function () {
      Custom.menu_fixed();
    });
  },
};
</script>
