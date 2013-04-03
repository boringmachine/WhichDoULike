<?php
class CountDataManager{
    var $filename;
    private $data;

    function readCountDataByJSON($key){
	$handle = fopen($this->filename, 'r');
	$this->data = json_decode(fread($handle, filesize($this->filename)), TRUE);
	if (array_key_exists($key, $this->data)) {
	    $this->data[$key]++;
	} else {
	    $this->data[$key] = 1;
	}
	fclose($handle);
    }

    function writeDataAsJSON(){
	$handle = fopen($this->filename, 'w');             
	fwrite($handle, json_encode($this->data));
	fclose($handle);
    }
}
?>