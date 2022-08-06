<template>
  <div>
    <Html>
      <Head>
        <Title>People - Look for people in your area.</Title>
        <Meta
          name="description"
          content="People - Look for people in your area."
        />
      </Head>
    </Html>

    <div class="post-info">
      <p>Total People: 23</p>
    </div>

    <div class="users-list">
      <div class="r1">
        <div
          class="img"
          style="
            background-image: url('https://assets1.cbsnewsstatic.com/hub/i/2018/11/06/0c1af1b8-155a-458e-b105-78f1e7344bf4/2018-11-06t054310z-1334124005-rc1be15a8050-rtrmadp-3-people-sexiest-man.jpg');
          "
        ></div>
      </div>
      <div class="r2">
        <h3>James Bond</h3>
        <p>
          <i class="fa-solid fa-location-pin"></i> 783360
          <span class="profession"
            ><i class="fa-solid fa-briefcase"></i> Software engineer</span
          >
        </p>
        <p>
          <button class="details">
            <i class="fa-solid fa-circle-info"></i> Details
          </button>
          <button class="message">
            <i class="fa-solid fa-message"></i> Message
          </button>
          <button class="fav"><i class="fa-brands fa-gratipay"></i> Fav</button>
        </p>
      </div>
    </div>

    <div class="users-list">
      <div class="r1">
        <div
          class="img"
          style="
            background-image: url('https://i.pinimg.com/originals/44/cc/03/44cc03b585eae54fe7f65fcaab6654a9.jpg');
          "
        ></div>
      </div>
      <div class="r2">
        <h3>Somina Narzi</h3>
        <p>
          <i class="fa-solid fa-location-pin"></i> 783360
          <span class="profession"
            ><i class="fa-solid fa-briefcase"></i> Actress</span
          >
        </p>
        <p>
          <button class="details">
            <i class="fa-solid fa-circle-info"></i> Details
          </button>
          <button class="message">
            <i class="fa-solid fa-message"></i> Message
          </button>
          <button class="fav"><i class="fa-brands fa-gratipay"></i> Fav</button>
        </p>
      </div>
    </div>

    <div class="users-list">
      <div class="r1">
        <div
          class="img"
          style="
            background-image: url('https://images.indianexpress.com/2021/03/Hagrama-Mohilary-1200.jpg');
          "
        ></div>
      </div>
      <div class="r2">
        <h3>Hagrama Mahilary</h3>
        <p>
          <i class="fa-solid fa-location-pin"></i> 783360
          <span class="profession"
            ><i class="fa-solid fa-briefcase"></i> Minister</span
          >
        </p>
        <p>
          <button class="details">
            <i class="fa-solid fa-circle-info"></i> Details
          </button>
          <button class="message">
            <i class="fa-solid fa-message"></i> Message
          </button>
          <button class="fav"><i class="fa-brands fa-gratipay"></i> Fav</button>
        </p>
      </div>
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
