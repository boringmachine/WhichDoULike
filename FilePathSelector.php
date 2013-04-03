<?php

class FilePathSelector {

	private $dir_name;
	private $size;
	private $file_array;

	function initDirectoryPath($dir_name) {
		$this -> dir_name = $dir_name;
		$this -> file_array = array();
	}

	function loadFilePathIntoArray() {
		$handle = opendir($this -> dir_name) or die('Couldn\'t open.');
		while ($fname = readdir($handle)) {
			if (is_file($this -> dir_name . $fname)) {
				array_push($this->file_array, $fname);
			}
		}
		closedir($handle);
		$this -> size = count($this->file_array);
	}

	function selectKeyOfFilePath() {
		return rand(0, $this -> size - 1);
	}

	function getFilePath($key) {
		return $this -> file_array[$key];
	}

}
?>