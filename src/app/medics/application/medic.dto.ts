import { MedicEntity } from '../domain/medic.entity';
import { MedicRequest } from './medic-request';

export const mapping = (data: MedicRequest[]): MedicEntity[] => {
  console.log('data recibida', data);
  const medics: MedicEntity[] = data.map((el: MedicRequest) => ({
    id: el.id,
    name: el.nombre,
    surname: el.segundo_nombre,
    lastname: el.apellido,
    cmp: el.cmp,
    dni: el.dni,
    isActive: el.activo,
    email: el.correo,
    photo: el.foto,
  }));

  return medics;
};
