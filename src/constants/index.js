import {ai_img_gen,todoapp,weatherapp,blogapp,css,
    html,
    js,react,node,mongo,tailwindcss,express,chatgpt} from '../assets';


export const projects = [
    {
        name:"Blog Web Application",
        title:"Custom Blog web app for the sharing contents",
        img:blogapp,
        github:"https://github.com/Rashmi7205/blog-website",
        link:"https://justwriteblog.netlify.app",
        techStacks:[react,tailwindcss,node,mongo,express]
    },
    {
        name:"AI image Generator",
        title:"The AI Image Generator is a web application that allows users to generate images using OpenAI's models.",
        img:ai_img_gen,
        github:"https://github.com/Rashmi7205/ai-image-generator",
        link:"https://github.com/Rashmi7205/ai-image-generator",
        techStacks:[react,tailwindcss,chatgpt,node,mongo,express]
    },
    {
        name:"React Weather Application",
        title:"The website will fetch weather data for the specified location and display the current weather conditions.",
        img:weatherapp,
        github:"https://github.com/Rashmi7205/React-weather-app",
        link:"https://rashmi7205.github.io/React-weather-app/",
        techStacks:[react,css,js]
    },
    {
        name:"Todo application",
        title:"It is a simple web-based Todo list application that allows you to manage your tasks and stay organized. You can add, edit, delete, and mark tasks as completed.",
        img:todoapp,
        github:"https://github.com/Rashmi7205/CodeClause_Todo",
        link:"https://rashmi7205.github.io/CodeClause_Todo/",
        techStacks:[react,tailwindcss]
    }
] ;
