import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MovieController } from './controllers/movie/movie.controller';
import { Movie, MovieSchema } from './schemas/movie.schema';
import { MovieService } from './services/movie/movie.service';

@Module({
    imports:[
        MongooseModule.forFeature([{name: Movie.name, schema: MovieSchema}])
    ],
    controllers:[MovieController],
    providers:[MovieService]
})
export class MovieModule {}
