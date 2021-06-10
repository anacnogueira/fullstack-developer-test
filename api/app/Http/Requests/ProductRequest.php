<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Validation\Rule;

class ProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'sku' => [
                'required',
                Rule::unique('products')->ignore($this->product),
            ],
            'name' => 'required',
            'price' => 'required|numeric',
            'description' => 'nullable',
        ];
    }

    public function messages()
    {
        return [
            'required' => 'O campo é obrigatório',
            'unique' => 'O campo requer um valor único',
            'numeric' => 'O campo deve conter um valor numérico'
        ];
    }

     /**
     * Transform the error messages into JSON
     *
     * @param array $errors
     * @return \Illuminate\Http\JsonResponse
     */
    protected function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json($validator->errors(), 422));
    }
}
