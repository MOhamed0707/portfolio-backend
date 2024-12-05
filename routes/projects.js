const express =require ('express');
const router =express.Router();


//Sample Project data 

const projects =[
    {id:1,name:'To-Do App',description:'A task management application'},
    {id:2,name:'Blog App',description: 'A blogging platform'},
];

//Route to fetch all projects

router.get('/projects',(req,res)=>{
    res.json(projects);
});

module.exports =router;