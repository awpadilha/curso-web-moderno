{   
    {   
        {   
            {
                var sera = 'Será???'
                console.log(sera) // quando não é criada dentro da função a var pode ser vísivel fora do escopo 
            }
        }
    }
}

console.log(sera)

function teste() {
    var local = 123
    console.log(local) // quando a var é criada dentro do esocpo da  função ela não é visível fora dela
}

teste()
console.log(local) 