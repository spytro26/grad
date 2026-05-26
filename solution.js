<!DOCTYPE html>
<html>
<head>
  <title>Todo App</title>

  <style>

    body{
      font-family: Arial;
      background: #f2f2f2;
      text-align: center;
      margin-top: 50px;
    }

    h1{
      color: darkblue;
      margin-bottom: 20px;
    }

    input{
      padding: 10px;
      width: 200px;
      border: 2px solid blue;
      border-radius: 5px;
    }

    button{
      padding: 10px;
      background: blue;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }

    li{
      background: white;
      width: 300px;
      margin: 10px auto;
      padding: 10px;
      border-radius: 5px;
      list-style: none;
    }

  </style>
</head>

<body>

  <h1>To Do App</h1>

  <input type="text" id="task" placeholder="Enter task">
  
  <button onclick="addTask()">Add</button>

  <ul id="list"></ul>

  <script>

    function addTask(){

      let task = document.getElementById("task").value;

      if(task == "") return;

      let li = document.createElement("li");

      li.innerHTML = `
        ${task}
        <button onclick="this.parentElement.remove()">Delete</button>
      `;

      document.getElementById("list").appendChild(li);

      document.getElementById("task").value = "";
    }

  </script>

</body>
</html>
