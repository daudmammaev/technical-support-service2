import FirebaseFirestore from "@google-cloud/firestore";
import { Injectable } from "@nestjs/common";
import * as admin from 'firebase-admin'

@Injectable()
export class FirebaseService {
    private readonly db: FirebaseFirestore.Firestore;

    constructor() {
        const serviceAccount = require("C:/Users/daudm/OneDrive/Рабочий стол/work/technical-support-service2/service-account.json");
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
        });
        this.db = admin.firestore();
        
    }
    getFirestoreInstance(): FirebaseFirestore.Firestore {
        return this.db;
    }
}