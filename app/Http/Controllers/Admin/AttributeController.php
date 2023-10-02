<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use App\Models\Attribute;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class AttributeController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Attribute/AttributeIndex', [
            'attributes' => Attribute::all()
        ]);
    }
    public function create()
    {
        return Inertia::render('Admin/Attribute/AttributeAdd');
    }
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255|unique:' . Attribute::class,
            'slug' => 'required|string|max:255|unique:' . Attribute::class,
            'display_as' => 'required',
        ]);
        $attribute = new Attribute();
        $attribute->name = $request->input('name');
        $attribute->slug = $request->input('slug');
        $attribute->display_as = $request->input('display_as');
        $attribute->save();
        return redirect()->route('products.attribute.index')->with([
            'message' => 'Product Attribute Added Successfully'
        ]);
    }
}