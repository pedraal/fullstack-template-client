<template>
  <div>
    <form id="form" @submit.prevent="submitForm">
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">De</label>
        </div>
        <div class="field-body">
          <div class="field">
            <p class="control is-expanded has-icons-left">
              <input class="input" type="text" placeholder="Nom" />
              <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
              </span>
            </p>
          </div>
          <div class="field">
            <p class="control is-expanded has-icons-left">
              <input
                class="input is-success"
                type="email"
                placeholder="Votre email"
                value="john@doe.com"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
            </p>
          </div>
        </div>
      </div>

      <div class="field is-horizontal">
        <div class="field-label"></div>
        <div class="field-body">
          <div class="field is-expanded">
            <div class="field has-addons">
              <p class="control">
                <a class="button is-static">+33</a>
              </p>
              <p class="control is-expanded">
                <input class="input" type="tel" placeholder="Votre numéro de téléphone" />
              </p>
            </div>
            <p class="help">Ne pas entrer le premier zéro</p>
          </div>
        </div>
      </div>

      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Département</label>
        </div>
        <div class="field-body">
          <div class="field is-narrow">
            <div class="control">
              <div class="select is-fullwidth">
                <select>
                  <option>Développement de business</option>
                  <option>Marketing</option>
                  <option>Ventes</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Sujet</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <input
                class="input is-danger"
                type="text"
                placeholder="ex. Opportunité de partenariat"
              />
            </div>
            <p class="help is-danger">Ce champ est requis</p>
          </div>
        </div>
      </div>

      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Message</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <textarea class="textarea" placeholder="En quoi pouvons-nous vous aider?"></textarea>
            </div>
          </div>
        </div>
      </div>

      <div class="field is-horizontal">
        <div class="field-label">
          <!-- Left empty for spacing -->
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control is-flex">
              <input type="submit" class="button is-danger" value="Envoyer le formulaire" />
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "test@example.com"
    };
  },
  methods: {
    submitForm() {
      console.log("form submited");
      console.log(this.$validator.isEmail(this.email));
    }
  }
};
</script>

<style lang="scss" scoped>
</style>