<template>
  <div>
    <Html>
      <Head>
        <Title>Analysis - Best Desires, Sells, Peoples, etc.</Title>
        <Meta
          name="description"
          content="Analysis - Best Desires, Sells, Peoples, etc."
        />
      </Head>
    </Html>

    <div class="w-title">
      <h3>Analysis - Trending Pin Codes</h3>
    </div>

    <div class="trends">
      <table>
        <thead>
          <tr>
            <th>Sl</th>
            <th>Pin</th>
            <th>Traffics (per week)</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>783361</td>
            <td>34523434</td>
            <td><NuxtLink to="/">view</NuxtLink></td>
          </tr>
          <tr>
            <td>2</td>
            <td>783367</td>
            <td>345343</td>
            <td><NuxtLink to="/">view</NuxtLink></td>
          </tr>
          <tr>
            <td>3</td>
            <td>783369</td>
            <td>345232</td>
            <td><NuxtLink to="/">view</NuxtLink></td>
          </tr>
          <tr>
            <td>4</td>
            <td>783334</td>
            <td>345123</td>
            <td><NuxtLink to="/">view</NuxtLink></td>
          </tr>
          <tr>
            <td>5</td>
            <td>783378</td>
            <td>345342</td>
            <td><NuxtLink to="/">view</NuxtLink></td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="w-title">
      <h3>Analysis - Trending Desires</h3>
    </div>

    <div class="trends">
      <table>
        <thead>
          <tr>
            <th>Sl</th>
            <th>Keywords</th>
            <th>Total posts</th>
            <th>Traffics (per week)</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Secondhand bikes</td>
            <td>2367</td>
            <td>122354534</td>
            <td><NuxtLink to="/">view</NuxtLink></td>
          </tr>
          <tr>
            <td>2</td>
            <td>Secondhand cars</td>
            <td>3466</td>
            <td>54643</td>
            <td><NuxtLink to="/">view</NuxtLink></td>
          </tr>
          <tr>
            <td>3</td>
            <td>Secondhand laptops</td>
            <td>6454</td>
            <td>456456</td>
            <td><NuxtLink to="/">view</NuxtLink></td>
          </tr>
          <tr>
            <td>4</td>
            <td>Room rents</td>
            <td>234</td>
            <td>23453234</td>
            <td><NuxtLink to="/">view</NuxtLink></td>
          </tr>
          <tr>
            <td>5</td>
            <td>Girl friends</td>
            <td>356</td>
            <td>34556</td>
            <td><NuxtLink to="/">view</NuxtLink></td>
          </tr>
        </tbody>
      </table>
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
