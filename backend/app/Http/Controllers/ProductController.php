<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Product;

class ProductController extends Controller
{
    public function addProduct(Request $request) {

        $product = new Product;
        $product->name = $request->input('name');
        $product->price = $request->input('price');
        $product->description = $request->input('description');

        $product_img = $request->file('image')->store('products');
        $product->file_path = ($product_img) ? $product_img : '';

        $product->save();

        return $product;
    }

    public function allProducts() {
        return Product::all();
    }


    public function destroy($id) {
        $product = Product::find($id);
        $deleted = $product->delete();
        return ($deleted) ? ["Result" => "Product has been deleted"] : ["Result" => "Operation Failed!"];
    }

    public function search($key) {
        // return $key;
        $items = Product::
        where('name','like','%'.$key.'%')
        ->orWhere('description','like','%'.$key.'%')
        ->orWhere('price','like','%'.$key.'%')
        ->get();

        return $items;
    }

    public function show($id) {
        $product = Product::find($id);
        return ($product) ? $product : "Record not found!";
    }

}
