import { Injectable } from '@nestjs/common';
import { LibroI } from './interface/libro.interface';
import { Model } from 'mongoose';
import {InjectModel} from '@nestjs/mongoose';
@Injectable()
export class LibrosService {
    constructor(@InjectModel('Libro') private readonly libroModel: Model<LibroI>){}
    
    async buscarTodos():Promise<LibroI[]>{
        return await this.libroModel.find();
    }

    async buscarLibro(id: string): Promise<LibroI>{
        return await this.libroModel.findOne({_id: id});
    }

    async crearLibro(libro: LibroI): Promise<LibroI>{
        const nuevoLibro = new this.libroModel(libro);
        return await nuevoLibro.save();
    }

    async modificarLibro(id: string, libro: LibroI): Promise<LibroI>{
        return await this.libroModel.findByIdAndUpdate(id, libro, {new:true});
    }

    async borrarLibro(id: string): Promise<LibroI>{
        return await this.libroModel.findByIdAndRemove(id);
    }

}
