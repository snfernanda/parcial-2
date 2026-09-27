import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Estudiante } from '../models/estudiante.model';

@Injectable({ providedIn: 'root' })
export class EstudiantesService {
  private api = 'http://localhost:3000/estudiantes';
  constructor(private http: HttpClient) {}

  getAll(): Observable<Estudiante[]> { return this.http.get<Estudiante[]>(this.api); }
  getOne(carnet: string): Observable<Estudiante> { return this.http.get<Estudiante>(`${this.api}/${carnet}`); }
  create(est: Estudiante): Observable<Estudiante> { return this.http.post<Estudiante>(this.api, est); }
  update(carnet: string, est: Estudiante): Observable<Estudiante> { return this.http.put<Estudiante>(`${this.api}/${carnet}`, est); }
  patch(carnet: string, est: Partial<Estudiante>): Observable<Estudiante> { return this.http.patch<Estudiante>(`${this.api}/${carnet}`, est); }
  delete(carnet: string): Observable<any> { return this.http.delete(`${this.api}/${carnet}`); }
}
