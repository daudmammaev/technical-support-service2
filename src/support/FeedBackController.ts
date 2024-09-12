import { Body, Controller, Post } from "@nestjs/common";
import { FeedBackService } from "./FeedBackService";
import { FeedBackDto } from "./dto/FeedBackDto";

@Controller('feedback')
export class FeedBackController {
    constructor( private readonly feedBackService: FeedBackService){}

    @Post()
    async createFeedBackPost( @Body() FeedBackDto: FeedBackDto): Promise<String> {
        return this.feedBackService.createFeedBack(FeedBackDto);
    }
}