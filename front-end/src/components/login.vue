<template>
    <div id="login">
        <h1>Login to access webpage</h1>
        <input type="text" name="username" v-model="input.username" placeholder="Username" />
        <input type="password" name="password" v-model="input.password" placeholder="Password" />
        <button type="button" v-on:click="login()">Login</button>
    </div>
</template>

<script>
import axios from 'axios';

    export default {
        name: 'Login',
        data() {
            return {
                input: {
                    username: "",
                    password: ""
                }
            }
        },
        methods: {
            login() {
                if(this.input.username != "" && this.input.password != "") {

                    var user = {
                        username: this.input.username,
                        password: this.input.password
                    }
                    
                    axios.post('http://localhost:3000/login', user);

                    axios.get('http://localhost:3000/login').then(result => {
                        if(result.data == 'false') {
                            this.$router.replace({ path: "/" });
                        }else{
                            this.$router.replace({ path: "/Home" });
                        }
                    });
                } else {
                    console.log("A username and password must be present");
                }
            }
        }
    }
</script>

<style scoped>
    #login {
        width: 500px;
        border: 1px solid #CCCCCC;
        background-color: #FFFFFF;
        margin: auto;
        margin-top: 200px;
        padding: 20px;
    }
</style>