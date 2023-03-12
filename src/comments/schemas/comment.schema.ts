import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument,  Types } from "mongoose";

@Schema()
export class Comment {

    @Prop()
    name: string;

    @Prop()
    email: string;

    @Prop() 
    movie_id: Types.ObjectId;

    @Prop()
    text: string;

    @Prop()
    date: Date;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
export type CommentDocument = HydratedDocument<Comment>;
