<?php
        Router::connect('/teacher/', array('[method]'=>'GET','controller' => 'teacher', 'action' => 'index'));
                Router::connect('/teacher/', array('[method]'=>'POST','controller' => 'teacher', 'action' => 'add'));
                Router::connect('/teacher/id', array('[method]'=>'GET','controller' => 'teacher', 'action' => 'index','id'));
                Router::connect('/teacher/id', array('[method]'=>'PUT','controller' => 'teacher', 'action' => 'edit','id'));
                Router::connect('/teacher/id', array('[method]'=>'DELETE','controller' => 'teacher', 'action' => 'delete','id')); 
                CakePlugin::routes();
                Router::mapResources('teacher');
                Router::parseExtensions('json');
                
         require CAKE . 'Config' . DS . 'routes.php';
          