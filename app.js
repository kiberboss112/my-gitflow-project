// Basic To-Do App
const tasks = ['Learn Git', 'Practice GitHub', 'Complete assignment'];

function showTasks() {
    console.log('Your Tasks:');
    tasks.forEach((task, index) => {
        console.log(`${index + 1}. ${task}`);
    });
}

showTasks();
