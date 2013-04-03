<?php
require_once('CountDataManager.php');
require_once('FilePathSelector.php');

$manager = new CountDataManager();
$selector = new FilePathSelector();

if(array_key_exists("name",$_GET)){
    $manager->filename = 'data.json';
    $key = $_GET["name"];
    $manager->readCountDataByJSON($key);
    $manager->writeDataAsJSON();
}

$selector->initDirectoryPath("./img/");
$selector->loadFilePathIntoArray();

$key1 = $selector->selectKeyOfFilePath();
while (($key2 = $selector->selectKeyOfFilePath()) == $key1);

$img1 = $selector->getFilePath($key1);
$img2 = $selector->getFilePath($key2);

// echo file name as json
$id_name = array("img1", "img2");
echo json_encode(array($id_name[0] => $img1, $id_name[1] => $img2));

?>