class ColaA {   //cola con arreglos
    constructor(){
        this.almacenCola=[];        
        this.inicio=0;
        this.fin=0;            
    }

    enqueue(elemento){      //agrega un nuevo elemento al final de la cola
        this.almacenCola.push(elemento)                    
    }

    dequeue(){              //retorna el primer elemento de la cola y lo elimina
        this.almacenCola.pop()
    }

    peek(){                 //retorna el primer elemento de la cola sin eliminarlo
        this.almacenCola.peek()
    }

    size(){                 //retorna el numero de elementos que contiene la cola
        return this.almacenCola.length
    }

    print(){                //retorna los elementos que contiene la cola
        return this.almacenCola;
    }

    isEmpty(){              //retorna true si la cola esta vacia y flase si no lo esta
        if(this.inicio===this.fin){
            return true;
        }
        return false;
        
    }
}

class Cola {
    constructor(){
        this.almacenCola={};        
        this.inicio=0;
        this.fin=0;            
    }

    enqueue(elemento){      //agrega un nuevo elemento al final de la cola
        this.almacenCola[this.fin]=elemento;   
        this.fin++;                            
        return this.almacenCola;                    
    }

    dequeue(){              //retorna el primer elemento de la cola y lo elimina
        if(this.inicio===this.fin){
            return null;
        }
        const elemento=this.almacenCola[this.inicio];
        delete this.almacenCola[this.inicio];
        this.inicio++;
        return elemento;
    }

    peek(){                 //retorna el primer elemento de la cola sin eliminarlo
        if(this.size()===0){
            return null;
        }
        return this.almacenCola[this.inicio];
    }

    size(){                 //retorna el numero de elementos que contiene la cola
        return this.fin-this.inicio;
    }

    print(){                //retorna los elementos que contiene la cola
        return this.almacenCola;
    }

    isEmpty(){              //retorna true si la cola esta vacia y flase si no lo esta
        if(this.inicio===this.fin){
            return true;
        }
        return false;
        
    }
}

const COLA = new Cola();