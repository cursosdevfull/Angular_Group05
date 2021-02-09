import { MedicEntity } from '../domain/medic.entity';
import { MedicRequest } from './medic-request';

export const mapping = (
  data: MedicRequest | MedicRequest[]
): MedicEntity | MedicEntity[] => {
  if (Array.isArray(data)) {
    const medics: MedicEntity[] = data.map((el: MedicRequest) => ({
      id: el.id,
      name: el.nombre,
      surname: el.segundo_nombre,
      lastname: el.apellido,
      cmp: el.cmp,
      dni: el.dni,
      isActive: el.activo,
      email: el.correo,
      photo: '',
    }));

    return medics;
  } else {
    const medic: MedicEntity = {
      id: data.id,
      name: data.nombre,
      surname: data.segundo_nombre,
      lastname: data.apellido,
      cmp: data.cmp,
      dni: data.dni,
      isActive: data.activo,
      email: data.correo,
      photo: '',
    };

    return medic;
  }
};
