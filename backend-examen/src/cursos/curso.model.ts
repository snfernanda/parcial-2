export interface Curso {
  id: number;
  nombre: string;
  descripcion: string;
  semestre: number;
  prerrequisitos: string[];
  creditos: number;
}
