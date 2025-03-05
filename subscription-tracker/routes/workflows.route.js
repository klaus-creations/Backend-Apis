import { Router } from "express";

const workflowRouter = Router();
import { sendReminders } from "../controllers/workflows.controller";

workflowRouter.post("/subscription/reminder", sendReminders);
export default workflowRouter();
