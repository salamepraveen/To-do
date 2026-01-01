let ctr=0;
        function addTodo(){
            const inpvalue=document.querySelector("input");
            const todotext=inpvalue.value.trim();
            if(todotext===""){
                alert("Please add todo")
                return console.log("Nothing to add")
            }
            const parentele=document.getElementById("in-todo");
            const newele=document.createElement("div");
            newele.setAttribute("id","todo-"+ctr);
            const heading=document.createElement("h4");
            heading.textContent=ctr + "." + todotext;
            const btn=document.createElement("button");
            btn.textContent="Delete";
            btn.setAttribute("onclick","deleteTodo("+ctr+")");
           newele.appendChild(heading);
           newele.appendChild(btn);

           parentele.appendChild(newele);

           ctr++;
           inpvalue.value="";

        }

         function deleteTodo(index){
            const parentel=document.getElementById("in-todo");
            const dlt=document.getElementById("todo-"+index);
            parentel.removeChild(dlt);

        }