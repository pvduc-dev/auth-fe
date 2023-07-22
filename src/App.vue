<script lang="ts">
import {defineComponent, ref} from 'vue';
import {darkTheme, dateZhCN, FormInst, FormRules, zhCN} from 'naive-ui';

export default defineComponent({
  setup() {
    const rules: FormRules = {
      email: [
        {
          required: true,
          message: 'E-mail must be not empty',
          trigger: ['blur', 'input']
        },
        {
          pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
          message: 'E-mail must be valid',
          trigger: ['blur', 'input']
        }
      ],
      password: [
        {
          required: true,
          message: 'Password is required',
          trigger: ['blur', 'input']
        },
      ],
    }
    const formRef = ref<FormInst | null>(null);
    const formValue = ref({
      email: '',
      password: '',
    });
    return {
      darkTheme: darkTheme,
      zhCN,
      dateZhCN,
      formValue,
      formRef,
      rules,
      async submit() {
        try {
          await formRef.value?.validate()
        } catch (e) {
        }
      }
    }
  }
})
</script>

<template>
  <n-config-provider
    :theme="darkTheme"
    :locale="zhCN"
    :date-locale="dateZhCN"
    class="h-screen w-full flex justify-center items-center bg-no-repeat bg-cover bg-center"
    style="background-image: url('/bg.svg');"
  >
    <n-global-style/>
    <n-card
      size="huge"
      title="Sign in with your account"
      class="max-w-md"
    >
      <n-form
        size="large"
        :model="formValue"
        :rules="rules"
        ref="formRef"
        @submit.prevent="submit"
      >
        <n-row>
          <n-col
            :span="24"
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
          </n-col>
          <n-col
            :span="24"
          >
            <n-form-item
              path="password"
              label="Password"
            >
              <n-input
                type="password"
                show-password-on="click"
                placeholder="Password"
                v-model:value="formValue.password"
              />
            </n-form-item>
          </n-col>
          <n-col
            :span="24"
            class="flex justify-end mb-2"
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
              size="large"
              attr-type="submit"
            >
              Sign in
            </n-button>
          </n-col>
          <n-divider/>
          <n-col
            :span="24">
            <n-button
              block
              size="large"
              type="warning"
              attr-type="button"
            >
              Sign in with Google
            </n-button>
          </n-col>
          <n-col
            :span="24"
            class="mt-3"
          >
            <n-text>Don't you have an account?</n-text>
              <n-text
                class="ml-0.5 font-medium"
                type="info"
              >
                Sign up
              </n-text>
          </n-col>
        </n-row>
      </n-form>
    </n-card>
  </n-config-provider>
</template>
