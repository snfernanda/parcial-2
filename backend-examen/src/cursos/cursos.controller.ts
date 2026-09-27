import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';
import { CursosService } from './cursos.service';
import { Curso } from './curso.model';

@Controller('cursos')
export class CursosController {
  constructor(private readonly service: CursosService) {}

  @Get() findAll() { return this.service.findAll(); }
  @Get(':id') findOne(@Param('id') id: string) { return this.service.findOne(Number(id)); }
  @Post() create(@Body() curso: Curso) { return this.service.create(curso); }
  @Put(':id') update(@Param('id') id: string, @Body() curso: Curso) { return this.service.update(Number(id), curso); }
  @Patch(':id') patch(@Param('id') id: string, @Body() curso: Partial<Curso>) { return this.service.patch(Number(id), curso); }
  @Delete(':id') remove(@Param('id') id: string) { return this.service.remove(Number(id)); }
}
