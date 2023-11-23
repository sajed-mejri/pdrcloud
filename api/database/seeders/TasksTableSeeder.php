<?php
namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Task;

class TasksTableSeeder extends Seeder
{
    public function run()
    {
        Task::create([
            'title' => 'Sample Task 1',
            'description' => 'This is a sample task description.',
            'status' => 'pending',
            'due_date' => now()->addDays(7),
        ]);

        Task::create([
            'title' => 'Sample Task 2',
            'description' => 'Another sample task.',
            'status' => 'completed',
            'due_date' => now()->addDays(5),
        ]);
    }
}

