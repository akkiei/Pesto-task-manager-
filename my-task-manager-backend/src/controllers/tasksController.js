const Task = require("../models/taskModel");

exports.getAllTasks = async (req, res) => {
  try {
    const params = req.query;
    console.log("PARAMS:", req.query.status);
    let tasks;
    if (params.status.length > 0) {
      console.log("INSIDE IF");
      tasks = await Task.find({ status: params.status });
    } else {
      console.log("INSIDE ELSE");

      tasks = await Task.find();
    }

    console.log("TASKS:", tasks);
    res.status(200).json(tasks);
  } catch (error) {
    console.log("error", error);
    res.status(500).send(error);
  }
};

exports.createTask = async (req, res) => {
  try {
    const task = new Task(req.body);
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!task) {
      return res.status(404).send();
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      return res.status(404).send();
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).send(error);
  }
};
