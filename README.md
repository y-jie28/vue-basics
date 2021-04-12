 # Vue Fundamentals
 
 - Working with Data / Methods / Computed Properties / Watchers
 - Directives
    - v-cloak
    - v-bind (Binding Attributes)
    - v-on (Listening to Events)
    - v-html (Outputting Raw HTML)
    - v-model (Two-way data binding)
    - v-if & v-else-if & v-else / v-show / v-for
 - Binding Classes / Binding Styles
 - Conditional Rendering / The v-show and v-if Directive
 - List Rendering / The v-for Directive

## Why Vue.js? / Angular vs React vs Vue
All three does one main thing: __UI__ and __DOM Manipulation__ to make Apps interactive. Also all revolved the idea of __Componenets__.  

(Which one is the best? What does the team looks like matters a lot. )

- Angular is a mature framework, good choice for a massive team. 
- React might be great for Startups, with a lot of flexibility. 
- Vue mixes best of Angular and React. 

#### Angular
- Developed by Google 2010, TypeScript based JS __Framework__.
- Angular 2 came out in 2016, Angular.js -> Angular / Angular 2.
- Feature-rich, everything is built-in. 

#### React
- Developed by Facebook in 2013. 
- Opposite of Angular. UI-layer only, less feature and give developers the freedom to choose different libraries. 

#### Vue
- Created by a single developer named Evan You in 2014. 
- Mix of Angular and React, some are built-in, some are to be picked by developers. 

## Working with Data / Methods / Computed Properties / Watchers
Known as __Componenet Instance Properties__. 
Four properties covered: 1) Data, 2) Methods, 3) Computed Properties and 4) Watchers. 

#### Data
- The __data__ property option for a component is a _function_. Vue calls this function as part of creating a new component instance. 
- It should return an object, which Vue wraps in its reactivity system and stores on the component instance as _$data_. Because of Vue's proxying process, it creates proxy getters and setters, which allows direct access.  

```
data() { return { prop: value } }
```

#### Methods
- Should be an object containing desired method. 
- Vue automatically binds the __this__ value for methods. Note ES6 arrow function won't work because of Vue's proxying process. It will lose access to __this__. 

```
methods: function( action )
```

#### Computed
- A combination of data and methods. Should always return a value. 
- Should NOT be used with asynchronous tasks. 

```
computed: function( action | return {} ) 
```

#### Watchers
- Not commonly used. Developers uses watchers to perform additional tasks when a value is changed. 
- Handy to use when performing asynchronous tasks. 

```
watch: { val(newVal, oldVal) { action } }
```

## Directives
Directives are special attributes that changes the _behavior_ of the element it's applied to. It starts with the "v-" prefix followed by the name of the directive. Directives can have expressions as values. 

##### Modifiers
    Modifiers are special postfixes denoted by a dot, which indicate that a directive should be bound in some special way. e.g. __.prevent__ tells the v-on directive to call __event.preventDefault()__ on the triggered event. 
    
    ```
    <form v-on:submit:prevent="onSubmit">...</form>
    ```

#### v-cloak
- Does not expect expression. 
- Usage: This directive will remain on the element until the associated Vue instance finishes compilation, and then will remove itself. Combined with CSS rules for display, it can be used to hide un-compiled bindings until the Vue instance is ready. 

```
// CSS
[v-cloak] {
    display: none;
}

<!-- HTML template -->
<div id="app" v-cloak>{{ message }}</div>
```

#### v-bind (Binding Attributes)
- Shorthand: __:__
- Expects: any (with argument) | Object (without argument)
- Argument: Attribute or Prop (optional)
- Usage: Dynamically bind one or more attributes, such as __class__ or __style__. When binding to __class__ or __style__, it supports additional value types such as Array or Objects (See more notes under Binding Classes / Styles section). 

```
<!-- bind an attribute -->
<img v-bind:src="imageSrc">

<!-- shorthand dynamic attribute name -->
<button :[key]="value"></button>
```

