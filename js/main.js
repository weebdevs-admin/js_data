let elInput = document.querySelector('input')
let elList = document.querySelector('.list')
let elBtn = document.querySelector('.btn')

elBtn.addEventListener('click',function(){
    for(let i =1; i<=elInput.value;i++){
        let newItem = document.createElement('li')
        newItem.textContent = i
        elList.appendChild(newItem)

    }
})