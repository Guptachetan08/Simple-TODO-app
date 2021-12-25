let ulTasks = $('#ulTasks')
let btnAdd = $('#btnAdd')
let btnReset = $('#btnReset')
let btnCln = $('#btnCln')
let btnSort = $('#btnSort')
let inpnewTask = $('#inpnewTask')

function addItem(){
    let listItem = $('<li>', {
        'class' : 'list-group-item',
        text: inpnewTask.val()
    })
    listItem.click(()=>{
        listItem.toggleClass('done')
    })
    if(!(inpnewTask.val().trim()==''))
        ulTasks.append(listItem)
    inpnewTask.val('')
    toggleBtns()
}

inpnewTask.keypress((e) => {
    if(e.which==13){
        addItem()
    }
})

function cleanup(){
    $('#ulTasks .done').remove()
    toggleBtns()
}

function sortup(){
    $('#ulTasks .done').appendTo(ulTasks)
    toggleBtns()
}

function toggleBtns(){
    if((inpnewTask.val() == '')){
        btnReset.prop('disabled',true)
        btnAdd.prop('disabled',true)
    } 
    else{
        btnReset.prop('disabled',false)
        btnAdd.prop('disabled',false)
    }
    if((ulTasks.children().length < 1)){
        btnSort.prop('disabled',true)
        btnCln.prop('disabled',true)
    }
    else{
        btnSort.prop('disabled',false)
        btnCln.prop('disabled',false)
    }
}

inpnewTask.on('input',()=>{
    toggleBtns()
})

btnAdd.click(addItem)

btnReset.click(()=> {
    inpnewTask.val('')
    toggleBtns()
})

btnCln.click(cleanup)

btnSort.click(sortup)