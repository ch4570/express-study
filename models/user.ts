import mongoose, { Schema, Document } from "mongoose";

// User 인터페이스 정의
export interface User extends Document {
    name: string;
    email: string;
    password: string;
}

// User 스키마 정의
const UserSchema = new Schema({
    name : { type: String, required: true },
    email : { type: String, required: true },
    password: { type: String, required: true }
});

// User 모델 생성
export const User = mongoose.model<User>('User', UserSchema);