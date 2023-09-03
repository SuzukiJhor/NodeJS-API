const express = require("express");
const tasksController = require("./controllers/tasksController");
const tasksMiddeware = require("./middlewares/tasksMiddleware");
const router = express.Router();

router.get("/tasks", tasksController.getAll);
router.post("/tasks", tasksMiddeware.validateTitle, tasksController.createTask);
router.delete("/tasks/:id", tasksController.deleteTask);
router.put(
  "/tasks/:id",
  tasksMiddeware.validateTitle,
  tasksMiddeware.validateStatus,
  tasksController.updateTask
);

module.exports = router;
