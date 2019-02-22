localStorage.setItem('count', 0);
$('#workItemNum').html(localStorage.getItem('count'));

var workItem = {
    id: '',
    workItem: '',
    dueDate: '',
    numResources: '',
    state: '',
    status: ''
}
// add rows to an HTML table
$('body').on('focusout', '.editor', function () {
    console.log($(this).parent().parent().attr('id'))

    if ($(this).attr("name") == "id") {
        workItem.id = $(this).html();
    } else if ($(this).attr("name") == "workItem") {
        workItem.workItem = $(this).html();
    } else if ($(this).attr("name") == "dueDate") {
        workItem.dueDate = $(this).html();
    } else if ($(this).attr("name") == "numResources") {
        workItem.numResources = $(this).html();
    }

    localStorage.setItem(parseInt($(this).parent().parent().attr('id')), JSON.stringify(workItem));
});

function addWorkItem() {
    var count = parseInt(localStorage.getItem('count')) + 1;
    localStorage.setItem('count', count);

    $('#workItemNum').html('').html(count);

    $(".editor").attr('contenteditable', false)

    $("#itemTable tbody").append(
        "<tr id=" + count + ">" +
        "<td><div contenteditable='true' class='editor' name='id'></div></td>" +
        "<td><div contenteditable='true' class='editor' name='workItem'></div></td>" +
        "<td><div contenteditable='true' class='editor' name='dueDate'></div></td>" +
        "<td><div contenteditable='true' class='editor' name='numResources'></div></td>" +
        "<td>" +
        "<button class='edit btn' onclick='editWorkItem(" + count + ")'><i class='far fa-edit'></i></button>" +
        "<button class='btn' onclick='deleteWorkItem(" + count + ")'><i class='trash far fa-trash-alt'></i></button>" +
        "</td>" +
        "</tr>"
    );

    workItem = {
        id: '',
        workItem: '',
        dueDate: '',
        numResources: '',
        state: '',
        status: ''
    }

    localStorage.setItem(localStorage.getItem('count'), JSON.stringify(workItem));
}
// Updating the Data
function editWorkItem(count) {
    $(".editor").attr('contenteditable', false)
    $("#" + count).children('td').children('div').attr('contenteditable', true);
}
// Build a delete button dynamically
function deleteWorkItem(count) {
    $("#" + count).remove();
    localStorage.removeItem(count);
    $('#workItemNum').html('').html(--count);    
}



