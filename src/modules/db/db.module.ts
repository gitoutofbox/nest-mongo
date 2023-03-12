import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports:[
        MongooseModule.forRoot('mongodb+srv://sourav:Sourav2749102@cluster-shop.4onesua.mongodb.net/sample_mflix?retryWrites=true&w=majority')
    ]
})
export class DbModule {}
