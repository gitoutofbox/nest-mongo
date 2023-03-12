import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";

@Schema()
export class Movie {
    @Prop()
    plot: string;

    @Prop()
    generes: Array<string>;

    @Prop()
    runtime: number;
    
    @Prop()
    cast: Array<string>;

    @Prop()
    num_mflix_comments: number;


    @Prop()
    title: string;

    @Prop()
    fullplot: string;
}

export type MovieDocument = HydratedDocument<Movie>;
export const MovieSchema = SchemaFactory.createForClass(Movie);