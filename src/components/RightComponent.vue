<template>
<div class = 'myStyle'>

    <b-input-group prepend="New user" class="mt-3">
    <b-form-input placeholder= "Name" v-model ='name'></b-form-input>
    <b-form-input placeholder= "Age" v-model ='age'></b-form-input>
    <b-input-group-append>
        <b-button @click= "inputNewUser" variant="info">Enter new user</b-button>
    </b-input-group-append>
    </b-input-group>
    <div>
        <b-table striped hover :items= "userList"></b-table>
    </div>
   
 
</div>

</template>
<script>

export default {
    components: {

    },
    data() {
        return {
            name: undefined,
            age: undefined,
            userList: [],

        }
    },
 
    methods: {
        inputNewUser() {
            // `this` inside methods points to the current active instance

           this.userList.push ({'name':this.name,'age':this.age})
           this.emitter.emit ('newUser', {'name':this.name,'age':this.age})
           this.name= undefined;
           this.age=undefined;
           console.log (this.userList)
        },
    
    }
}
</script>
<style scoped>
.myStyle {
    width: 50%;
    background-color: yellow;
    color: black;
    margin:1%;
    padding: 1%
}
</style>