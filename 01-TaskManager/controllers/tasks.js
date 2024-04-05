const Task = require("../models/Task");
const mongoose = require("mongoose");
const asyncWrapper = require("../middleware/async");
const {createCustomError} = require('../errors/custom-error')
const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ success: true, msg: "Create success", task: task });
});



const getAllTasks = asyncWrapper(async (req, res,next) => {
  const tasks = await Task.find({});
  res
    .status(201)
    .json({ success: true, msg: "get allTask success", tasks: tasks });
});

const getTask = asyncWrapper (async (req, res,next) => {
  const { id } = req.params;
  const task = await Task.findById(id);
  if (!task){
    return next(createCustomError(`No task with the id = ${id}`), 404)
  }
  
  res
    .status(201)
    .json({ success: true, msg: "getOneTask success", task: task });
});

const updateTask =asyncWrapper (async (req, res,next) => {
  const { id } = req.params;
  const task = await Task.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task){
    return next(createCustomError(`No task with the id = ${id}`), 404)
  }
  res.status(201).json({ success: true, msg: "update success", task: task });
});

const deleteTask = asyncWrapper(async (req, res,next) => {
  const { id } = req.params;
  const task = await Task.findByIdAndDelete(id);
  if (!task){
    return next(createCustomError(`No task with the id = ${id}`), 404)
  }
  res.status(201).json({ success: true, msg: "delete success", task: null });
});
module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
