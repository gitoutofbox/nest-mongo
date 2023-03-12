import { Controller, Get } from '@nestjs/common';
import { CommentService } from '../../service/comment/comment.service';

@Controller('comments')
export class CommentsController {
    constructor(
        private commentService: CommentService
    ) { }
    @Get()
    comments() {
        return this.commentService.findAll();
    }
}
