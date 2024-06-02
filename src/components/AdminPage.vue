<script setup>
import { reactive } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";

const formData = reactive({
  username: "",
  password: "",
});

/*
 * vuelidate
 * https://vuelidate-next.netlify.app/advanced_usage.html#composition-api
 */
const rules = {
  username: {
    required: helpers.withMessage("Username is required", required),
  },
  password: {
    required: helpers.withMessage("Password is required", required),
  },
};

const v$ = useVuelidate(rules, formData);

async function submit(e) {
  e.preventDefault();
  //https://stackoverflow.com/a/75471262
  const result = await v$.value.$validate();
  if (result) {
  } else {
  }
  // console.log("isCorrect is: ", isCorrect);
}
</script>

<template>
  <div class="login-container d-flex flex-column align-center justify-center">
    <div class="form-wrapper elevation-10">
      <p class="text-h4 font-weight-bold text-center mt-3">CMS Login</p>
      <form>
        <label>Username</label>
        <input
          name="username"
          type="text"
          required
          v-model="formData.username"
        />
        <span
          v-for="error in v$.username.$errors"
          :key="error.$uid"
          class="error-msg"
        >
          {{ error.$message }}
        </span>
        <!-- <span class="error-msg">{{ error?.username }}</span> -->
        <br />

        <label>Password</label>
        <input
          name="password"
          type="password"
          required
          v-model="formData.password"
        />
        <span
          v-for="error in v$.password.$errors"
          :key="error.$uid"
          class="error-msg"
        >
          {{ error.$message }}
        </span>

        <br />
        <v-btn @click="submit" class="mt-5" elevation="4" color="indigo"
          >LOGIN</v-btn
        >
      </form>
    </div>
  </div>
</template>

<style scoped>
.error-msg {
  color: crimson;
  font-size: smaller;
}
input:focus {
  outline: none;
}
.login-container {
  height: 100vh !important;
}
div.form-wrapper {
  border: 1px solid #aaa;
  border-radius: 10px;
}
form {
  max-width: 400px;
  /* margin: 30px auto; */
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}

label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  letter-spacing: 1px;
}

input {
  display: block;
  border: none;
  border-bottom: 1px solid #ddd;
}
</style>
