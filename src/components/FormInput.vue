<template>
  <div class="form-input">
    <label class="form-input-label"
           v-bind:for="name">
      <span class="form-input-label-content">
        {{label}}
      </span>
    </label>
    <input class="form-input-field"
       spellcheck="false"
       autocapitalize="none"
       autocorrect="off"
       autocomplete="off"
       ref="input"
       v-bind:type="type"
       v-validate="validation"
       v-bind:class="{ error: fields[name] && fields[name].dirty && errors.has(name) }"
       v-bind:id="name"
       v-bind:name="name"
       v-bind:placeholder="placeholder"
       v-bind:autofocus="autofocus"
       v-bind:value="value"
       v-on:input="updateValue($event.target.value)">
  </div>
</template>

<script>
export default {
  name: 'form-input',
  inject: ['$validator'],
  props: {
    label: {
      type: String,
    },
    placeholder: {
      type: String,
    },
    validation: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    name: {
      type: String,
      required: true,
    },
    value: {
      type: String,
    },
    autofocus: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
    };
  },
  methods: {
    updateValue(value) {
      this.$emit('input', value);
    },
  },
};
</script>

<style lang="scss">
@import '../assets/variables';

.form-input {
  display: block;
  position: relative;
  height: 3.75em;
}

.form-input-label {
  display: block;
  position: absolute;
  top: -0.3em;
  z-index: 2;
  padding: 0.75em;
  user-select: none;
}

.form-input-label-content {
  padding-left: 0.2em;
  font-size: 0.75em;
  font-weight: bold;
  color: $form-input-label-color-text;
}

.form-input-field {
  display: block;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 1.5em 0.75em 0.5em 0.75em;
  border: 1px solid $form-input-field-color-border;
  outline: 0;
  font-size: 1.125em;
  font-weight: 300;
  color: $form-input-field-color-text;
  box-sizing: border-box;

  &.error {
    border-color: $form-input-field-color-border-error;
  }
}
</style>
