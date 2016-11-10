<?php
                class buttController extends AppController
                {
                    function index()
                    {
                        $this->loadModel("crud");
                        $users = $this->crud->find('all');
                        //var_dump($users);
                        //debug($this->crud->schema());
                        $users = Set::extract($users, '{n}.crud');
                        $this->set('message', json_encode($users,JSON_PRETTY_PRINT));  
                        $this->autoRender = false;
                         return json_encode($users);
                     }
                    function view($id)
                    {
                        $this->loadModel("crud");
                        $user = $this->crud->findById($id);
                        if (!$user)
                            $this->set('message', "User Not Found..!");
                        else
                            $this->set('message',json_encode($user['crud'],JSON_PRETTY_PRINT));   
                        $this->autoRender = false;
                         return json_encode($user['crud']);
                     }
                    function add()
                    {
                        if ( !empty( $this->request->input() ) )
                        {
                            $this->loadModel('crud');
                            $data = $this->request->input('json_decode',true);
                            if( $this->crud->save( $data ) )  
                            {
                                $this->Session->setFlash("User Has been Saved.");
                                $this->header( 'HTTP/1.1 201: Created' );
                            }
                            else
                                $this->set('message',"Error: Nothing Saved");
                        }
                        else
                            $this->set('message',"Error: Invalid Input.");
                        $this->autoRender = false;
                     }
                    function edit($id)
                    {
                        if($id=="id")
                            $this->set('message',"Error: ID is not Provided...");
                        else
                        {
                            if ( !empty( $this->request->input() ) )
                            {
                                $this->loadModel('crud');
                                $data = $this->request->input('json_decode');
                                $user = $this->crud->findById($id);
                                $user['crud']['id']= $id;
                                $user['crud']['first_name']= $data->first_name;
                                $user['crud']['last_name']= $data->last_name;
                                if($this->crud->save($user) )
                                    $this->set('message',"User Has been Updated.");
                                else
                                    $this->set('message',"Error: Cannot Update"); 
                            }
                            else
                                $this->set('message',"Error: Invalid Input.");
                            $this->autoRender = false;
                         }
                    }
                    function delete($id)
                    {
                        $this->loadModel('crud');
                        if($this->crud->delete($id))
                            $this->set('message',"User with ID = $id is Deleted.");
                        else
                            $this->set('message',"Cannot Delete.");
                        $this->autoRender = false;
                     }   
                }
            ?>