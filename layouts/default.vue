<script setup lang="ts">
import "~/assets/css/mcss-v2.css?v=1.0.0.0.7";
import "~/assets/css/custom/custom.css?v=1.0.0.0.8";

interface OptionsState {
  menu: Menu;
}
enum Menu {
  DESIRE = "desire",
  MARKET = "market",
  ANNOUNCE = "announce",
  PEOPLES = "peoples",
  ANALYSIS = "analysis",
}
const options = reactive<OptionsState>({
  menu: Menu.DESIRE,
});
</script>

<template>
  <Html>
    <Head>
      <Link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"
      />
      <Link
        rel="icon"
        href="../assets/icons/main/icon.png"
        type="image/x-icon"
      />
    </Head>
  </Html>
  <div class="pad-0">
    <div class="m-container m-container-md">
      <div class="m-content row web-body">
        <!-- ........................................... -->
        <!-- LEFT SIDEBAR - START -->
        <!-- ........................................... -->
        <div class="web-left">
          <div class="p-fixed">
            <div class="side-profile-box">
              <p class="small-title">Profile</p>
              <div
                class="pic"
                style="background-image: url('/assets/icons/users/gamer.png')"
              ></div>
              <div class="profile-text">
                <NuxtLink to="/"> Profile Name </NuxtLink>
                <h2><i class="fa-solid fa-indian-rupee-sign"></i> 0/-</h2>
              </div>
            </div>

            <div class="vertical-menu-1">
              <ul class="m-list">
                <li class="m-li active">
                  <NuxtLink to="/"
                    ><i class="fa-solid fa-home"></i> Home</NuxtLink
                  >
                </li>
                <li class="m-li">
                  <NuxtLink to="/"
                    ><i class="fa-solid fa-user"></i> Profile</NuxtLink
                  >
                </li>
                <li class="m-li">
                  <NuxtLink to="/"
                    ><i class="fa-solid fa-rectangle-list"></i> My
                    Orders</NuxtLink
                  >
                </li>
                <li class="m-li">
                  <NuxtLink to="/"
                    ><i class="fa-solid fa-store"></i> My Products</NuxtLink
                  >
                </li>
                <li class="m-li">
                  <NuxtLink to="/"
                    ><i class="fa-solid fa-wallet"></i> My Wallet</NuxtLink
                  >
                </li>
                <li class="m-li">
                  <NuxtLink to="/"
                    ><i class="fa-brands fa-gratipay"></i> My Favorite</NuxtLink
                  >
                </li>
                <li class="m-li">
                  <NuxtLink to="/"
                    ><i class="fa-solid fa-gear"></i> Settings</NuxtLink
                  >
                </li>
                <li class="m-li">
                  <NuxtLink to="/"
                    ><i class="fa-solid fa-cloud-bolt"></i> Premium
                    Account</NuxtLink
                  >
                </li>
                <li class="m-li red">
                  <NuxtLink to="/"
                    ><i class="fa-solid fa-arrow-right-from-bracket"></i>
                    Logout</NuxtLink
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- ........................................... -->
        <!-- LEFT SIDEBAR - END -->
        <!-- ........................................... -->
        <!-- ........................................... -->
        <!-- MAIN CONTENT - START -->
        <!-- ........................................... -->
        <div class="web-center">
          <!-- ...... MENU 1 START .............. -->
          <div class="m-content row main-top-menu">
            <div class="left-menu">
              <ul class="m-h-list">
                <li class="m-li">
                  <p class="menu-bar"><i class="fa-solid fa-bars"></i></p>
                </li>
                <li class="m-li m-flex-align-center">
                  <p class="pin">
                    <i class="fa-solid fa-location-pin"></i> 783360
                  </p>
                </li>
              </ul>
            </div>
            <div class="right-menu">
              <ul class="m-h-list">
                <li class="m-li">
                  <i class="fa-solid fa-message"></i>
                </li>
                <li class="m-li">
                  <i class="fa-solid fa-bell"></i>
                </li>
                <li class="m-li">
                  <i class="fa-solid fa-cart-shopping"></i>
                </li>
              </ul>
            </div>
          </div>
          <!-- ...... MENU 1 END .............. -->
          <!-- ...... MENU 2 START .............. -->

          <Fixedmenu />

          <div class="fixed-menu" id="fixed-menu-2">
            <div class="m-container m-container-md">
              <div class="m-content row web-body">
                <div class="web-left"></div>
                <div class="web-center">
                  <Fixedmenu />
                </div>
                <div class="web-right"></div>
              </div>
            </div>
          </div>

          <!-- ...... MENU 2 END .............. -->
          <!-- ...... CONTENT START .............. -->
          <slot></slot>
          <!-- ...... CONTENT END .............. -->
        </div>
        <!-- ........................................... -->
        <!-- MAIN CONTENT - END -->
        <!-- ........................................... -->
        <!-- ........................................... -->
        <!-- RIGHT SIDEBAR - START -->
        <!-- ........................................... -->
        <div class="web-right">
          <div class="p-fixed">
            <div class="ads-box">
              <p class="small-title">Ads</p>
              <img
                src="https://appinventiv.com/wp-content/uploads/sites/1/2017/07/Location-Based-Services-A-Flourishing-Technology.png"
              />
            </div>

            <div class="trends_ads">
              <p class="small-title">Trending</p>
              <ul>
                <li>
                  <NuxtLink to="/"
                    ><i class="fa-solid fa-arrow-trend-up"></i> Secondhand
                    bikes</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink to="/"
                    ><i class="fa-solid fa-arrow-trend-up"></i> Secondhand
                    cars</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink to="/"
                    ><i class="fa-solid fa-arrow-trend-up"></i> Secondhand
                    laptos</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink to="/"
                    ><i class="fa-solid fa-arrow-trend-up"></i> Girl
                    friends</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink to="/"
                    ><i class="fa-solid fa-arrow-trend-up"></i> Rooms
                    rents</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink to="/"
                    ><i class="fa-solid fa-arrow-trend-up"></i> Cook
                    maid</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink to="/"
                    ><i class="fa-solid fa-arrow-trend-up"></i> Pandit</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink to="/"
                    ><i class="fa-solid fa-arrow-trend-up"></i> Best programmer
                    programmer languages</NuxtLink
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- ........................................... -->
        <!-- RIGHT SIDEBAR - END -->
        <!-- ........................................... -->
      </div>
    </div>

    <!-- <slot></slot> -->
  </div>
</template>
