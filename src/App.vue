<script lang="ts">
import {defineComponent, ref} from 'vue';
import {darkTheme } from 'naive-ui';
import {zhCN, dateZhCN} from 'naive-ui';

export default defineComponent({
  setup() {
    return {
      darkTheme: darkTheme,
      zhCN,
      dateZhCN,
      formValue: ref({
        email: 'pvduc.dev@gmail.com',
        password: '',
      }),
    }
  }
})
</script>

<template>
  <n-config-provider
    :theme="darkTheme"
    :locale="zhCN"
    :date-locale="dateZhCN"
    style="height: 100vh; width: 100%; display: flex; justify-content: center; align-items: center;background-image: url('/bg.svg'); background-repeat: no-repeat;background-size: cover;background-position: center center;"
  >
    <n-global-style/>
    <n-card
      size="huge"
      title="Sign in with Pv Duc account"

      style="max-width: 420px"
    >
      <n-form
        :model="formValue"
        @submit.prevent=""
      >
        <n-form-item
          path="email"
          label="Email"
        >
          <n-input
            type="text"
            show-password-on="mousedown"
            placeholder="Email"
            v-model:value="formValue.email"
          />
        </n-form-item>
        <n-form-item
          path="password"
          label="Password"
        >
          <n-input
            type="password"
            show-password-on="mousedown"
            placeholder="Password"
            v-model:value="formValue.password"
          />
        </n-form-item>
        <n-row>
          <n-col
            :span="24"
            style="display: flex; justify-content: end; margin-bottom: 8px"
          >
            <n-text
              type="info"
            >
              Forgot password
            </n-text>
          </n-col>
          <n-col
            :span="24">
            <n-button
              block
              type="primary"
            >
              Sign in
            </n-button>
          </n-col>
          <n-divider/>
          <n-col
            :span="24">
            <n-button
              block
              ghost
              type="warning"
              attr-type="submit"
            >
              Sign in with Google
            </n-button>
          </n-col>
          <n-col
            :span="24"
            style="margin-top: 12px"
          >
            <n-text>Don't you have an account?</n-text>
            <router-link to="/sign-up">
              <n-text style="margin-left: 4px" type="info">Sign up</n-text>
            </router-link>
          </n-col>
        </n-row>
      </n-form>
    </n-card>
  </n-config-provider>
</template>

<style>
</style>
