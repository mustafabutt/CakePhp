<?php 
                 namespace UsersTest;
                 use PHPUnit_Framework_TestCase;
                 use SilexApplication;
                 require('../../index.php');
                 class teacherTest extends  PHPUnit_Framework_TestCase{
                     public function testconnect(){
                         $client = new teacher('/teacher', array(
                                 'request.options' => array(
                                 'exceptions' => false,
                             )
                             ));
                         $data = array(
                             'id' => 'id',
                             'username' => 'username',
                             'email' => 'email',
                             'password' =>'password'
                         );
                         $request = $client->post('/teacher', json_encode($data));
                         $response = $request->send();
                         $this->assertEquals(201, $response->getStatusCode());
                         $data = json_decode($response->getBody(true), true);
                         $this->assertArrayHasKey('username', $data);
                         //test get method for teacher
                         $request = $client->get('/teacher');
                         $response = $request->send();
                         $this->assertEquals(200, $response->getStatusCode());
                         //test single get method for teacher
                         $request = $client->get('/teacher{id}');
                         $response = $request->send();
                         $this->assertEquals(200, $response->getStatusCode());
                         //test put method for teacher
                         $request = $client->put('/teacher{id}');
                         $response = $request->send();
                         $this->assertEquals(200, $response->getStatusCode());
                         //test delete method for teacher
                         $request = $client->delete('/teacher{id}');
                         $response = $request->send();
                         $this->assertEquals(204, $response->getStatusCode());
                     }
                 } 