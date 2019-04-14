var addButton=document.getElementById("add");
var removeButton=document.getElementById("remove");
var label=document.querySelector('.label');

addButton.addEventListener('click',addItem)
removeButton.addEventListener('click',removeItem)

var ul=document.getElementById('list');
var li;

function addItem()
{
    var input=document.querySelector('.input');
    var item=input.value;
    var textNode=document.createTextNode(item);


    if(item=="")
    {
       var p=document.createElement('p');
       let value=document.createTextNode('please Enter Some value');
       document.querySelector('body').appendChild(value);
    }
    else
    {
        li=document.createElement('li');
        li.setAttribute('class','list-group-item');
        var checkBox=document.createElement('input');
        checkBox.type='checkbox';
        checkBox.setAttribute('class','check');

        //create labe
        let label=document.createElement('label');
        label.setAttribute('class','label')
        

        //adding element
        ul.appendChild(label);
        li.appendChild(checkBox);
        label.appendChild(textNode);
        li.appendChild(label);
        ul.insertBefore(li,ul.childNodes[0]);
    }
}


function removeItem()
{
    li=ul.children;
    for(let i=0;i<li.length;i++)
    {
        if(li[i]&&li[i].children[i].checked)
        {
            label.classList.toggle('cross');
        }
        while(li[i]&&li[i].children[i].checked)
        {
            ul.removeChild(li[i]);
        }
    }
}
