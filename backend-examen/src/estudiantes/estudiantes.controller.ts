import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';
import { EstudiantesService } from './estudiantes.service';
import { Estudiante } from './estudiante.model';

@Controller('estudiantes')
export class EstudiantesController {
  constructor(private readonly service: EstudiantesService) {}

  @Get() findAll() { return this.service.findAll(); }
  @Get(':carnet') findOne(@Param('carnet') carnet: string) { return this.service.findOne(carnet); }
  @Post() create(@Body() est: Estudiante) { return this.service.create(est); }
  @Put(':carnet') update(@Param('carnet') carnet: string, @Body() est: Estudiante) { return this.service.update(carnet, est); }
  @Patch(':carnet') patch(@Param('carnet') carnet: string, @Body() est: Partial<Estudiante>) { return this.service.patch(carnet, est); }
  @Delete(':carnet') remove(@Param('carnet') carnet: string) { return this.service.remove(carnet); }
}
