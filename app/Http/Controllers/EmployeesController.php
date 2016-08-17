<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Employee;
use App\Http\Requests;
use App\Http\Requests\EmployeeRequest;
use Response;

class EmployeesController extends Controller
{
    /**
     * Display a listing of the employees resource.
     *
     * @return Response
     */
    public function index(Request $request)
    {
        return Employee::all();
    }
    
    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return Response
     */
    public function show($id)
    {
        return Employee::findOrFail($id);
    }
    
    public function update(EmployeeRequest $request, $id)
    {
        $employee = Employee::findOrFail($id);
        $employee->fill($request->all());

        if ($employee->save()) {
            return $employee->fresh();
        }

        return Response::json(array(
            'error' => true,
            'message' => 'Employee not updated.'
        ), 400);
    }
}
