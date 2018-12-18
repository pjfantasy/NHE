# NHE project
How to apply grunt to project


## Get Started

1. **Install NodeJS**
`https://nodejs.org/en/` 
(10.0 or greater is recommended for optimal build performance)
2. **Clone the project**. 
`git clone https://github.com/pjfantasy/animation.git`.

3. **Run the setup script**. 
in your project, type `npm i` or `npm install`

4. **install Grunt's command line interface**
Open command line then type in your project
`npm install -g grunt-cli`

5 **Run grunt**
`grunt` will automated watching and minify changed code.
`grunt server` will run and auto refresh browser `bath: 'http://localhost:69/index.html'`


**recommendation**
<!--Be accurently created tasks folder-->
6. **Created folder tasks and plugin** 
Created folder `tasks` in your project <`your project`>/<`tasks`>
Created files `uglify.js` to config minify and `less.js` (can copy from my project in step 2)
