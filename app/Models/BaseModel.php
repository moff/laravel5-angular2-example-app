<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

class BaseModel extends Model {

    use Traits\TransformerTrait;

}
