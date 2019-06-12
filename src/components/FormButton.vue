<template>
  <div class="form-button"
       :class="{ loading: loading, disabled: disabled }">
    <button class="form-button-field"
            :disabled="disabled"
            @click="propagateClick()">
      <span class="form-button-field-label">
        {{label}}
      </span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'form-button',
  props: {
    label: {
      type: String,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
    };
  },
  methods: {
    propagateClick() {
      this.$emit('click');
    },
  },
};
</script>

<style lang="scss">
@import '../assets/variables';

.form-button {
  display: block;
  position: relative;
  height: 2.75em;
  box-shadow: 0px 1px 2px 0 $form-button-color-shadow;

  &.loading {
    pointer-events: none;

    &::before {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      z-index: 1;
      background: $form-button-loader-overlay-color-back;
    }

    &::after {
      content: '';
      display: block;
      position: absolute;
      top: 50%;
      right: 1em;
      z-index: 1;
      height: 1.8em;
      width: 1.8em;
      margin-top: -0.9em;
      border: solid 0.4em $form-button-loader-spinner-color-back;
      border-left-color: $form-button-loader-spinner-pie-color-back;
      border-radius: 50%;
      text-align: center;
      transform: translateZ(0);
      animation: spin 1s infinite linear;
    }

    .comment-input-button-label {
      opacity: 0.25;
    }
  }
}

.form-button-field {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  padding-left: 1em;
  padding-right: 1em;
  outline: 0;
  border: 0;
  font-size: 1em;
  text-align: center;
  background-color: $form-button-color-back;
  cursor: pointer;
  transition: background-color 0.2s linear;

  &:hover {
    background-color: $form-button-color-back-hover;
  }
}

.form-button-field-label {
  font-size: 1.25em;
  color: $form-button-label-color-text;
}
</style>
