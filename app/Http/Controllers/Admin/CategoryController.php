<?php

namespace App\Http\Controllers\Admin;

use App\Models\Category;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CategoryController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Category/CategoryIndex');
    }
    public function create()
    {
        return Inertia::render('Admin/Category/CategoryAdd');
    }
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255|unique:' . Category::class,
            'slug' => 'required|string|max:255|unique:' . Category::class,
            'parent_id' => 'required',
        ]);
        Category::create($request->input());
        return redirect()->route('products.category.index')->with([
            'message' => 'Product Category Added Successfully'
        ]);
    }
}