import { Module } from '@nestjs/common';
import { EstudiantesController } from './estudiantes/estudiantes.controller';
import { EstudiantesService } from './estudiantes/estudiantes.service';
import { CursosController } from './cursos/cursos.controller';
import { CursosService } from './cursos/cursos.service';

@Module({
  controllers: [EstudiantesController, CursosController],
  providers: [EstudiantesService, CursosService],
})
export class AppModule {}
