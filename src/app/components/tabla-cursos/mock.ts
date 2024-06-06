import { Curso } from '../../models/curso-to';

export const cursos: Curso[] = [
  { materia: 'JavaScript', dificultad: 9, requiere: 'Html y Css' },
  { materia: 'TypeScript', dificultad: 7, requiere: 'JavaScript' },
  { materia: 'Angular', dificultad: 9, requiere: 'Html, Css, Js y Ts' },
  { materia: 'React', dificultad: 7, requiere: 'Html, Css, Js' },
];
