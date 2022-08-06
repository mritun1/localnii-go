<template>
  <div>
    <Html>
      <Head>
        <Title>Register - Localnii</Title>
        <Meta name="description" content="Register - Localnii" />
      </Head>
    </Html>
    <div class="pad-xs">
      <div class="register">
        <h1>Register</h1>
        <form action="" method="post">
          <div class="m-input">
            <label>First Name:</label>
            <input type="text" placeholder="First Name" />
          </div>
          <div class="m-input">
            <label>Last Name:</label>
            <input type="text" placeholder="Last Name" />
          </div>
          <div class="m-input">
            <label>Gender:</label>
            <select name="" id="">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div class="m-input">
            <label>Email:</label>
            <input type="email" placeholder="Email" />
          </div>
          <div class="m-input">
            <label>Password:</label>
            <input type="password" placeholder="Password" />
          </div>
          <div class="m-input">
            <label>Confirm Password:</label>
            <input type="password" placeholder="Confirm Password" />
          </div>
          <div class="form_submit">
            <button type="submit">
              <i class="fa-solid fa-plus"></i> Register
            </button>
          </div>
          <div class="forgot_pas">
            <div>
              <NuxtLink class="forgot" to="/forgot-password"
                >Forgot Password?</NuxtLink
              >
            </div>
            <div>
              <NuxtLink to="/login"
                ><i class="fa-solid fa-right-to-bracket"></i> Login</NuxtLink
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
