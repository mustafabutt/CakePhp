<?php
				class CrudsController extends AppController
				{
					function index()
					{
						$this->loadModel("Crud");
						$users = $this->Crud->find('all');
						//var_dump($users);
						//debug($this->crud->schema());
						$users = Set::extract($users, '{n}.Crud');
						$this->set('message', json_encode($users,JSON_PRETTY_PRINT));  
					}
					function view($id)
					{
						$this->loadModel("Crud");
						$user = $this->Crud->findById($id);
						if (!$user)
							$this->set('message', "User Not Found..!");
						else
							$this->set('message',json_encode($user['Crud'],JSON_PRETTY_PRINT));	
					}
					function add()
					{
						if ( !empty( $this->request->input() ) )
						{
							$this->loadModel('Crud');
							$data = $this->request->input('json_decode',true);
							if( $this->Crud->save( $data ) )	
							{
								$this->Session->setFlash("User Has been Saved.");
								$this->header( 'HTTP/1.1 201: Created' );
							}
							else
								$this->set('message',"Error: Nothing Saved");
						}
						else
							$this->set('message',"Error: Invalid Input.");
					}
					function edit($id)
					{
						if($id=="id")
							$this->set('message',"Error: ID is not Provided...");
						else
						{
							if ( !empty( $this->request->input() ) )
							{
								$this->loadModel('Crud');
								$data = $this->request->input('json_decode');
								$user = $this->Crud->findById($id);
								$user['Crud']['id']= $id;
								$user['Crud']['first_name']= $data->first_name;
								$user['Crud']['last_name']= $data->last_name;
								if($this->Crud->save($user) )
									$this->set('message',"User Has been Updated.");
								else
									$this->set('message',"Error: Cannot Update"); 
							}
							else
								$this->set('message',"Error: Invalid Input.");
						}
					}
					function delete($id)
					{
						$this->loadModel('Crud');
						if($this->Crud->delete($id))
							$this->set('message',"User with ID = $id is Deleted.");
						else
							$this->set('message',"Cannot Delete.");
					}	
				}
			?>