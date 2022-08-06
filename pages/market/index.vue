<template>
  <div>
    <Html>
      <Head>
        <Title>Market-Sell your secondhand products.</Title>
        <Meta
          name="description"
          content="Market-Sell your secondhand products."
        />
      </Head>
    </Html>

    <div class="post-your-sells">
      <button
        v-on:click="
          {
            modalShow('#marketPost');
          }
        "
      >
        <i class="fa-solid fa-plus"></i> Post your Sell
      </button>
    </div>

    <div class="post-info">
      <p>23 August 2020, Total sells: 78</p>
    </div>

    <div class="post-sells">
      <div class="loc">
        <button><i class="fa-solid fa-eye"></i> For Sell</button>
        <button><i class="fa-solid fa-location-pin"></i> 783360</button>
      </div>
      <p>
        <span class="name">Second Hand Japanese Bikes.</span>
        <span class="rs"
          ><i class="fa-solid fa-indian-rupee-sign"></i> 4000/-</span
        >
        <span class="yrs">5 yrs old</span>
      </p>
      <div
        class="product"
        style="
          background-image: url('https://www.royalenfield.com/content/dam/royal-enfield/india/motorcycles/landing/meteor-new-landing.jpeg');
        "
      ></div>
      <p>
        I want to sell my bike cause, I want to buy new bike. My bike is all ok,
        engine is fine.
      </p>
      <div class="btns">
        <button class="view">
          <i class="fa-solid fa-eye"></i> View Details
        </button>
        <button class="seller">
          <i class="fa-solid fa-address-book"></i> Get Seller's Sontact
        </button>
      </div>
    </div>

    <div class="post-sells">
      <div class="loc">
        <button><i class="fa-solid fa-eye"></i> For Sell</button>
        <button><i class="fa-solid fa-location-pin"></i> 783360</button>
      </div>
      <p>
        <span class="name">Rooms for rent.</span>
        <span class="rs"
          ><i class="fa-solid fa-indian-rupee-sign"></i> 1000/- per day</span
        >
        <span class="yrs">3 bhk</span>
      </p>
      <div
        class="product"
        style="
          background-image: url('https://hotelprinceb.in/img/gallery-image-14.jpg');
        "
      ></div>
      <p>
        Rooms for rent, for Kokrajhar peoples. Remember only married person is
        allowed.
      </p>
      <div class="btns">
        <button class="view">
          <i class="fa-solid fa-eye"></i> View Details
        </button>
        <button class="seller">
          <i class="fa-solid fa-address-book"></i> Get Seller's Sontact
        </button>
      </div>
    </div>
    <!-- ..................................... -->
    <!-- MARKET POST MODAL START -->
    <!-- ..................................... -->
    <div id="marketPost" class="modal">
      <div class="modal-section">
        <div class="modal-xs add-sell-modal">
          <div class="modal-head">
            <button
              type="button"
              class="modal-close"
              v-on:click="
                {
                  modalHide('#marketPost');
                }
              "
            >
              <i class="fa-solid fa-xmark"></i>
            </button>
            <h2><i class="fa-solid fa-plus"></i> Post your Sell</h2>
          </div>
          <div class="modal-content align_center">
            <table>
              <tr>
                <td style="width: 100px">
                  <font class="looking_for">Selling :</font>
                </td>
                <td>
                  <select name="" id="">
                    <option value="">Select your sell</option>
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
                  <p>I am looking for selling</p>
                </td>
              </tr>
              <tr>
                <td colspan="3">
                  <textarea
                    name=""
                    id=""
                    placeholder="Write what you are selling?"
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
    <!-- MARKET POST MODAL END -->
    <!-- ..................................... -->
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
