 # Vue Fundamentals
 
 - Working with Data
 - Accessing the Instance Data
 - Methods
 - Directives
 - Two-way data binding
 - Binding Attributes
 - Outputting Raw HTML
 - Listening to Events
 - Passing on Data with Events
 - Event Modifiers
 - Keyboard Events and Modifiers
 - v-model Modifiers
 - Computed Properties
 - Watchers
 - Binding Classes
 - Binding Styles


## Working with Data / Methods / Computed Properties / Watchers
Four properties covered: 1) Data, 2) Methods, 3) Computed Properties and 4) Watchers
###### Data
data() { return { prop: value } }
###### Methods
methods: function( action )
###### Computed
A combination of data and methods. Should always return a value. 
Should NOT be used with asynchronous tasks. 
computed: function( action | return {} ) 
###### Watchers
Not commonly used. Developers uses watchers to perform additional tasks when a value is changed. 
Handy to use when performing asynchronous tasks. 
watch: { val(newVal, oldVal) { action } }


## Binding Attributes
Directive to Use: v-bind
v-bind directive short-hand: Adding colon in front of the attribute; e.g. v-bind:href -> :href


## Listening to Events
Directive to Use: v-on:name_of_event
v-on directive short-hand: Adding @ in front of the event name (usually not valid attribute); e.g. v-on:click -> @click


## v-model
The v-model directive is a combination of binding and using events in Vue. 
Technically, the below are both doing the same thing. 

v-model is a syntatic sugar for binding to value, and listening for changes to update the data. 

```
<label>First Name</label>
<input type="text" v-model="firstName" />

<label>Last Name</label>
<input type="text" :value="lastName" @input="updateLastName" /> 
```

## Binding Classes / Styles
Check if condition is true or false. If it is true, it adds the class, and removes if false.

```
<input type="checkbox" v-model="{ purple: isPurple }" />
```

If isPurple is true (using input checkbox to set to true or false in this case), then adds the class isPurple; else removes it. 

Binding styles is about the same. 
