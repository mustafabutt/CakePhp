<?php
				class CtrlsController extends AppController
				{
					function index()
					{
						$this->loadModel("Ctrl");
						$users = $this->Ctrl->find('all');
						//var_dump($users);
						//debug($this->crud->schema());
						$users = Set::extract($users, '{n}.Ctrl');
						$this->set('message', json_encode($users,JSON_PRETTY_PRINT));  
					}
					function view($id)
					{
						$this->loadModel("Ctrl");
						$user = $this->Ctrl->findById($id);
						if (!$user)
							$this->set('message', "User Not Found..!");
						else
							$this->set('message',json_encode($user['Ctrl'],JSON_PRETTY_PRINT));	
					}
					function add()
					{
						if ( !empty( $this->request->input() ) )
						{
							$this->loadModel('Ctrl');
							$data = $this->request->input('json_decode',true);
							if( $this->Ctrl->save( $data ) )	
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
								$this->loadModel('Ctrl');
								$data = $this->request->input('json_decode');
								$user = $this->Ctrl->findById($id);
								$user['Ctrl']['id']= $id;
								$user['Ctrl']['first_name']= $data->first_name;
								$user['Ctrl']['last_name']= $data->last_name;
								if($this->Ctrl->save($user) )
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
						$this->loadModel('Ctrl');
						if($this->Ctrl->delete($id))
							$this->set('message',"User with ID = $id is Deleted.");
						else
							$this->set('message',"Cannot Delete.");
					}	
				}
			?>