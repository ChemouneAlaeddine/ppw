<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">

      <!-- b-form-group id="exampleInputGroup3"
                    label="Campus:"
                    label-for="exampleInput3">
        <b-form-select id="exampleInput3"
                      :options="campus"
                      required
                      v-model="form.campus">
        </b-form-select>
      </b-form-group>

      <b-form-group id="example1InputGroup3"
                    label="UF:"
                    label-for="exampleInput3">
        <b-form-select id="example1Input3"
                      :options="uf"
                      required
                      v-model="form.uf">
        </b-form-select>
      </b-form-group -->
      
      <b-form-group id="exampleInputGroup2"
                    label="Name:"
                    label-for="exampleInput2">
        <b-form-input id="exampleInput2"
                      type="text"
                      v-model="form.name"
                      required
                      placeholder="Enter name">
        </b-form-input>
      </b-form-group>

      <b-form-group id="example2InputGroup2"
                    label="Surname:"
                    label-for="exampleInput2">
        <b-form-input id="example2Input2"
                      type="text"
                      v-model="form.surname"
                      required
                      placeholder="Enter surname">
        </b-form-input>
      </b-form-group>

      <b-form-group id="exampleInputGroup1"
                    label="Email address:"
                    label-for="exampleInput1"
                    description="We'll never share your email with anyone else.">
        <b-form-input id="exampleInput1"
                      type="email"
                      v-model="form.email"
                      required
                      placeholder="Enter email">
        </b-form-input>
      </b-form-group>

      <b-form-group id="example3InputGroup2"
                    label="Fullname:"
                    label-for="exampleInput2">
        <b-form-input id="example3Input2"
                      type="text"
                      v-model="form.name"
                      required
                      placeholder="Enter fullname">
        </b-form-input>
      </b-form-group>

      <b-form-group id="example4InputGroup2"
                    label="Result:"
                    label-for="exampleInput2">
        <b-form-input id="example4Input2"
                      type="text"
                      v-model="form.float"
                      required
                      placeholder="result">
        </b-form-input>
      </b-form-group>
      
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import axios from 'axios';
var sleep = require('system-sleep');

export default {
  data () {
    return {
      form: {
        email: '',
        name: '',
        surname: '',
        float: 0
      },
      campus: [0,0,0,0,0],
      uf: [],
      show: true
    }
  },
  created() {
    axios
    .get("http://localhost:3000/data/campus.json")
    .then(response => {
      for(let i=0; i<response.data.campus.length; i++){
        this.campus[i] = response.data.campus[i].name;
        //console.log(this.campus[i]);
      }
    });
  },
  methods: {
    onSubmit (evt) {
      console.log("submit");
      console.log(evt);
      //sleep(20000);

      //evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset (evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.email = '';
      this.form.name = '';
      this.form.surname = '';
      this.form.float = 0;
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => { this.show = true });
    }
  }
}
</script>

<style scoped>

</style>