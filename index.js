var list =[
    {
        qoat:"“Be yourself; everyone else is already taken.”",
        name:"― Oscar Wilde"
    },
    {
        qoat:"“So many books, so little time.”",
        name:"― Frank Zappa"
    },
    {
        qoat:"“A room without books is like a body without a soul.”",
        name:"― Marcus Tullius Cicero"
    },
    {
        qoat:"“You only live once, but if you do it right, once is enough.”",
        name:"― Mae West"
    }
]

var button = document.getElementById("my_button")
button.onclick= function(){  
    var random =Math.floor(Math.random() * list.length)
    document.getElementById("insert_qout").innerHTML= list[random].qoat
   document.getElementById("insert_qout2").innerHTML= list[random].name

  // console.log(`${list[Math.floor(Math.random() * list.length)].qoat}  ${list[Math.floor(Math.random() * list.length)].name}`);
}