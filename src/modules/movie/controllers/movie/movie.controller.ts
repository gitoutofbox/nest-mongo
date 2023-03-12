import { Body, Controller, Get, Post } from '@nestjs/common';
import { MovieService } from '../../services/movie/movie.service';

@Controller('movie')
export class MovieController {
    constructor(
        private movieService: MovieService
    ) { }

    @Get()
    getAllMovie() {
        return this.movieService.findAll();
    }

    @Post()
    addMovie(@Body() body: { plot: string, generes: Array<string>, runtime: number, cast: string, title: string }) {
        return this.movieService.addMovie({
            plot: body.plot,
            generes: body.generes,
            runtime: body.runtime,
            cast: body.cast,
            title: body.title
        });
    }

}
