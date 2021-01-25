// Infraestructura
class MedicoOperation implements MedicoRepositorio {
  insertarMedico(medico: IMedico): IMedico {
    this.validarInsercion();
    return medico;
  }

  getCMP(): string {
    return "4534564";
  }

  validarInsercion() {}
}

class MedicoOperationV2 implements MedicoRepositorio {
  insertarMedico(medico: IMedico): IMedico {
    medico.nombre = medico.nombre.toUpperCase();
    return medico;
  }

  getCMP(): string {
    return "1234";
  }
}

class MedicoOperationV3 implements MedicoRepositorio {
  insertarMedico(medico: IMedico): IMedico {
    medico.nombre = medico.nombre.toLowerCase();
    return medico;
  }

  getCMP() {
    return "33533";
  }
}

// Aplicación
class MedicoCU {
  repositorio: MedicoRepositorio;

  constructor(repositorio: MedicoRepositorio) {
    this.repositorio = repositorio;
  }

  agregarMedico(medico: IMedico): IMedico {
    return this.repositorio.insertarMedico(medico);
  }
}

interface MedicoRepositorio {
  insertarMedico(medico: IMedico): IMedico;
  getCMP(): string;
}

// Dominio
interface IMedico {
  nombre: string;
  dni: string;
  cmp: string;
}

const medicoOperation = new MedicoOperationV3();
const medicoCU = new MedicoCU(medicoOperation);
const medico: IMedico = {
  nombre: "Sergio",
  dni: "123456",
  cmp: "4568",
};

const value = medicoCU.agregarMedico(medico);
console.log(value);
