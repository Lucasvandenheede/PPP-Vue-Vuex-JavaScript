<template>
  <div class="main">
    <div class="wrapper">
      <form @submit.prevent="submitForm" class="myForm">
        <div class="inputDiv">
          <label for="nameInput">Name</label>
          <input
            v-model="user.name"
            :class="userValidations.name ? 'isError' : ''"
            type="text"
            id="nameInput"
            placeholder="John"
          />
        </div>
        <div class="inputDiv">
          <label for="surNameInput">Surname</label>
          <input
            v-model="user.surname"
            :class="userValidations.surname ? 'isError' : ''"
            type="text"
            id="surNameInput"
            placeholder="Doe"
          />
        </div>
        <div class="inputDiv">
          <label for="emailInput">Email</label>
          <input
            v-model="user.email"
            :class="userValidations.email ? 'isError' : ''"
            type="text"
            id="emailInput"
            placeholder="john.doe@example.com"
          />
        </div>
        <div class="inputDiv">
          <label for="country">Country</label>
          <select
            v-model="user.country"
            class="selected"
            name="country"
            id="country"
          >
            <option
              v-for="country in getCountries"
              :key="country.id"
              :value="country.id"
            >
              {{ country.name }}
            </option>
          </select>
        </div>
        <div class="inputDiv">
          <label for="adress">Adress</label>
          <textarea
            v-model="user.address"
            name="address"
            id="address"
            rows="5"
          ></textarea>
        </div>
        <div class="inputDiv">
          <h4>Hobbies</h4>
        </div>
        <div class="checkBoxDiv">
          <div v-for="hobby in hobbies" :key="hobby.id">
            <label for="checkbox1">{{ hobby.name }}</label>
            <input
              v-model="user.hobbies"
              type="checkbox"
              id="checkbox1"
              :value="hobby.id"
            />
          </div>
        </div>
        <div class="inputDiv">
          <h4>Gender</h4>
        </div>
        <div class="checkBoxDiv">
          <div v-for="gender in genders" :key="gender.id">
            <label :for="gender.name">{{ gender.name }}</label>
            <input
              v-model="user.gender"
              :value="gender.id"
              type="radio"
              :id="gender.name"
              name="gender"
            />
          </div>
        </div>
        <div>
          <input @change="onFileChange" type="file" hidden ref="myFileInput" />
          <button
            class="fileBtn"
            type="button"
            @click="$refs.myFileInput.click()"
          >
            {{ file?.name ? 'Change File' : 'Select File' }}
          </button>
          <span v-if="file?.name">{{ file.name }}</span>
        </div>
        <IsAccept v-model="user.isAccept" />
        <button type="submit" class="submitBtn">Submit</button>
      </form>
    </div>
    <div class="wrapper">
      <p>User info: {{ user }}</p>
      <p>User country: {{ getCountryNameById(user.country) }}</p>
    </div>
  </div>
  <div style="margin-top: 25px">
    <DynamicInput />
  </div>
</template>

<script>
import DynamicInput from './components/DynamicInput.vue';
import IsAccept from './components/IsAccept.vue';

export default {
  name: 'App',
  data() {
    return {
      user: {
        name: '',
        surname: '',
        email: '',
        country: 1,
        address: '',
        hobbies: [],
        gender: 1,
        file: {},
        isAccept: true,
      },
      countries: [
        { id: 1, name: 'Belgium' },
        { id: 2, name: 'Germany' },
        { id: 3, name: 'France' },
      ],
      hobbies: [
        { id: 1, name: 'Football' },
        { id: 2, name: 'Basketball' },
        { id: 3, name: 'Volleyball' },
      ],
      genders: [
        { id: 1, name: 'Male' },
        { id: 2, name: 'Female' },
        { id: 3, name: 'Other' },
      ],
      file: {},
      userValidations: {
        name: false,
        surname: false,
        email: false,
      },
    };
  },
  methods: {
    onFileChange(event) {
      console.log(event.target.files);
      this.user.file = {
        name: event.target.files[0].name,
        size: event.target.files[0].size,
        type: event.target.files[0].type,
      };
      this.file = { name: event.target.files[0].name };
    },
    getCountryNameById(id) {
      return this.getCountries.find(country => country.id === id).name;
    },
    submitForm() {
      const validationResult = this.validateData();
      this.userValidations = validationResult;
      if (Object.values(validationResult).includes(true)) {
        alert('Form is invalid');
      } else {
        this.user = {
          name: '',
          surname: '',
          email: '',
          country: 1,
          address: '',
          hobbies: [],
          gender: 1,
          file: {},
        };
        this.file = {};
      }
    },
    validateData() {
      const obj = {
        name: this.user.name.trim() === '',
        surname: this.user.surname.trim() === '',
        email: this.user.email.trim() === '',
      };
      console.log(obj);
      return obj;
    },
  },
  computed: {
    getCountries() {
      return this.countries;
    },
  },
  components: {
    IsAccept,
    DynamicInput,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

.main {
  width: 100%;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  gap: 10px;
}

.wrapper {
  width: 50%;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 1px 3px 3px 1px;
}

.myForm {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.inputDiv {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.submitBtn {
  border: none;
  padding: 8px;
  border-radius: 10px;
  color: white;
  background-color: darkgreen;
  cursor: pointer;
}

.submitBtn:hover {
  background-color: green;
}

input {
  padding: 5px;
}

.selected {
  padding: 5px;
}

.checkBoxDiv {
  display: flex;
  justify-content: space-around;
}

.fileBtn {
  border: none;
  padding: 5px;
  border-radius: 10px;
  color: white;
  background-color: blue;
  cursor: pointer;
}

.fileBtn:active {
  transform: scale(0.95);
}

.isError {
  border-color: red !important;
}
</style>
