class Resultado<T>
{
    constructor(
        public iserror: boolean,
        public mensaje: string,
        public resultado: T
    )
    {

    }
}