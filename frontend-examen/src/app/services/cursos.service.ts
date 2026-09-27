import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Curso } from '../models/curso.model';

@Injectable({ providedIn: 'root' })
export class CursosService {
  private api = 'http://localhost:3000/cursos';
  constructor(private http: HttpClient) {}

  getAll(): Observable<Curso[]> { return this.http.get<Curso[]>(this.api); }
  getOne(id: number): Observable<Curso> { return this.http.get<Curso>(`${this.api}/${id}`); }
  create(curso: Curso): Observable<Curso> { return this.http.post<Curso>(this.api, curso); }
  update(id: number, curso: Curso): Observable<Curso> { return this.http.put<Curso>(`${this.api}/${id}`, curso); }
  patch(id: number, curso: Partial<Curso>): Observable<Curso> { return this.http.patch<Curso>(`${this.api}/${id}`, curso); }
  delete(id: number): Observable<any> { return this.http.delete(`${this.api}/${id}`); }
}
