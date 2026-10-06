console.log("Student Task Manager loaded");
document.getElementById('searchInput').addEventListener('input', function(e) {
    const searchText = e.target.value.toLowerCase();
    const tasks = document.querySelectorAll('.task-item'); 
    tasks.forEach(task => {
        const title = task.textContent.toLowerCase();
        if(title.includes(searchText)) {
            task.style.display = '';
        } else {
            task.style.display = 'none';
        }
    });
});