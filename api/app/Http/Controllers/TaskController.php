<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Task;

class TaskController extends Controller
{
    public function create(Request $request)
    {
        $request->validate([
            'title' => 'required|max:255',
            'description' => 'nullable',
            'status' => 'required|in:pending,completed',
            'due_date' => 'nullable|date',
        ]);

        $task = Task::create([
            'title' => $request->input('title'),
            'description' => $request->input('description'),
            'status' => $request->input('status'),
            'due_date' => $request->input('due_date'),
        ]);

        return response()->json(['message' => 'Task created successfully', 'task' => $task], 201);
    }

    public function delete(Task $task)
    {
        $task->delete();

        return response()->json(['message' => 'Task deleted successfully']);
    }
}

