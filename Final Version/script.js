

// The Left Menu

//icons
const leftMenuIcons = document.querySelectorAll('#left-menu-selector>ul>li')
let activeLeftMenuIcon = document.querySelector('#left-menu-selector>ul>li.active')
//menus
const leftMenus = document.querySelectorAll('#the-menus>ul')
let activeLeftMenu = document.querySelector('#the-menus>ul.active')




// opening the menus
leftMenuIcons.forEach((element=>{
    element.addEventListener('click', (e)=>{

        if(element != activeLeftMenuIcon){  // check if the selected menu is already active or not
            activeLeftMenuIcon.classList.remove('active')
            element.classList.add('active')
            activeLeftMenuIcon = document.querySelector('#left-menu-selector>ul>li.active')
            //change the active icon

            activeLeftMenu.classList.remove('active')

            leftMenus.forEach(menu=>{
                if(menu.id == `${element.id}-menu`){
                    menu.classList.add('active')
                    activeLeftMenu = document.querySelector('#the-menus>ul.active')

                    
                  
                }
            })

            // change the active menu
            


        }



    })
}))





// Left Menu DropDowns

let leftMenuDrops = document.querySelectorAll('#the-menus>ul>li.drop>a')
let leftMenuDropDowns = document.querySelectorAll('#the-menus>ul>li.drop>ul')


leftMenuDrops.forEach(drop=>{
    drop.addEventListener('click',(e)=>{
        e.preventDefault()

        leftMenuDropDowns.forEach(dropDown=>{
            if(dropDown!=drop.nextElementSibling){

                dropDown.classList.remove('active')
            }
            
        })

        drop.nextElementSibling.classList.toggle('active')

       

     
    })
})


//Close Left-Menu 

let closeButton = document.getElementById('close-button')
let companyName = document.getElementById('company')
let leftMenuColumn= document.getElementById('the-menus')

closeButton.addEventListener('click',(e)=>{
    companyName.classList.toggle('closed')
    leftMenuColumn.classList.toggle('closed')

})