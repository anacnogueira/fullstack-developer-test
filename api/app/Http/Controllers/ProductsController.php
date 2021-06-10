<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Http\Requests\ProductRequest;

class ProductsController extends Controller
{
    protected $product;

    public function __construct(Product $product)
    {
        $this->product = $product;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $products = $this->product->all();

        return response()->json([
            "success" => true,
            "message" => "Lista de Produtos",
            "data" => $products
        ]);   
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ProductRequest $request)
    {
        $product = $this->product->create($request->all());
 
        return response()->json([
            "success" => true,
            "message" => "Produto criado com sucessso.",
            "data" => $product
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $product = $this->product->findOrFail($id);
       
        return response()->json([
            "success" => true,
            "message" => "Producto recuperado com sucesso.",
            "product" => $product
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(ProductRequest $request, Product $product)
    {
        $input = $request->all();
        $product->sku = $input['sku'];
        $product->name = $input['name'];
        $product->price = $input['price'];
        $product->description = $input['description'];
        $product->save();

        return response()->json([
            "success" => true,
            "message" => "Produto Atualizado com Sucesso.",
            "data" => $product
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        $product->delete();

        return response()->json([
            "success" => true,
            "message" => "Produto Excluído com sucesso.",
            "data" => $product
        ]);
    }
}
