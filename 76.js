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

// Preparamos datos de testing
const linkedList = new LinkedList();
linkedList.add(1);
linkedList.add(3);
linkedList.add(5);
linkedList.add(6);

const linkedList2 = new LinkedList();
linkedList2.add(2);
linkedList2.add(4);
linkedList2.add(6);
linkedList2.add(20);
linkedList2.add(34);

const mergeAndSort = (linkedList, linkedList2) => {
    const linkedListResult = new LinkedList();

    // apuntamos a los head de cada lista 
    let current1 = linkedList.head;
    let current2 = linkedList2.head;

    // mientras ambas listas apunten a un NO nulo
    while (current1 && current2) {
        // si la data de c1 es mayor a c2, agregamos el menor al nuevo linked list
        if (current1.data < current2.data) {
            linkedListResult.add(current1.data);
            // si seguimos al siguiente puntero
            current1 = current1.next;
            
        }
        // si son iguales, agregamos uno de ellos, y seguimos al siguiente puntero de ambos
        else if (current1.data == current2.data) {
            linkedListResult.add(current1.data);
            current1 = current1.next; 
            current2 = current2.next; 
        }
        else {
            linkedListResult.add(current2.data);
            current2 = current2.next;
            
        }
    }

    // Si alguno de ambos NO quedo nulo, agregarlo 
    if (current1) {
        linkedListResult.add(current1.data);
    } 
    if (current2) {
        linkedListResult.add(current2.data);
    } 

    return linkedListResult.print();

}


module.exports = mergeAndSort;
