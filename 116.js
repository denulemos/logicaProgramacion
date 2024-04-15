/*
Escribir un algoritmo para combinar dos listas enlazadas simples ordenadas. El resultado debe ser una unica lista enlazada ordenada.

* Input: 1>2>4>6 2>3>5
* Output: 1>2>2>3>4>5>6
*/

// ----- IMPLEMENTACION LINKEDLISTS -------
class Node {
    constructor (data, nextNode) {
        this.data = data;
        this.next = nextNode;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // agregar info al final de la lista
    add(data) {
        const newNode = new Node(data, null);
        if (!this.head) {
            // Si head esta vacio, asignamos al nodo como cabeza
            this.head = newNode;
        }
        else {
            // al momento de agregar un nuevo nodo, se debe iterar en toda la lista
            // hasta encontrar un nodo cuya referencia al siguiente sea nula
            let current = this.head;
            while (current.next) {
                // iteramos al siguiente elemento y a su next
                current = current.next;
            }
            // al encontrar un current sin un nodo siguiente, lo asignamos
            current.next = newNode;
        }
        // aumentamos el tamaño de la lista
        this.size++;
    }

    // Ingresar info a la lista en un indice especifico
    insertAt(data, index) {
        // revisamos que el indice sea valido
        if (index < 0 || index > this.size) return null;

        const newNode = new Node(data);
        let current = this.head;
        // creamos una variable anterior 
        let previous;

        // Si se quiere agregar el nuevo nodo a la cabeza
        if (index === 0) {
            // apuntamos el head del nuevo nodo al viejo nodo en head
            newNode.next = current;
            this.head = newNode;
        }
        else {
            // iteramos hasta el indice
            for (let i = 0; i < index; i++) {
                // guardamos el nodo anterior
                previous = current;
                // iteramos al siguiente elemento
                current = current.next;
            }
            // al encontrar el indice, apuntamos el nodo anterior al nuevo nodo
            previous.next = newNode;
            // apuntamos el nuevo nodo al nodo siguiente del actual
            newNode.next = current;
        }
    }

    // imprime la lista enlazada
    print() {
        // si esta vacia devolvemos vacio
        if (this.size === 0) return 'Empty list';
        let current = this.head;
        let result = ''
        while (current) {
            // recorremos
            result += `${current.data} => `;
            current = current.next;
        }
        result += "X";
        return result;
    }

    removeData(dataToRemove) {
        let current = this.head;
        let previous = null;

        //siempre y cuando current no sea nulo
        while (current) {
            if (current.data == dataToRemove) {
                // si no tiene valor anterior, es el head
                if (!previous){
                    this.head = current.next;
                }
                else {
                    // el sig valor del anterior será igual al sig valor del actual
                    previous.next = current.next;
                }
                this.size--;
                return current.data; // devuelve lo eliminado
            }
            // si no lo encontramos
            previous = current;
            current = current.next;
        }

        return null;

    }

    // eliminar basado en el indice y no en su valor
    removeFrom (index) {
        if (index < 0 || index > this.size) return null;

        let current = this.head;
        let previous = null;

        // si se quiere eliminar el primer valor de la lista (head)
        if (index === 0) {
            // asignamos una nueva head
            this.head = current.next;
        }
        else {
            for (let i = 0; i < index; i++) {
                previous = current;
                current = current.next;
            }

            previous.next = current.next;
        }

        this.size--; // la lista disminuira su tamaño
        return current.data; // devuelve lo eliminado

    }

    // la lista esta vacia? 
    isEmpty () {
        if (this.size === 0) return true;
        return false;
    }

    // obtener tamaño
    getSize () {
        return this.size;
    }
}



// ----- IMPLEMENTACION LINKEDLISTS -------

const mergeAndOrder = (list1, list2) => {
// Creo un nuevo linked list
    let aux = new LinkedList();

    // Apunto ambas listas a su head 
    list1 = list1.head;
    list2 = list2.head;
    
    while (list1 && list2) {
        // Si el valor de list1 es menor al de la lista 2
        if (list1.data <= list2.data) {
            // Agrego el valor de la lista 1 al nuevo resultado
            aux.add(list1.data);
            // Avanzo en la lista dos
            list1 = list1.next;
        }
        else {
            aux.add(list2.data);
            list2 = list2.next;
        }
    }


    // Si uno de los dos se volvio null primero, agrego el resto del linkedlist al resultado
    if (list1) {
        while (list1) {
            aux.add(list1.data);
            list1 = list1.next;
        }
    }
    if (list2) {
        while (list2) {
            aux.add(list2.data);
            list2 = list2.next;
        }
    }


    return aux.print();
}

const linkedList1 = new LinkedList();
const linkedList2 = new LinkedList();

linkedList1.add(1);
linkedList1.add(2);
linkedList1.add(4);
linkedList1.add(6);

linkedList2.add(2);
linkedList2.add(3);
linkedList2.add(5);

console.log(mergeAndOrder(linkedList1, linkedList2));