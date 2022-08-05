<template>
	<div class="popup">
		<div class="popup-inner">
			<h1>Parameters</h1>
             <div>
                <b-form-group
                    label="Name:"
                    label-for="nested-street"
                    label-cols-sm="3"
                    label-align-sm="right"
                    
                >
                <b-form-input id="nested-street" v-model="name"></b-form-input>
                </b-form-group>
                <div class="float-container">
                <div class="float-child">
                <b-card bg-variant="light">
                <b-form-group 
                    label="RadioButton Options:" 
                    label-align-sm="right"
                    v-slot="{ ariaDescribedby }"> 
                <b-form-radio-group
                    class="pt-2"
                    :options="['Air', 'Courier', 'Mail']"
                    :aria-describedby="ariaDescribedby"
                    v-model="radioButtonSelected"
                ></b-form-radio-group>
                </b-form-group>
                </b-card>
                </div>
                <div class="float-child">

                <b-card bg-variant="light" inline>
                <b-form-group label="CheckBox Options:" v-slot="{ ariaDescribedby }"> 
                <b-form-checkbox-group
                    
                    id="checkbox-group-1"
                    v-model="selected"
                    :aria-describedby="ariaDescribedby"
                    name="flavour-2"
                    :options="checkBoxOptions"
                    stacked
                >
                </b-form-checkbox-group>
                </b-form-group>
                </b-card>
                </div>
                </div>


    
            </div>
			<button class="popup-close" @click="close">
				Close parameters
			</button>
		</div>
	</div>
</template>

<script>
export default {
    data() {
      return {
        selected: [], // Must be an array reference!
        radioButtonSelected: [], // Must be an array reference!
        name: undefined,
        checkBoxOptions: [
          { text: 'Orange', value: 'orange' },
          { text: 'Apple', value: 'apple' },
          { text: 'Pineapple', value: 'pineapple' },
          { text: 'Grape', value: 'grape'},
         { text: 'Otro', value: 'otro'}
        ],
        radioButtonOptions: [
          { text: 'Uno', value: 'uno' },
          { text: 'Dos', value: 'dos' },
          { text: 'Tres', value: 'tres' }
        ]
      }
    },
    methods: {
        close() {
            console.log (this.selected)
            console.log (this.radioButtonSelected)
            console.log (this.name)
            this.$emit('close')
        }
    }
}
</script>

<style>
.popup {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
  
	z-index: 99;
	background-color: rgba(0, 0, 0, 0.2);
	
	display: flex;
	align-items: center;
	justify-content: center;
	
}
.popup-inner {
		background: #FFF;
		padding: 32px;
        width: 800px;
        height: 500px;
}
.float-container {
    border: 3px solid #fff;
    padding: 20px;
}

.float-child {
    width: 50%;
    float: left;
    padding: 20px;
} 
</style>