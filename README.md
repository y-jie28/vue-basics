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


## Binding Attributes
Directive to Use: v-bind
v-bind directive short-hand: Adding colon in front of the attribute; e.g. v-bind:href -> :href


## Listening to Events
Directive to Use: v-on:name_of_event
v-on directive short-hand: Adding @ in front of the event name (usually not valid attribute); e.g. v-on:click -> @click

The v-model directive is a combination of binding and using events in Vue. 
Technically, the below are both doing the same thing. 

v-model is a syntatic sugar for binding to value, and listening for changes to update the data. 

```
<label>First Name</label>
<input type="text" v-model="firstName" />

<label>Last Name</label>
<input type="text" :value="lastName" @input="updateLastName" /> 
```