#### v-on (Listening to Events)
- Shorthand: __@__
- Expects: Function | Inline Statement | Object
- Argument: event
- Modifiers: 
    - .prevent: call __event.preventDefault()__.
    - .stop: call __event.stopPropagation()__.
    For more modifiers, see [Vue.js Documentation](https://vuejs.org/v2/api/#v-on).
- Usage: Attaches an event listener to the element. When used on a normal element, it listens to __native DOM events__ only. When used on a custom element component, it listens __custom events__ emitted on that child componenet. 

```
<!-- inline statement -->
<button v-on:click.prevent="doSomething('message', $event)"></button>

<!-- shorthand keyboard events and modifiers -->
<input @keyup.enter="onEnter">
```

#### v-html (Outputting Raw HTML)
- Expects: string
- Updates the element's __innerHTML__. 
- Vue by default does not output raw html, it will be output as raw text instead. ___Dynamically rendering arbitary HTML can be dangerous because it can easily lead to XXS (Cross-Site-Scripting) and therefore should be prevented from using as much as possible. ___

```
<div v-html="html"></div>
```

#### v-model (Two-way Data Binding)
- Expects: varies based on the value of form inputs element or output of componenets
- Limited to: 
    - __input__
    - __select__
    - __textarea__
    - components
- Modifiers: 
    - .lazy: listen to __change__ events instead of __input__ (only updates the value when moved away from the input)
    - .number: cast valid input strings to numbers
    - .trim: works like .trim(), removes excess white space
- Usage: Create a _two-way binding_ on a form input element or a component. 
- The v-model directive is a combination of binding and listening events in Vue. 

```
<!-- Technically, the below are both doing the same thing -->
<!-- v-model is a syntatic sugar for binding to value, and listening for changes to update the data -->


<label>First Name</label>
<input type="text" v-model="firstName" />

<label>Last Name</label>
<input type="text" :value="lastName" @input="updateLastName" /> 
```

#### v-if & v-else-if & v-else / v-show / v-for
See notes on Conditional Rendering and List Rendering. 

## Binding Classes / Styles
Check if condition is true or false. If it is true, it adds the class, and removes if false.

```
<input type="checkbox" v-model="{ purple: isPurple }" />
```

If isPurple is true (using input checkbox to set to true or false in this case), then adds the class isPurple; else removes it. 

Binding styles is about the same. 

## Conditional Rendering / The v-show and v-if Directive
Renders a block by either using __v-show__ or __v-if__ based on if condition is satisfied. 

#### v-show Directive
- Changes the __display__ CSS property. If __false__, then display will be set to __none__. Otherwise, uses the default __display__.
- Does _NOT_ work with the __v-else__ directive.
- Does _NOT_ work with the __template__ tag.
- Expensive on __Load__ as it adds an element to the document; but Cheap on __Toggle__, quick and easy. 
- ___Should be used if elements will constantly appear/disappear on the page___.

#### v-if Directive
- Will remove or add the element depending on the condition.
- Does work with the __v-else__ directive.
- Does work with the __template__ tag. __template__ serves as an invisible wrapper, therefore does not affect the styling like a __div__ would. 
- Main Advantage: Cheap on Load because it's ___lazy___. Saves resource on the client's machine because it will never add an element to the document if condition is not met. 
- Expensive on __Toggle__. Because adding and removing an element at a same spot is not easy. 
- ___Should be used if elements will rarely appear/disappear on the page___.

## List Rendering / The v-for Directive
The __v-for__ Directive allows us to loop through lists such as arrays and objects. 

Set an alias to loop through the list. Usually the naming is the singular version of the array name. e.g. fruit in fruits, item in items, shoe in shoes, etc. 
Index is optional. No need to include if not needed. 

```
<li v-for="(element, index) in elements">{{ element }}</li>
```

For objects, there are more alias that can be used to access object properties. 

```
<li v-for="element in elements">
 <div v-for="(value, key, index) in elements">
  {{ key }}: {{ value }}
 </div>
</li>
```