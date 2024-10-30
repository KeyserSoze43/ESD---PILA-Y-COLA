//IMPLEMENTANDO PILA CON ARREGLO
class PilaA{
    constructor(){
        this.almacenPila=[];
        this.contPila=0;
    }

    push(elemento){
        this.almacenPila.push(elemento)
    };
    pop(){
        this.almacenPila.pop()
    };
    peek(){
        this.almacenPila.peek()
    };
    size(){
        return this.almacenPila.length
    };
    print(){
        return this.almacenPila
    };
}

const PILAA = new PilaA();


//IMPLEMENTANDO PILA CON OBJETO
class Pila{
    constructor(){
        this.almacenPila={};
        this.contPila=0;
    }

    push(elemento){     //Agrega un nuevo elemento al final de la pila
        this.almacenPila[this.contPila]=elemento;
        this.contPila++;
        return this.almacenPila;
    }
    pop(){      //Retorna el ultimo elemento y lo elimina
        if(this.contPila===0){
            return null;
        }
        this.contPila--;
        const elemento = this.almacenPila[this.contPila];
        delete this.almacenPila[this.contPila];
        return elemento;
    }
    peek(){     //Retorna el ultimo elemento sin eliminarlo
        if(this.contPila===0){
            return null;
        }
        return this.almacenPila[this.contPila-1];
    }   
    size(){     //Retorna el numero de elementos de la pila
        return this.contPila;
    }
    print(){    //Retorna el contenido de la pila
        return this.almacenPila;
    }
}

const PILA = new Pila();