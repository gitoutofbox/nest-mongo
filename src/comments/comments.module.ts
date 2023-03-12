import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CommentsController } from './controllers/comments/comments.controller';
import { Comment, CommentSchema } from './schemas/comment.schema';
import { CommentService } from './service/comment/comment.service';

@Module({
    imports:[
        MongooseModule.forFeature([{ name: Comment.name, schema: CommentSchema }])
    ],
  controllers: [CommentsController],
  providers: [CommentService]
})
export class CommentsModule {}
