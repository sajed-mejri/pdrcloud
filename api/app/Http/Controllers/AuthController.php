<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Validation\Rule;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            $token = $user->createToken('auth_token')->plainTextToken;

            return response()->json(['token' => $token, 'user' => $user]);
        }

        return response()->json(['error' => 'Invalid credentials'], 401);
    }

    public function register(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:6',
        ]);

        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
        ]);

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json(['token' => $token, 'user' => $user], 201);
    }

    public function logout(Request $request)
    {
        if (auth()->check()) {
            // User is authenticated, proceed with logout
            $request->user()->currentAccessToken()->delete();
            return response()->json(['message' => 'Successfully logged out']);
        } else {
            // User is not authenticated
            return response()->json(['message' => 'User not authenticated'], 401);
        }
    }
}
