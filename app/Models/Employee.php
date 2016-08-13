<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Employee extends BaseModel
{
    protected $transformerClass = 'App\Transformers\EmployeeTransformer';

    protected $fillable = [
        'name',
        'surname',
        'email',
        'birthdate',
    ];

    public static function rules($method = null, $id = null) {

        $rules = [
            'name' => 'max:45',
            'surname' => 'max:45',
            'email' => 'email|max:45',
            'birthdate' => 'max:45'
        ];

        switch ($method) {
            case 'GET':
            case 'DELETE':
            case 'POST':
                return $rules;
            case 'PATCH':
            case 'PUT': {
                return $rules;
            }
            default:
                return $rules;
        }
    }

    public static $relationsList = [];
}
