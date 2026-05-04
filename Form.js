
const UserName = document.getElementById("I1")
const Password = document.getElementById("I2")
const btn = document.getElementById("btn")

const BACKEND_URL = 'http://localhost:5000/Form'
/*

const fetchTasks = async () => {
    try {
        const response = await fetch(BACKEND_URL); // This is http://localhost:5000/web2
        const tasks = await response.json();
        
        const taskList = document.getElementById('task-list');
        taskList.innerHTML = ''; // Clear the old list
        
        // This is the line that makes the buttons appear!
        tasks.forEach(task => addTaskToDOM(task)); 
        
    } catch (error) {
        console.error('Error:', error);
    }
};

// IMPORTANT: You must call it at the bottom of your JS file
fetchTasks();
*/


btn.addEventListener('click', async () => {
console.log("Sending:", UserName.value, Password.value); // Debug line
    if((UserName.value !== '' )&& (Password.value !== '' )) {
    try {
    const response = await fetch(BACKEND_URL, {
  
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ _UserName: UserName.value ,  _Password: Password.value , })
    
    });
    
    if(response.ok){

    alert("yes");
    }

    else{

       alert("no"); 
    }
}
    catch (error) {
     console.error('Error adding task:', error);

}

}

});

  /*      // --- DELETE FUNCTIONALITY ---
        deleteBtn.addEventListener('click', async () => {
            console.log("Deleting ID:", infos.id);
            const response = await fetch(`${BACKEND_URL}/${infos.id}`, { method: 'DELETE' });

            if (response.ok) {
                li.remove(); // Remove task from the UI on successful deletion
            } else {
                alert('Error deleting task!');
            }
        });

        li.appendChild(deleteBtn);
        taskList.appendChild(li); */
