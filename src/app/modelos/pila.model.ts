class Pila<T>
{
    private datos: T[] = [];

    push(dato: T)
    {
        this.datos.push(dato);
    }

    pop() : T
    {
        return this.datos.pop();
    }

    toString() 
    {
        return JSON.stringify(this.datos);
    }
}