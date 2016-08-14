<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Employee;
use App\Http\Requests;

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
}
