import { Body, Injectable, Post } from "@nestjs/common";
import { randomUUID } from "crypto";

import { UUID } from "typeorm/driver/mongodb/bson.typings";
import { FirebaseService } from "../firebase/FirebaseService";
import { FeedBack } from "./FeedBack";
import { FeedBackDto } from "./dto/FeedBackDto";


@Injectable()
export class FeedBackService {
    constructor ( private readonly firebaseService: FirebaseService) {}

    async createFeedBack( feedBackDto: Partial<FeedBackDto>): Promise<String> {
        const firestore = this.firebaseService.getFirestoreInstance();
        
        
        if(!feedBackDto.body?.length) {
            return "body is empty";
        }
        if(!feedBackDto.email?.length) {
            return "email is empty";
        }
        if(!feedBackDto.title?.length) {
            return "title is empty";
        }

        let feedBack: FeedBack = {
            title: feedBackDto.title,
            body: feedBackDto.body,
            email: feedBackDto.email,
        };
        
        firestore.collection('feedbacks').add(feedBack);
        
        return feedBack.body + feedBack.email + feedBack.title;
    }

}