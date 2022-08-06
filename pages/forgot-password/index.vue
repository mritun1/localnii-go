<template>
  <div>
    <Html>
      <Head>
        <Title>Forgot Password - Localnii</Title>
        <Meta name="description" content="Forgot Password - Localnii" />
      </Head>
    </Html>
    <div class="pad-x">
      <div class="register">
        <h1>Forgot Password</h1>
        <form action="" method="post">
          <div class="m-input">
            <label>Email:</label>
            <input type="email" placeholder="Email" />
          </div>
          <div class="form_submit">
            <button type="submit">
              <i class="fa-solid fa-paper-plane"></i> Send Password
            </button>
          </div>
          <div class="forgot_pas">
            <div>
              <NuxtLink class="login" to="/login"
                ><i class="fa-solid fa-right-to-bracket"></i> Login</NuxtLink
              >
            </div>
            <div>
              <NuxtLink to="/register"
                ><i class="fa-solid fa-plus"></i> Register</NuxtLink
              >
            </div>
          </div>
        </form>
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
