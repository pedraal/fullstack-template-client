<template>
  <section class="section">
    <div class="container">
      <div class="columns is-centered shadowbox">
        <div class="column is-4 is-flex">
          <div class="content">
            <p class="heading">Informations</p>
            <p>
              <span class="icon has-text-danger">
                <i class="fas fa-phone"></i>
              </span>
              001-1234-88888
            </p>
            <p>
              <span class="icon has-text-danger">
                <i class="fas fa-paper-plane"></i>
              </span>
              ecorp-contact@example.com
            </p>
            <p class="heading">Address</p>
            <p>
              <span class="icon has-text-danger">
                <i class="fas fa-map-marker-alt"></i>
              </span>
              256 Broadway
              <br />
              <span style="margin-right: 28px;"></span>New York, NY 10007, USA
            </p>
          </div>
        </div>
        <div class="column is-8">
          <h2 class="title has-text-centered">Nous envoyer un message</h2>
          <Form />
        </div>
      </div>
      <Map id="mapWrapper" :interactive="false" />
    </div>
  </section>
</template>

<script>
import Form from "@/components/contact/Form.vue";
import Map from "@/components/Map.vue";

import Strapi from "strapi-sdk-javascript/build/main";
const apiUrl = process.env.API_URL || "http://localhost:1337";
const strapi = new Strapi(apiUrl);

export default {
  components: {
    Form,
    Map
  },
  data() {
    return {
      // msg: "Hello world!",
      // email: "pgolfier.01@gmail.com"
    };
  },
  methods: {
    // async sendMail() {
    //   await strapi.request("post", "/email", {
    //     data: {
    //       to: "pgolfier.pro@gmail.com",
    //       from: "test@strapi.io",
    //       replyTo: "no-reply@strapi.io",
    //       subject: "Use strapi email provider successfully",
    //       text: "new message from " + this.email + " : " + this.msg,
    //       html: "new message from " + this.email + " : " + this.msg
    //     }
    //   });
    // }
    makeMapInteractive() {
      this.mapIsInteractive = true;
    }
  },
  pageTransition: {
    name: "page",
    mode: "out-in"
  }
};
</script>

<style lang="scss" scoped>
.columns {
  border-radius: 15px;
  overflow: hidden;
  margin: 4rem 0;
  .column.is-4 {
    background: #666;
    position: relative;
    &::after {
      content: "";
      background-image: url(/images/globe-doted.png);
      background-repeat: no-repeat;
      background-position: center;
      opacity: 0.3;
      display: block;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      position: absolute;
      z-index: 0;
    }
    .content {
      color: white;
      position: relative;
      z-index: 2;
    }
  }
  .column.is-8 {
    padding: 2rem;
  }
}
</style>


