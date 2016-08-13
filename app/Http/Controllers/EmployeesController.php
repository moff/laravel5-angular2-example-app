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
}
