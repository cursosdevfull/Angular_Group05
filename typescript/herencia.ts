interface IPadre {
  getApellido(): string;
}

class Padre implements IPadre {
  apellido: string;

  constructor(apellido: string) {
    this.apellido = apellido;
  }

  getApellido(): string {
    return this.apellido;
  }

  getLongitudApellido(): number {
    return this.apellido.length;
  }
}

class Hijo extends Padre {
  nombre: string;

  constructor(nombre: string, apellido: string) {
    super(apellido);
    this.nombre = nombre;
  }

  getNombreCompleto(): string {
    return this.nombre + " " + this.apellido;
  }
}

class Familia {
  instancia: IPadre;

  constructor(instancia: IPadre) {
    this.instancia = instancia;
  }

  getApellidoFamilia(): string {
    return this.instancia.getApellido();
  }
}

const instancia: IPadre = new Hijo("Sergio", "Hidalgo");
instancia.getApellido();

const familia = new Familia(instancia);
console.log(familia.getApellidoFamilia());
