<?php
if(array_key_exists("name", $_GET)){
  //open json file
  $name = $_GET["name"];
  $filename = 'data.json';
  $handle = fopen($filename, 'r');
  $data = json_decode(fread($handle, filesize($filename)),TRUE);
  if(array_key_exists($name,$data)){
    $data[$name]++;
  }else{
    $data[$name]=1;
  }
  fclose($handle);
  $handle = fopen($filename,'w');
  fwrite($handle,json_encode($data));
  fclose($handle);
}

//init
define('IMG_DIR', './img/');
$file_array = array();
$handle = opendir(IMG_DIR) or die('Couldn\'t open.');
// get file at IMG_DIR
while ($fname = readdir($handle)) {
  if (is_file(IMG_DIR . $fname)) {
    array_push($file_array, $fname);
  }
} 

//finalize
closedir($handle);

//init
$max = count($file_array)-1;
$min = 0;
$key1 = rand($min,$max);
while(($key2 = rand($min,$max)) == $key1);

// set image file
$img1 = $file_array[$key1];
$img2 = $file_array[$key2];

// echo file name as json
$id_name = array("img1","img2");
echo json_encode(
array(
      $id_name[0]=>$img1,
      $id_name[1]=>$img2
));

/* debug 
foreach ($file_array as $key=>$value)
   echo $key." ".$value . '<br />';
*/
?>