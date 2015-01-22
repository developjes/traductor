@extends('traductor.template.master')
@section ('content')
<!doctype html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Laravel PHP Framework</title>
    </head>
    <body>
        <div id="container">
            <form id="formTranslatorAccount" action="#">
                <div>
                    <!--TODO -->
                    <h3>Account</h3>
                    <section>
                       <div>
                            <div>
                                <div>
                                    <label>Email* </label>
                                </div>
                                <div>
                                    <input type="email" id="emailTranslator" name="emailTraslator" />
                                </div>
                            </div>
                            <div>
                                <div>
                                    <label>Password* </label>
                                </div>
                                <div>
                                    <input type="password" id="passwordTranslator" name="passwordTranslator" />
                                </div>
                            </div>
                            <div>
                                <div> 
                                    <label>Confirm Password*</label>
                                </div>
                                <div>
                                    <input type="password" id="confirmPasswordTranslator" name="confirmPasswordTranslator" />      
                                </div>                      
                            </div>
                        </div>
                    </section> 
                </div>
            </form>    
        </div>
    </body>
</html>
@stop