<template>
  <div class="">
    <input type="checkbox" name="darkmode" id="darkmode" hidden>
    <main>
      <topNavigation />
      <div class="contain">
        <h1 class="headline-pages">Portfolio Sample</h1>
        <h4 class="content-title">Docotel Company's Web</h4>
        <div class="portfolio-img">
          <img src="../../assets/images/portfolio/detail/port-doco.jpg" alt="">
        </div>
        <div class="content-description">
          Docotel Company Website is a company-web that contain a lot of information about the company, such as location, board the directures of this company, etc.
          <p class="small-text font-color:muted">
            <b>Build with :</b> HTML5, CSS3(SCSS), Javascript (JQuery), Gulp (as CSS Preproccessor) <br>
            <b>Other setup :</b> SEO configuration (google console), Google Analytic, Set up for page load speed. 
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
  name: 'portDoco',
  components: {
    topNavigation,
    Footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
