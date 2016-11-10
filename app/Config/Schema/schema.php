<?php
class CrudSchema extends CakeSchema {
	public $name = "crud";
	
	public function before($event = array()) {
		return true;
	}
	
	public function after($event = array()) {
	}
	
    public $crud = array(
        'id' => array('type' => 'integer', 'key' => 'primary'),
        'first_name' => array('type' => 'string'),
        'last_name' => array('type' => 'string'),
        'indexes' => array('PRIMARY' => array('column' => 'id', 'unique' => 1))
    );

    // more tables...
}
?>