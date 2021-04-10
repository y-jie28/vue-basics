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
 - Conditional Rendering / The v-show Directive


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

## Conditional Rendering / The v-show Directive

Some notes: 

#### v-show Directive
- Changes the __display__ CSS property. If __false__, then display will be set to __none__. Otherwise, uses the default __display__.
- Does _NOT_ work with the __v-else__ directive.
- Does _NOT_ work with the __template__ tag.
- Expensive on __Load__ as it adds an element to the document; but Cheap on __Toggle__, quick and easy. 
- ___Should be used if elements will constantly appear/disappear on the page___.

#### v-if Directive
- Will remove or add the element depending on the condition.
- Does work with the __v-else__ directive.
- Does work with the __template__ tag. 
- Main Advantage: Cheap on Load because it's ___lazy___. Saves resource on the client's machine because it will never add an element to the document if condition is not met. 
- Expensive on __Toggle__. Because adding and removing an element at a same spot is not easy. 
- ___Should be used if elements will rarely appear/disappear on the page___.
