import {Entity}  from 'typeorm';


@Entity()
export class FeedBack {
    title: string
    body:string
    email:string
}