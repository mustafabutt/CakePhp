<?php
				class AssignmentsController extends AppController
				{
					function index()
					{
						$this->loadModel('Assignment');
						$params = array('fields' =>array('id','first_name','last_name'));
						$users = $this->Assignment->find('all',$params);
						if($users!=null)
						{
							$users = Set::extract($users,"{n}.Assignment");
							//var_dump($users);
							$this->set('message', json_encode($users,JSON_PRETTY_PRINT));  
						}
						else
							$this->set('message', "Database is Empty...!");
					}
					function view($id)
					{
						$this->loadModel('Assignment');
						$id = (string) $id;
						$user = $this->Assignment->findById($id);
						//var_dump($user);
						if (!$user)
							$this->set('message', "User Not Found..!");
						else
							$this->set('message',json_encode($user['Assignment'],JSON_PRETTY_PRINT));	
					}
					function add()
					{
						if ( !empty( $this->request->input() ) )
						{
							$this->loadModel('Assignment');						
							$data = $this->request->input('json_decode',true);	
							$data['_id'] = $this->getNextSequence("userid");
							if( $this->Assignment->save( $data ) )	
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
							$this->set('message',"Error: ID is not Entered...");
						else
						{
							if ( !empty( $this->request->input() ) )
							{
								$this->loadModel('Assignment');	
								$data = $this->request->input('json_decode');
								$id = (string) $id;
								$user = $this->Assignment->findById($id);
								$user['Assignment']['first_name']= $data->first_name;
								$user['Assignment']['last_name']= $data->last_name;
								if($this->Assignment->save($user) )
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
						$this->loadModel('Assignment');
						$id = (string) $id;
						if($this->Assignment->delete($id))
							$this->set('message',"User with ID = $id is Deleted.");
						else
							$this->set('message',"Cannot Delete.");
					}
					function getNextSequence($name) {	
						$m =new Mongo();
						$db = $m->selectDB("users");
						$db->command(
							array(
								'findandmodify'=>'counter',
								'query'=> array( '_id'=> $name ),
								'update'=> array( '$inc'=> array( 'seq'=> 1 ) ),
								'new' => TRUE
							)
						);
						$result =$db->counter->findOne(array("_id"=>$name));
						return (string) $result['seq'];
					}
				}
			?>