import { Controller, Get, Post, Put, Delete, Body, Param} from '@nestjs/common';
import { CrearLibroDto } from './dto/crear-libro';
import { LibrosService } from './libros.service';
import { LibroI } from './interface/libro.interface';
@Controller('libros')
export class LibrosController {
    constructor(private readonly libroService: LibrosService){}
    
    @Get()
    getAllLibros(): Promise<LibroI[]>{
        return this.libroService.buscarTodos();  
    }

    @Get('id')
    buscarUno(@Param('id') idLibro: string): Promise<LibroI>{
        return this.libroService.buscarLibro(idLibro);
    }

    @Post()
    crearLibro( @Body() libroDto: CrearLibroDto):Promise<LibroI>{
        return this.libroService.crearLibro(libroDto);
    }

    @Put(':id')
    modificarLibro(@Param('id') idLibro: string, @Body() libroDto: CrearLibroDto): Promise<LibroI>{
        return this.libroService.modificarLibro(idLibro, libroDto);
    }

    @Delete(':id')
    borrarLibro(@Param('id') idLibro: string):Promise<LibroI>{
        return this.libroService.borrarLibro(idLibro);
    }

}
