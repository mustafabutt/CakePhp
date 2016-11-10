<?php
               header('Access-Control-Allow-Origin: *');
                         header('Access-Control-Allow-Headers:AUTHORIZATION,content-type,X-Requested-With');
                         header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
                         header('Content-Type','application/json'); 
                 class teacherController extends AppController
                 {
                     function index()
                     {
                         $this->loadModel('teacher');
                         $users = $this->teacher->find('all');
                         $users = Set::extract($users, '{n}.teacher');
                         $this->autoRender = false;
                         return json_encode($users);
                     }
                     function view($id)
                     {
                         $this->loadModel('teacher');
                         $user = $this->teacher->findById($id);
                          $this->autoRender = false;
                         return json_encode($user['teacher']);
                     }
                     function add()
                     {
                         $this->autoRender = false;
                         if ( !empty( $this->request->input() ) )
                         {
                             $this->loadModel('teacher');
                             $users = $this->request->input('json_decode',true);
                             if( $this->teacher->save( $users ) )
                             {
                                 $this->Session->setFlash('User Has been Saved.');
                                 $this->header( 'HTTP/1.1 201: Created' );
                             }
                             else
                                 $this->set('message','Error: Nothing Saved');
                         }
                         else
                             $this->set('message','Error: Invalid Input.');
                     }
                     function edit($id)
                     {
                          $this->autoRender = false;
                         if($id=='id')
                             $this->set('message','Error: ID is not Provided...');
                         else
                         {
                             if ( !empty( $this->request->input() ) )
                             {
                                 $this->loadModel('teacher');
                                 $data = $this->request->input('json_decode');
                                 $user = $this->teacher->findById($id);
                                 $user['teacher']['id']= $id;
                                 		$user['teacher']['id']= $data->id;
  		$user['teacher']['username']= $data->username;
  		$user['teacher']['email']= $data->email;
  		$user['teacher']['password']= $data->password;
  
                                 $this->teacher->save($user);
                             }
                             else
                                 $this->set('message','Error: Invalid Input.');
                         }
                     }
                     function delete($id)
                     {
                          $this->autoRender = false;
                         $this->loadModel('teacher');
                         if($this->teacher->delete($id))
                             $this->set('message','User with ID = $id is Deleted.');
                         else
                             $this->set('message','Cannot Delete.');
                     }
                 }
             ?>