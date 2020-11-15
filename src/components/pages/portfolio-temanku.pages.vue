<template>
  <div class="">
    <input type="checkbox" name="darkmode" id="darkmode" hidden>
    <main>
      <topNavigation />
      <div class="contain">
        <h1 class="headline-pages">Portfolio Sample</h1>
        <h4 class="content-title">LKPP Temanku</h4>
        <div class="portfolio-img">
          <img src="../../assets/images/portfolio/detail/port-temanku.jpg" alt="">
        </div>
        <div class="content-description">
          Temanku is part of LKPP that handles problem related to procurement consulting.
          <p class="small-text font-color:muted">
            <b>Build with :</b> HTML5, CSS3(SCSS), Javascript (JQuery), Gulp (as CSS Preproccessor) <br>
            <b>Design Tools :</b> Figma, Adobe Photoshop 
          </p>
        </div>
        <router-link to="/">
          <div class="sn-btn">
            back to home
          </div>
        </router-link>
        <div class="port-contact-link">
          <p>Do you feel "the zing" to me now? you know how to <router-link to="/contact"> <span> reach me. </span></router-link></p>
        </div>
      </div>
      <Footer />
    </main>
  </div>
</template>
<script>
import topNavigation from "@/components/nav-component/top-nav"
import Footer from "@/components/footer-component/footer.component"
export default {
  name: 'portTemanku',
  components: {
    topNavigation,
    Footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
