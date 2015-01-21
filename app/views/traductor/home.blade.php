@extends('traductor.template.master')
@section ('content')
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Laravel PHP Framework</title>
</head>
<body>
	<div class="welcome">
            hola traductor
            
            @if($bolFirstSession==true)
                <div class="alert alert-danger">primera vez del traductor</div>
            @else
                <div class="alert alert-danger">traductor viejo</div>
            @endif
            
	</div>
</body>
</html>
@stop
