<template>

<div class = 'myStyle'>
 
    <div style = "width:50%">
        <b-table :items="userList" :fields="fields">
            <template v-slot:cell(Delete)="{ item }">
            <span><b-btn @click="deleteItem(item)"> <i className="bi bi-trash3-fill" style='color:red'></i></b-btn></span>
            </template>
        </b-table>
        <!-- <b-table striped hover :items= "userList"></b-table> -->
    </div>
</div>
</template>
<script>
 
export default {
    data () {
        return {
            userList:[],
            fields: ["name", "age", "Delete"]
        }
    },
    mounted () {
        this.emitter.on ('newUser', (user) =>{
            this.userList.push (user)
            console.log ('bottom ',this.userList)
        });
    },
    methods: {
        deleteItem(item) { 
            this.userList = this.userList.filter (user => user.name != item.name);
        }
    }
}
</script>
<style scoped>
.myStyle {
    background-color: pink;
    margin:1%;
    height:30%;
}

</style>