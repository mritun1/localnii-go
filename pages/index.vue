<script lang="ts">
import Custom from "../assets/js/custom/custom.js";
export default {
  name: "Index",
  data() {
    return {
      //scrollTest: "ff",
    };
  },
  mounted() {
    document.addEventListener("scroll", function () {
      Custom.menu_fixed();
    });
  },
  methods: {
    modalShow(e) {
      Custom.show(e);
    },
    modalHide(e) {
      Custom.hide(e);
    },
  },
};
</script>

<template>
  <div>
    <Html>
      <Head>
        <Title>Search for content according to your location.</Title>
        <Meta
          name="description"
          content="Search for content according to your location."
        />
      </Head>
    </Html>

    <div class="post-your-desire">
      <button v-on:click="modalShow('#writeDesire')">
        <i class="fa-solid fa-plus"></i> Post your Desire
      </button>
    </div>

    <div class="post-info">
      <p>23 August 2020, Total post: 78</p>
    </div>

    <div class="post-desire">
      <div class="loc">
        <button><i class="fa-solid fa-eye"></i> Looking for</button>
        <button><i class="fa-solid fa-location-pin"></i> 783360</button>
      </div>
      <div class="text">
        <p>
          I am looking for
          <span class="words buy">Second Hand Japanese Bikes.</span>
        </p>
      </div>
      <div class="status">
        <p>7 advice <NuxtLink to="/">(view advices)</NuxtLink></p>
      </div>
    </div>

    <div class="post-desire">
      <div class="loc">
        <button><i class="fa-solid fa-eye"></i> Looking for</button>
        <button><i class="fa-solid fa-location-pin"></i> 783360</button>
      </div>
      <div class="text">
        <p>I am looking for <span class="words dating">Girl Friend.</span></p>
      </div>
      <div class="status">
        <p>7 advice <NuxtLink to="/">(view advices)</NuxtLink></p>
      </div>
    </div>

    <div class="post-desire">
      <div class="loc">
        <button><i class="fa-solid fa-eye"></i> Looking for</button>
        <button><i class="fa-solid fa-location-pin"></i> 783360</button>
      </div>
      <div class="text">
        <p>
          I am looking for
          <span class="words rents">Room rent in Kokrajhar.</span>
        </p>
      </div>
      <div class="status">
        <p>7 advice <NuxtLink to="/">(view advices)</NuxtLink></p>
      </div>
    </div>

    <div class="post-desire">
      <div class="loc">
        <button><i class="fa-solid fa-eye"></i> Looking for</button>
        <button><i class="fa-solid fa-location-pin"></i> 783360</button>
      </div>
      <div class="text">
        <p>
          I am looking for
          <span class="words professional">Maid in Kokrajhar.</span>
        </p>
      </div>
      <div class="status">
        <p>7 advice <NuxtLink to="/">(view advices)</NuxtLink></p>
      </div>
    </div>
    <!-- ..................................... -->
    <!-- EDIT POST MODAL START -->
    <!-- ..................................... -->
    <div id="writeDesire" class="modal">
      <div class="modal-section">
        <div class="modal-xs add-desire-modal">
          <div class="modal-head">
            <button
              type="button"
              class="modal-close"
              @click="
                {
                  modalHide('#writeDesire');
                }
              "
            >
              <i class="fa-solid fa-xmark"></i>
            </button>
            <h2><i class="fa-solid fa-plus"></i> Post your Desire</h2>
          </div>
          <div class="modal-content align_center">
            <!-- <h1>Modal content</h1> -->
            <table>
              <tr>
                <td style="width: 100px">
                  <font class="looking_for">Looking for:</font>
                </td>
                <td>
                  <select name="" id="">
                    <option value="">Select your desire</option>
                    <option value="">Room rent</option>
                    <option value="">Secondhand products</option>
                    <option value="">Partners</option>
                    <option value="">Services</option>
                    <option value="">Others</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td colspan="2">
                  <p>I am looking for</p>
                </td>
              </tr>
              <tr>
                <td colspan="3">
                  <textarea
                    name=""
                    id=""
                    placeholder="Write what you are looking for?"
                    rows="10"
                  ></textarea>
                </td>
              </tr>
            </table>
          </div>
          <div class="modal-foot">
            <button class="btn"><i class="fa-solid fa-plus"></i> Video</button>
            <button class="btn"><i class="fa-solid fa-plus"></i> Image</button>
            <button class="submit">
              <i class="fa-solid fa-paper-plane"></i> Submit Post
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- ..................................... -->
    <!-- EDIT POST MODAL END -->
    <!-- ..................................... -->
  </div>
</template>
