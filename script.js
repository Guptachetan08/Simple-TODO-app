let ulTasks = $('#ulTasks')
let btnAdd = $('#btnAdd')
let btnClr = $('#btnClr')
let inpnewTask = $('#inpnewTask')

btnAdd.click(() => {
    let listItem = $('<li>', {
        'class' : 'list-group-item',
        text: inpnewTask.val()
    })
    ulTasks.append(listItem)
    inpnewTask.val('')
})

btnClr.click(()=> inpnewTask.val(''))