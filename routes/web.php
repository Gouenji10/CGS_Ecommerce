<?php

use App\Http\Controllers\Admin\AttributeController;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\CustomerController;
use App\Http\Controllers\Admin\ProductController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth','role:customer','verified'])->name('dashboard');

Route::middleware(['auth','role:admin'])->group(function(){
    Route::get('/admin/dashboard',function(){
        return Inertia::render('Admin/DashboardAdmin');
    })->name('admin.dashboard');
});


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware(['auth', 'role:admin'])->group(function(){
    Route::get('/admin/customers',[CustomerController::class,'index'])->name('customers.index');
});

Route::middleware(['auth', 'role:admin'])->group(function(){
    Route::get('/admin/products',[ProductController::class,'index'])->name('products.index');
});

Route::middleware(['auth', 'role:admin'])->group(function(){
    Route::get('/admin/products/categories',[CategoryController::class,'index'])->name('products.category.index');
    Route::get('/admin/products/categories/create',[CategoryController::class,'create'])->name('products.category.add');
    Route::post('/admin/products/categories/store',[CategoryController::class,'store'])->name('products.category.store');
});

Route::middleware(['auth', 'role:admin'])->group(function(){
    Route::get('/admin/products/attributes',[AttributeController::class,'index'])->name('products.attribute.index');
    Route::get('/admin/products/attributes/create',[AttributeController::class,'create'])->name('products.attribute.add');
    Route::post('/admin/products/attributes/store',[AttributeController::class,'store'])->name('products.attribute.store');

});

require __DIR__.'/auth.php';
