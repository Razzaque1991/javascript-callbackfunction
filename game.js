
var taskone=(Callback)=>{
   document.write('taskone');
   Callback();
}


var tasktwo=(Callback)=>{

   setTimeout(()=>{
      document.write('tasktwo'+'</br>');
      Callback();
   },3000)
}

var taskthree=(Callback)=>{
   setTimeout(()=>{
      document.write('taskthree'+'</br>')
      Callback();
   },2000)
}
var taskfour=(Callback)=>{
   setTimeout(()=>{
document.write('taskfour'+'</br>');
Callback();

   },2000)
}

var taskfive=()=>{
   document.write('taskfive');
}


taskone(()=>{
   tasktwo(()=>{
      taskthree(()=>{
         taskfour(taskfive);
      });
   });
});
 