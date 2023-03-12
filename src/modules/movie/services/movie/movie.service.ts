import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Movie, MovieDocument } from '../../schemas/movie.schema';

@Injectable()
export class MovieService {

    constructor(
        @InjectModel(Movie.name) private movieModel: Model<MovieDocument>
    ) { }

    async findAll() {
        return await this.movieModel.find().limit(20).exec();
    }
    async addMovie(movieDocument) {
        const createdMovie = new this.movieModel(movieDocument);
        return await createdMovie.save();
    }
}
