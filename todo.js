window.setTimeout(function() {
var todos = ['Make a living coding'];

var input = prompt('what would you like to do ?');

while(input !== 'quit'){
    //handle input
    if(input === 'list'){
        console.log('**********')
        todos.forEach(function(todo, i ){
            console.log(i + ': + ' + todo);
        });
        console.log('**********')
    } else if(input === 'new') {
        //ask to todo array
        var newTodo = prompt('Enter new todo');
        //add to todos array
        todos.push(newTodo);
    } else if(input === 'delete'){
        //ask for index of todo to be deleted
        //delete that todo
    }

    //ask again for new input
    input = prompt('What would you like to do ?');
}
console.log('OK, YOU QUIT THE APP');
}, 500);