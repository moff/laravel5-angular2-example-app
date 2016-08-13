<?php
namespace App\Transformers;

use League\Fractal\TransformerAbstract;
use App\Models\Employee;

class EmployeeTransformer extends TransformerAbstract
{
    protected $availableIncludes = [];
    protected $defaultIncludes = [];

    public function transform(Employee $employee = null)
    {
        if (!$employee) {
            return [];
        }

        return [
            'id' => (int) $employee->id,
            'name' => $employee->name,
            'surname' => $employee->surname,
            'email' => $employee->email,
            'birthdate' => $employee->birthdate,
        ];
    }
}
