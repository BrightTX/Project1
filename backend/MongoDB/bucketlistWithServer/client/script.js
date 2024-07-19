
// Deployed API - https://dvp5gb9nkk.execute-api.us-east-1.amazonaws.com/dev

const baseURL = `https://dvp5gb9nkk.execute-api.us-east-1.amazonaws.com/dev/bucket`

$(document).ready( () => {
    //On load make a api call to read data
    fetch(baseURL)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        //Once we have our data - clear out our hardcoded li from html
       $("ul").empty()
       //Iterate through our data and display them 
       data.forEach(function(item){
        //Build out li for each item and display it by appending it to the ul
            let completedClass = item.isComplete ? "completed" : "";
            $("ul").append(`
                    <li class=${completedClass} data-id=${item.id}>
                    ${item.description}
                    <span><i class="fa-solid fa-dumpster-fire"></i></span>
                    <li>
                `)
       })
    })
    .catch(error => { console.log("Error reading data: ", error)})



    // toggling class of 'completed' in li
    $('ul').on('click', 'li', function() {
        $(this).toggleClass('completed');
    })

    // deleting the li after icon is clicked
    $('ul').on('click', 'span', function() {
        $(this).parent().remove();
    })

    let addListItem = () => {
        // assign value from the input to 'listItem'
        let listItem = $('input').val().substring(0, 30);
        // add it to the bottom of ul
        $('ul').append(
            `
            <li>${listItem}<span><i class="fa-solid fa-dumpster-fire"></i></span></li>
            `
        );
        $('input').val('')
    }
 
    // adding items when user clicks enter key
    $('input').on('keypress', function(event) {
        // if enter key is pressed... 
        if((event.which === 13) && ($('input').val())) {
            addListItem();
        }

    })

    // above but with submit button
    $('button').on('click', function() {
        
        if($('input').val()) {
            addListItem();
        }

    })
   

});

