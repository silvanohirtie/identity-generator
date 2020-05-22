
<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://www.npmjs.com/package/identity-generator">
    <img width="100px" height="98px"src="https://i.imgur.com/IHK2wO1.png" alt="Logo">
  </a>

  <h3 align="center">Identity Generator</h3>

  <p align="center">
    Avanced Identity generator tool for Console/Web Applications.
    <br />
    <a href="https://github.com/silvanohirtie/identity-generator/blob/master/server.ts">View Source</a>
    ·
    <a href="https://github.com/silvanohirtie/identity-generator/issues">Report Bug</a>
    ·
    <a href="https://github.com/silvanohirtie/identity-generator/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Contents

* [About the Project](#about-the-project)
* [Installation](#installation)
* [Usage](#usage)


<!-- ABOUT THE PROJECT -->
## About The Project
This is an advanced tool that let you create a random identity based on your Country and gender preferences.  
You can choose what to display and you'll have access to the random email too!  

<!-- Installation -->
## Installation
`npm install --save identity-generator`

<!-- Usage -->
## Usage
```js
const identity = require ('identity-generator')

identity.generate()
.then(data => {
    console.log(data)
})
```  
This will generate a totally random identity and console.log() the data.  
You can choose your preferences:  
```js
var country = "italian-italy"
var gender = "female"
identity.generate(country, gender)
.then(data => {
    console.log(data)
})
```  
This will generate an Italian random female identity  
NOTE: Every country must contain *nationality-country* syntax.

You can choose to display just some of the data:  
```js
var country = "russian-russia"
var gender = "male"
identity.generate(country, gender)
.then(data => {
    var name = data.name
    var address = data.address
    console.log("Name: " + name + " address: " + address)
})
```  
This will console.log() Just the informations you required.  
At the bottom of every identity generated, you will find a link to access the e-mail you received.  

<!-- CONTACT -->
## Contact

Discord: Silvano#8106 - hirtie.silvano@gmail.com

Project Link: [https://github.com/silvanohirtie/identity-generator](https://github.com/silvanohirtie/identity-generator)

