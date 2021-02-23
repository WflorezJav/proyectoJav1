abstract class Animal
{
    nombre : string;

    constructor(nombre: string)
    {
        this.nombre = nombre;
    }

    abstract hacerRuido(): string;
}

export enum Raza
{
    GOLDEN,
    SALCHICHA,
    PASTOR
}

export class Perro extends Animal
{
    raza: Raza;
    constructor(nombre: string, raza: Raza){
        super(nombre);
        this.raza = raza;
    }
    
    hacerRuido()
    {
        return "Ladrar";
    }
}

