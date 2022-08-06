<template>
  <div>
    <Html>
      <Head>
        <Title>Login - Localnii</Title>
        <Meta name="description" content="Login - Localnii" />
      </Head>
    </Html>
    <div class="pad-xs">
      <div class="register">
        <h1>Login</h1>
        <form action="" method="post">
          <div class="m-input">
            <label>Email:</label>
            <input type="email" placeholder="Email" />
          </div>
          <div class="m-input">
            <label>Password:</label>
            <input type="password" placeholder="Password" />
          </div>
          <div class="form_submit">
            <button type="submit">
              <i class="fa-solid fa-right-to-bracket"></i> Login
            </button>
          </div>
          <div class="forgot_pas">
            <div>
              <NuxtLink class="f" to="/forgot-password"
                >Forgot Password?</NuxtLink
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
