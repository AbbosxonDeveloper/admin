import { Router } from "express";
import { Get } from "./food";

export default Router()
    .get('/', Get)