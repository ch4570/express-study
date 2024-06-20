import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors'
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import createError from 'http-errors';

import userRouter from './routes/userRouter';
import sampleRouter from './routes/sampleRouter'
import indexRouter from './routes/indexRouter'

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(userRouter)
app.use(sampleRouter)
app.use(indexRouter)

// error handler
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  res
      .status(error.status || 500)
      .send({
        name: error.name || 'Internal Server Error',
        message: error.message || '서버 내부에서 오류가 발생했습니다.'
      });
});

export default app;
